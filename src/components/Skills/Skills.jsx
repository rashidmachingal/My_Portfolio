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
          <SiNginx color="#009639" size={23} />
          <span>Nginx</span>
        </div>
      </div>
    </div>
  )
}
