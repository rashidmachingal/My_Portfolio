import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci";
import { MdImageSearch } from "react-icons/md";

export const ProjectCard = ({project}) => {
  return (
    <div className="project_card" >
      <div className="project_details" >
        <div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          {project.points.map((item, index) => {
            return (
              <ul key={index} className="project_points" >
                <li>{item}</li>
              </ul>
            )
          })}
          <p className="tech-used" >Technologies Used: {project.tech_used}</p>
        </div>
        { project.is_public && (<div>
          <Link target="_blank" href={project.github_link} >
            <button>
              <FaGithub color="black" />
              Source Code
            </button>
          </Link>
          <Link target="_blank" href={project.live_link} >
            <button>
              <CiGlobe color="black" />
              Live Link
            </button>
          </Link>
        </div>)}
        { project.is_have_screenshots && (<div>
          <Link href={project.screenshots_link} >
            <button>
              <MdImageSearch color="black" />
              Screenshots
            </button>
          </Link>
        </div>)}
      </div>
    </div>
  )
}