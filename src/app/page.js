import { About, BlogSectionHome, Hero, ProjectsHome, Skills } from "@/components";
import { getBlogPosts } from "@/utils/wordpress";

export default async function Home() {

    // fetch blog posts from wordpress
    const data = await getBlogPosts()

  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <ProjectsHome/>
      <BlogSectionHome data={data} />
    </>
  )
}
