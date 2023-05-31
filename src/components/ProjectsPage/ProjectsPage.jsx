import { ProjectsCards } from "@/components"


export const ProjectsPage = () => {

  const projectData = [
    {
      title: "RashCart E-Commerce App",
      description: "An E-commerce web application with a clean UI, built with React, Node.js, Express Js, and MongoDB.",
      github_link: "https://github.com/rashidmachingal/Mern_Ecommerce_App",
      live_link: "/"
    },
    {
      title: "Mallu Nighandu - English Malayalam Dictionary",
      description: "Mallu Nighandu is an English-Malayalam dictionary web application created with olam.in dataset.",
      github_link: "https://github.com/rashidmachingal/Mallu_Nighandu",
      live_link: "https://www.mallunighandu.tk/"
    }
  ]

  return (
    <div className="projects" >
        <h2>My Personal Projects</h2>
        <p>
          Here are some of my personal projects along with live links
          and GitHub repositories to showcase my work.
        </p>

        <div className="projects_list project_page_list" >
            {projectData.map((project, index) => {
              return (
                <ProjectsCards 
                 key={index} 
                 project={{
                  title:project.title, 
                  description:project.description,
                  github_link:project.github_link,
                  live_link:project.live_link
                }} />
              )
            })}
        </div>
    </div>
  )
}