import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import MyImage from '../../../public/rashid-machingal.jpeg'
import Image from "next/image"
import Link from 'next/link'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left_side">
      <Image
          src={MyImage}
          width={120}
          height={120}
          alt="Picture of Rashid Machingal"
          title="Profile picture of Rashid Machingal, he is a web developer"
        />
        <div>
          <h2>Hey I am Rashid</h2>
          <h1>React/Front-End Web Developer From Malappuram, Kerala</h1>
          <div className="social_icons">
            <Link href="https://github.com/rashidmachingal" target="_blank">
              <BsGithub style={{color: "black"}} />
            </Link>
            <Link href="https://www.linkedin.com/in/rashid-machingal/" target="_blank">
              <BsLinkedin style={{color: "#0077B5"}} />
            </Link>
            <Link href="https://instagram.com/rashid.machingal" target="_blank">
              <BsInstagram style={{color: "#e95950"}} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}