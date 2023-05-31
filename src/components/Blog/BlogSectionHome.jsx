import { BlogCard } from "@/components"
import Link from "next/link"

export const BlogSectionHome = () => {

  return (
    <div className="blog_section" >
      <h2>Latest Blog Posts</h2>
      <p>Here is my last three blog posts. More blogs you can read at <Link href="/blogs" >blogs page</Link></p>
      <div className="blog_cards" >
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}
