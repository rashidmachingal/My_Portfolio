import Link from "next/link"

export const BlogCard = ({blog}) => {
  return (
    <div className="blog_card">
      <div>
      <div className="blog_card_date" >
        <p>{blog.date}</p>
      </div>
      <Link className="blog_card_title" href={`/blog/${blog.url}`} >
        <h4>{blog.title}</h4>
      </Link>
      </div>

      <div className="blog_card_line"  dangerouslySetInnerHTML={{ __html: blog.preview }} >
       
      </div>
    </div>
  )
}