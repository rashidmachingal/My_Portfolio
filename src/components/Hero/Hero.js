import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import MyImage from '../../../public/rashid-machingal.jpeg'
import Image from "next/image"
import Link from 'next/link'

export const Hero = () => {
  return (
    <div className="hero" >
        <div className="left_side">
          <div>
           <h2>Hey I am Rashid</h2>
           <h1>Front-End React Web Developer From Malappuram, Kerala</h1>
           <div className="social_icons" >
            <Link href="https://instagram.com/rashid.machingal" target="_blank" >
             <BsInstagram/>
            </Link>
            <Link href="https://github.com/rashidmachingal" target="_blank" >
             <BsGithub/>
            </Link>
            <Link href="https://www.linkedin.com/in/rashid-machingal/" target="_blank" >
             <BsLinkedin/>
            </Link>
          </div>
          </div>
        </div>
        <div className="right_side">
          <Image 
           src={MyImage} width={180} height={180} 
           alt='Picture of Rashid Machingal' 
           title='Profile picture of Rashid Machingal, he is a web developer'
          />
        </div>
    </div>
  )
}