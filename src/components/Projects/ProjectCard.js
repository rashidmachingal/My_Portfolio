import Image from "next/image"
import ProjectImg from '../../../public/project-1.png'
import Link from "next/link"

export const ProjectCard = () => {
  return (
    <>
    <div className="project_card" >
      <div className="project_img">
        <Image src={ProjectImg} />
      </div>
      <div className="project_details" >
        <div>
          <h4>RashCart E-Commerce App</h4>
          <p>
            With a focus on simplicity and clean design, this store prioritize
            user experience, making it easy for customers to find and purchase
            the products they 
          </p>
        </div>
        <div>
          <Link target="_blank" href="/" >
            <button>Source Code</button>
          </Link>
          <Link target="_blank" href="/" >
            <button>Live Link</button>
          </Link>
        </div>
      </div>
    </div>

    <div className="project_card" >
      <div className="project_img">
        <Image src={ProjectImg} />
      </div>
      <div className="project_details" >
        <div>
          <h4>RashCart E-Commerce App</h4>
          <p>
            With a focus on simplicity and clean design, this store prioritize
            user experience, making it easy for customers to find and purchase
            the products they 
          </p>
        </div>
        <div>
          <Link target="_blank" href="/" >
            <button>Source Code</button>
          </Link>
          <Link target="_blank" href="/" >
            <button>Live Link</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}