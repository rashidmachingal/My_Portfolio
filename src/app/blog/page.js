import { BlogSection } from "@/components";
import { getBlogPosts } from "@/utils/wordpress";

export const metadata = {
  title: 'Blogs - Rashid Machingal',
  description: 'Read the latest blog posts by Rashid Machingal, a React and Front-End Web Developer based in Malappuram, Kerala. Explore topics like React, JavaScript, and Front-End Development.',
}

export default async function Blog() {

  // fetch blog posts from wordpress
  const data = await getBlogPosts()

  return (
    <BlogSection data={data} />
  )
}
