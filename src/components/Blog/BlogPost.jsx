import { ProfileBox, TopProfile } from '@/components'

export const BlogPost = () => {
  return (
    <div className='blog_post' >
        <div className='blog_post_title' >
         <h1>Embracing the Power of Minimalism</h1>
        </div>

        <TopProfile/>

        <div className='para_container blog_post_container' >
            <p>
              I have successfully completed several projects, showcasing my
              skills in HTML, CSS, JavaScript, React, and more.  Additionally,
              I'm an aspiring blogger, excited to share my insights on coding, 
              technologies, and other related topics.
            </p>
            <p>
              I have successfully completed several projects, showcasing my
              skills in HTML, CSS, JavaScript, React, and more.  Additionally,
              I'm an aspiring blogger, excited to share my insights on coding, 
              technologies, and other related topics.
            </p>
            <p>
              A front-end React developer from Malappuram, Kerala. I started my 
              web development journey in 2020 and I obtained all of my skills
              using freely available resources on the internet. 
            </p>
            <p>
              I have successfully completed several projects, showcasing my
              skills in HTML, CSS, JavaScript, React, and more.  Additionally,
              I'm an aspiring blogger, excited to share my insights on coding, 
              technologies, and other related topics.
            </p>
            <p>
              A front-end React developer from Malappuram, Kerala. I started my 
              web development journey in 2020 and I obtained all of my skills
              using freely available resources on the internet. 
            </p>

            <ProfileBox/>
        </div>
    </div>
  )
}