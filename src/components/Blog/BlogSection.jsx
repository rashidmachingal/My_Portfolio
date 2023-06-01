import { BlogCard } from "@/components"

export const BlogSection = ({ data }) => {

  return (
    <div className="blog_section min_height" >
      <h2>My all blog posts</h2>
      <p>Here is my all blog posts on coding, technology and more.</p>
      <div className="blog_cards" >
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
      </div>
    </div>
  )
}
