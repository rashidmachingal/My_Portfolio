import { ProjectsCards } from "./ProjectsCards"

export const ProjectsPage = () => {
  return (
    <div className="projects" >
        <h2>My Personal Projects</h2>
        <p>
          Here are some of my personal projects along with live links
          and GitHub repositories to showcase my work.
        </p>

        <div className="projects_list project_page_list" >
            <ProjectsCards/>
            <ProjectsCards/>
            <ProjectsCards/>
        </div>
    </div>
  )
}
