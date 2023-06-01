// fetch all blogs from wordpress
export async function getBlogPosts() {
    const res = await fetch('https://mywordpresscms.000webhostapp.com/wp-json/wp/v2/posts',
    { next: { revalidate: 10 } });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    const posts = await res.json();
    
    const blogs = posts.map((post) => {
      const date = new Date(post.date);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const preview = post.content.rendered.split('</p>')[0].replace(/<[^>]+>/g, '');
  
      return {
        title: post.title.rendered,
        date: formattedDate,
        url: post.slug,
        preview: preview,
      };
    });
  
    return blogs
  }



// fetch single blog post from wordpress
export async function getSingleBlogPost(blog_slug) {
  const res = await fetch(`https://mywordpresscms.000webhostapp.com/wp-json/wp/v2/posts?slug=${blog_slug}`,
  { next: { revalidate: 10 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const post = await res.json();

  // date formate like June 19 2023
  const date = new Date(post[0]?.date);
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
  const blogPost = 
    {
      title: post[0]?.title.rendered,
      date: formattedDate,
      content: post[0]?.content.rendered
    }
  

  return blogPost
}