import { About, BlogSectionHome, Hero, ProjectsHome } from "@/components";
import { getBlogPosts } from "@/utils/wordpress";

export default async function Home() {

    // fetch blog posts from wordpress
    const data = await getBlogPosts()

  return (
    <>
      <Hero/>
      <About/>
      <ProjectsHome/>
      <BlogSectionHome data={data} />
    </>
  )
}
