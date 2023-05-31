import Link from "next/link"
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

export const Contact = () => {
  return (
     <div>
        <p>You can contact me through linkedin, instagram, or e-mail</p>
      <div className="social_icons about" >
        <Link href="https://www.linkedin.com/in/rashid-machingal/" target="_blank" >
          <BsLinkedin/>
          <h5>LinkedIn</h5>
        </Link>
        <Link href="https://www.linkedin.com/in/rashid-machingal/" target="_blank" >
          <BsInstagram/>
          <h5>Instagram</h5>
        </Link>
        <Link href="mail:rashileodev@gmail.com" target="_blank" >
          <HiMail/>
          <h5>rashileodev@gmail.com</h5>
        </Link>
      </div>
     </div>
  )
}
