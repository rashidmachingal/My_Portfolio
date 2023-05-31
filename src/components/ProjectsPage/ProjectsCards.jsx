import Link from "next/link"

export const ProjectsCards = ({project}) => {
  return (
    <div className="project_page_card" >
      <div className="project_title" >
        <Link href={project.github_link} ><h3>{project.title}</h3></Link>
        <div>
         <Link target="_blank" href={project.github_link} ><button>Source Code</button></Link>
         <Link target="_blank" href={project.live_link} ><button>Live Link</button></Link>
        </div>
      </div>

      <div className="project_page_desc" >
        <p>{project.description}</p>
      </div>
    </div>
  )
}