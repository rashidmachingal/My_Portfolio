import { BlogSection } from "@/components";
import { getBlogPosts } from "@/utils/wordpress";

export default async function Blog() {

  // fetch blog posts from wordpress
  const data = await getBlogPosts()

  return (
    <BlogSection data={data} />
  )
}
