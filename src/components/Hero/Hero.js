import MyImage from '../../../public/rashid-machingal.jpeg'
import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero" >
        <div className="left_side">
          <div>
           <h2>Hey I am Rashid</h2>
           <h1>Front-End React Web Developer From Malappuram, Kerala</h1>
          </div>
        </div>
        <div className="right_side">
          <Image src={MyImage} width={200} height={200} />
        </div>
    </div>
  )
}

export default Hero