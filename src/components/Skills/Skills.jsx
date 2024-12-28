import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiMongodb, SiNginx, SiExpress, SiRedis  } from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { LiaGit } from "react-icons/lia";

export const Skills = () => {
  return (
    <div className="skills" >
      <h2>TECHNOLOGIES</h2>
      <div className="skills_list">
        <div className="skills_box" >
          <RiReactjsFill color="#58c4dc" size={32} />
          <span>React Js</span>
        </div>
        <div className="skills_box" >
          <RiNextjsFill color="black" size={32} />
          <span>Next Js</span>
        </div>
        <div className="skills_box" >
          <SiJavascript color="#f7df1e" style={{ background: "black" }} size={25} />
          <span>Javascript</span>
        </div>
        <div className="skills_box" >
          <SiTypescript color="#3178c6" size={23} />
          <span>Typescript</span>
        </div>
        <div className="skills_box" >
          <SiRedis color="#ff4438" size={23} />
          <span>Redis</span>
        </div>
        <div className="skills_box" >
          <SiNginx color="#009639" size={23} />
          <span>Nginx</span>
        </div>
        <div className="skills_box" >
          <LiaGit color="#f05033" size={23} />
          <span>Git</span>
        </div>
      </div>
    </div>
  )
}
