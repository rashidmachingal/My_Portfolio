import Link from "next/link"

export const ProjectsCards = () => {
  return (
    <div className="project_page_card" >
      <div className="project_title" >
        <Link href="/" ><h3>listmonk</h3></Link>
        <div>
         <Link target="_blank" href="/" ><button>Source Code</button></Link>
         <Link target="_blank" href="/" ><button>Live Link</button></Link>
        </div>
      </div>

      <div className="project_page_desc" >
        <p>
         High performance, self-hosted, newsletter and mailing
         list manager with a modern dashboard. Single binary app.
        </p>
      </div>
    </div>
  )
}
