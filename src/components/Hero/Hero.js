import MyImage from '../../../public/rashid-machingal.jpeg'
import Image from "next/image"

export const Hero = () => {
  return (
    <div className="hero" >
        <div className="left_side">
          <div>
           <h2>Hey I am Rashid</h2>
           <h1>Front-End React Web Developer From Malappuram, Kerala</h1>
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