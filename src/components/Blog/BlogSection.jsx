import { BlogCard } from "@/components"

export const BlogSection = () => {

  return (
    <div className="blog_section" >
      <h2>My all blog posts</h2>
      <p>Here is my all blog posts on coding, technology and more.</p>
      <div className="blog_cards" >
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}
