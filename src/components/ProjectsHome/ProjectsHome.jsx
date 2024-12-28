import { ProjectCard } from '@/components'
import Link from "next/link"

export const ProjectsHome = () => {

  const projectData = [
    {
      is_public: true,
      is_have_screenshots: false,
      title: "E-Commerce Store Builder",
      description: "A platform for users to create and manage their own e-commerce stores with multisite support and wildcard subdomains, The platform offers all the essential e-commerce store features.",
      github_link: "https://github.com/rashidmachingal/growthfied",
      live_link: "https://www.growthfied.com/",
      screenshots_link: ""
    },
    {
      is_public: true,
      is_have_screenshots: false,
      title: "Palunk Nighandu - English Malayalam Dictionary",
      description: "Palunk Nighandu is an English-to-Malayalam dictionary web app that empowers users to contribute. Created with Express.js, EJS, and MongoDB.",
      github_link: "https://github.com/rashidmachingal/Palunk_Nighandu",
      live_link: "https://palunknighandu.rashidmachingal.in",
    },
    {
      is_public: false,
      is_have_screenshots: true,
      title: "CSV Anywhere - Report Automation Service",
      description: "A report automation service where I converted Figma UI designs to React components for both the web and landing page.",
      github_link: "https://github.com/rashidmachingal/Palunk_Nighandu",
      live_link: "",
      screenshots_link: "/csvanywhere"
    },
    {
      is_public: false,
      is_have_screenshots: false,
      title: "Receipt Generation & Accounting - BCC Charitable Trust",
      description: "Created a feature for create digital PDF receipts with pdfkit library, replacing Bcc charitable trust’s previous use of physical receipts, work in progress.",
      github_link: "https://github.com/rashidmachingal/Palunk_Nighandu",
      live_link: "",
      screenshots_link: "/csvanywhere"
    }
  ]

  return (
    <div className="projects" >
        <h2>SOME OF MY PROJECT</h2>
        <p>
          Here are some of my projects along with live links
          and GitHub repositories to showcase my work.
        </p>

        <div className="projects_list" >
           {projectData.map((project, index) => {
              return (
                <ProjectCard
                  key={index} 
                  project={{
                  is_public: project.is_public,
                  is_have_screenshots: project.is_have_screenshots,
                  title: project.title, 
                  description: project.description,
                  github_link: project.github_link,
                  live_link: project.live_link,
                  screenshots_link: project.screenshots_link
                }} />
              )
            })}
        </div>
    </div>
  )
}