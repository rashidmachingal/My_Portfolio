// fetch all blogs from wordpress
export async function getBlogPosts() {
  try {
    const res = await fetch(
      "https://mywordspresscms.rashidmachingal.in/wp-json/wp/v2/posts",
        { cache: "force-cache", next: { tags: ["blog"] } }
    );

    const posts = await res.json();
    const blogs = posts.map((post, index) => {
      const date = new Date(post.date);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const preview = post.content.rendered.split('</p>')[0].replace(/<[^>]+>/g, '');

      return {
        status: true,
        title: post.title.rendered,
        date: formattedDate,
        url: post.slug,
        preview: preview,
      };
    });

    return blogs;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error.message);
    return { status: false }
  }
}


// fetch single blog post from wordpress
export async function getSingleBlogPost(blog_slug) {
 try {
  const res = await fetch(`https://mywordspresscms.rashidmachingal.in/wp-json/wp/v2/posts?slug=${blog_slug}`,
      { cache: "force-cache", next: { tags: ["blog"] } }
  );

  const post = await res.json();

  // date formate like June 19 2023
  const date = new Date(post[0]?.date);
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const preview = post[0]?.content.rendered.split('</p>')[0].replace(/<[^>]+>/g, '');
    
  const blogPost = 
    {
      status: true,
      title: post[0]?.title.rendered,
      date: formattedDate,
      content: post[0]?.content.rendered,
      preview: preview,
      meta: {
        title: post[0]?.yoast_head_json?.title,
        description: post[0]?.yoast_head_json?.description
      }
    }

  return blogPost
 } catch (error) {
  console.error("Failed to fetch blog post:", error.message);
  return { status: false }
 }
}