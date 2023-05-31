import Link from "next/link"

export const BlogCard = () => {
  return (
    <div className="blog_card">
      <div>
      <div className="blog_card_date" >
        <p>May 02, 2023</p>
      </div>
      <Link className="blog_card_title" href="/blog/hello-world" >
        <h4>A lesson in creating and using niche business DSLs at scale</h4>
      </Link>
      </div>

      <div className="blog_card_line" >
        <p>A disorderly assortment of common sense ideas for scaling applicaions that we follow at Zerodha. TLDR: Simple scales. Scale application before infra. Keep networking and IO minimal.</p>
      </div>
    </div>
  )
}