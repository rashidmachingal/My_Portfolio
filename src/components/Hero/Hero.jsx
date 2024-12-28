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
          title="Profile picture of Rashid Machingal"
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
          <div className='resume' >
            <Link target='_blank' href="/RashidMachingal-Resume.pdf">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={15} height={15} >
  <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" />
</svg>

            Download Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}