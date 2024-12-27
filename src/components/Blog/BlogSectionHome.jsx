import { BlogCard } from "@/components"
import Link from "next/link"

export const BlogSectionHome = ({ data }) => {

  return (
    <div className="blog_section" >
      <h2>Latest Blog Posts</h2>
      <p>Here is my latest blog posts. More blogs you can read at <Link href="/blogs" >blogs page</Link></p>
      { data?.status !== false && <div className="blog_cards" >
      {data?.map((blog, index) => {
          return(
            <BlogCard key={index} 
             blog={{
              title: blog.title, 
              date: blog.date, 
              url: blog.url, 
              preview: blog.preview
             }} 
            />
          )
        })}
      </div>}
    </div>
  )
}
