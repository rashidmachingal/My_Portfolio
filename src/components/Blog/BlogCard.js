import Image from "next/image"
import Link from "next/link"
import blogThumbnail from "../../../public/blog-thumbnail.png"

export const BlogCard = () => {
  return (
    <Link className="blog_card" href="/blog/hello-world" >
      <div className="blog_card_thumbnail" >
        <Image src={blogThumbnail} />
      </div>
      
      <div className="blog_card_title" >
        <h4>Exploring the wonders of minimalism</h4>
      </div>

      <div className="blog_card_date" >
        <p>May 02, 2023</p>
      </div>
    </Link>
  )
}
