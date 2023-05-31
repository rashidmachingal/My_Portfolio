import Image from "next/image"
import MyImage from '../../../../public/rashid-machingal.jpeg'

export const TopProfile = () => {
  return (
    <div className="top_profile" >
      <Image src={MyImage} />
      <div>
        <h4>Rashid Machingal</h4>
        <p>06 May 2022</p>
      </div>
    </div>
  )
}

export const ProfileBox = () => {
  return(
    <div className="profile_box" >
      <Image src={MyImage} />
      <div>
        <h4>Rashid Machingal</h4>
        <p>
          My name is Rashid, a front-end React developer from Malappuram,
          Kerala.  I'm an aspiring blogger, excited to share my insights
          on coding, technologies, and other related topics.
        </p>
      </div>
    </div>
  )
}