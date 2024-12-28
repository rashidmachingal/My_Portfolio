import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript, SiMongodb, SiNginx, SiExpress, SiRedis  } from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { LiaGit } from "react-icons/lia";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className="skills">
      <h2>TECHNOLOGIES</h2>
      <div className="skills_list">
        <div className="skills_box">
          <Image src="/icons/react.svg" alt="React Js" width={25} height={25} />
          <span>React Js</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/nextjs.svg" alt="Next Js" width={25} height={25} />
          <span>Next Js</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/javascript.svg" alt="Javascript" width={25} height={25} />
          <span>Javascript</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/typescript.svg" alt="Typescript" width={23} height={23} />
          <span>Typescript</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/tailwindcss.svg" alt="Tailwind" width={23} height={23} />
          <span>Tailwind</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/html.svg" alt="HTML" width={23} height={23} />
          <span>HTML</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/css.svg" alt="CSS" width={23} height={23} />
          <span>CSS</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/nodejs.svg" alt="Node Js" width={23} height={23} />
          <span>Node Js</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/expressjs.svg" alt="Express Js" width={23} height={23} />
          <span>Express Js</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/mongodb.svg" alt="Mongo DB" width={23} height={23} />
          <span>Mongo DB</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/redis.svg" alt="Redis" width={23} height={23} />
          <span>Redis</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/nginx.svg" alt="Nginx" width={23} height={23} />
          <span>Nginx</span>
        </div>
        <div className="skills_box">
          <Image src="/icons/git.svg" alt="Git" width={23} height={23} />
          <span>Git</span>
        </div>
      </div>
    </div>
  )
}
