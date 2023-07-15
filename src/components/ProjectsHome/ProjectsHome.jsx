import { ProjectCard } from '..'
import Project1 from '../../../public/project-1.png'
import Project2 from '../../../public/project-2.png'
import Link from "next/link"

export const ProjectsHome = () => {

  const projectData = [
    {
      title: "RashCart E-Commerce App",
      description: "An E-commerce web application with a clean UI, built with React, Node.js, Express Js, and MongoDB.",
      github_link: "https://github.com/rashidmachingal/Mern_Ecommerce_App",
      live_link: "/",
      image: Project1
    },
    {
      title: "Palunk Nighandu - English Malayalam Dictionary",
      description: "Palunk Nighandu is an English-to-Malayalam dictionary web app that empowers users to contribute. Created with Express Js, EJS, MongoDB",
      github_link: "https://github.com/rashidmachingal/Palunk_Nighandu",
      live_link: "https://lonely-sweatpants-ant.cyclic.app/",
      image: Project2
    }
  ]

  return (
    <div className="projects" >
        <h2>Some of my projects</h2>
        <p>
          Here are some of my projects along with live links
          and GitHub repositories to showcase my work. More projects on <Link href="/projects" >projects page</Link>
        </p>

        <div className="projects_list" >
           {projectData.map((project, index) => {
              return (
                <ProjectCard
                 key={index} 
                 project={{
                  title:project.title, 
                  description:project.description,
                  github_link:project.github_link,
                  live_link:project.live_link,
                  image: project.image
                }} />
              )
            })}
        </div>
    </div>
  )
}