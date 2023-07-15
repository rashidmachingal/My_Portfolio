import Image from "next/image"
import Link from "next/link"

export const ProjectCard = ({project}) => {
  return (
    <div className="project_card" >
      <div className="project_img">
        <Image src={project.image}alt="Project Picture" />
      </div>
      <div className="project_details" >
        <div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
        <div>
          <Link target="_blank" href={project.github_link} >
            <button>Source Code</button>
          </Link>
          <Link target="_blank" href={project.live_link} >
            <button>Live Link</button>
          </Link>
        </div>
      </div>
    </div>
  )
}