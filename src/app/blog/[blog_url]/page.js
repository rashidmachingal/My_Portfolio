import { BlogPost as BlogPostComponent } from "@/components"
import { getSingleBlogPost } from "@/utils/wordpress"
import { use } from "react";

export default async function BlogPost({ params }) {

  // fetch single post from wordpress
  const blog_slug = params.blog_url
  console.log(blog_slug)
  const blog = await getSingleBlogPost(blog_slug)

  return <BlogPostComponent blog={blog} />
}
