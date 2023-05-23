import { ProjectCard } from "./ProjectCard"
import Link from "next/link"

export const Projects = () => {
  return (
    <div className="projects" >
        <h2>Some of my projects</h2>
        <p>
          Here are some of my projects along with live links
          and GitHub repositories to showcase my work. More projects on <Link href="/projects" >projects page</Link>
        </p>

        <div className="projects_list" >
            <ProjectCard/>
        </div>
    </div>
  )
}