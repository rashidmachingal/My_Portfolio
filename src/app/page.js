import { About, BlogSectionHome, Hero, ProjectsHome, Skills } from "@/components";
import { getBlogPosts } from "@/utils/wordpress";

export const metadata = {
  title: 'Rashid Machingal - React/Front-End Web Developer From Malappuram, Kerala',
  description: 'Welcome to the portfolio of Rashid Machingal, a skilled React and Front-End Web Developer based in Malappuram, Kerala. Explore my projects, skills, and blog posts.',
}

export default async function Home() {

    // fetch blog posts from wordpress
    const data = await getBlogPosts()

  return (
    <>
      <Hero/>
      <About/>
      {/* <Skills/> */}
      <ProjectsHome/>
      <BlogSectionHome data={data} />
    </>
  )
}
