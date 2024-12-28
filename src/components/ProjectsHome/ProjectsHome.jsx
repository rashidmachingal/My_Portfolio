import { ProjectCard } from '@/components'
import Link from "next/link"

export const ProjectsHome = () => {

  const projectData = [
    {
      is_public: true,
      is_have_screenshots: false,
      title: "E-Commerce Store Builder",
      description: "A platform for users to create and manage their own e-commerce stores with multisite support and wildcard subdomains. Hosted on vps server ",
      points: [
        "Automatically assign wildcard subdomains for each store",
        "Deployed to a vps server",
        "Store owner can Integrate payment gateway",
        "Integrated Google Analytics API in dashboard"
      ],
      github_link: "https://github.com/rashidmachingal/growthfied",
      live_link: "https://www.growthfied.com/login",
      screenshots_link: "",
      tech_used: "Next Js (app router), Tailwind CSS, Typescript, Zustand Sate Management, Express Js, Node Js, MongoDB, Redis"
    },
    {
      is_public: true,
      is_have_screenshots: false,
      title: "English to Malayalam Dictionary Website & Telegram Bot",
      description: "Palunk Nighandu is an English-to-Malayalam dictionary web app that empowers users to contribute. Created with Express.js, EJS, and MongoDB.",
      points: [
        "Implemented crowd sourcing, people can contribute by add edit, word meanings"
      ],
      github_link: "https://github.com/rashidmachingal/Palunk_Nighandu",
      live_link: "https://palunknighandu.rashidmachingal.in",
      tech_used: "Node Js, Express Js, MongodB, EJS Template Engine"
    },
    {
      is_public: false,
      is_have_screenshots: false,
      title: "Receipt Generation & Accounting - BCC Charitable Trust",
      description: "Created a feature for create digital PDF receipts with pdfkit library, replacing Bcc charitable trust’s previous use of physical receipts, work in progress.",
      points: [
        "Created a feature for create digital PDF receipts with pdfkit library,replacing Bcc charitable trust’s previous use of physical receipts.",
        "Export data to csv",
        "Work in progress, with additional features being integrated.",
        "Integrated Google Analytics API in dashboard"
      ],
      github_link: "https://github.com/rashidmachingal/Palunk_Nighandu",
      live_link: "",
      screenshots_link: "/bccapp",
      tech_used: "React Js with Vite, Tailwind CSS, TanStack Table, Typescript, Express Js, Node Js, MongoDB, Redis"
    },
    {
      is_public: false,
      is_have_screenshots: true,
      title: "CSV Anywhere - Report Automation Service",
      description: "A report automation service where I converted Figma UI designs to React components for both the web and landing page.",
      points: [
        "Worked as a UI Developer",
        "Web App UI & Landing Page",
        "Converted Figma UI designs to React Js Components",
      ],
      github_link: "https://github.com/rashidmachingal/Palunk_Nighandu",
      live_link: "",
      screenshots_link: "/csvanywhere",
      tech_used: "Next Js Tailwind CSS, MUI, Typescript"
    },
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
                  screenshots_link: project.screenshots_link,
                  points: project.points,
                  tech_used: project.tech_used
                }} />
              )
            })}
        </div>
    </div>
  )
}