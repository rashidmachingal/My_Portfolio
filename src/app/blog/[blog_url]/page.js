import { BlogPost as BlogPostComponent } from "@/components"
import { getSingleBlogPost } from "@/utils/wordpress"

export default async function BlogPost({ params }) {

  // fetch single post from wordpress
  const blog_slug = params.blog_url
  const blog = await getSingleBlogPost(blog_slug)

  return <BlogPostComponent blog={blog} />
}
