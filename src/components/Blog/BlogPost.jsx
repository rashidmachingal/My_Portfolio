import { ProfileBox, TopProfile } from '@/components'

export const BlogPost = ({blog}) => {

  return (
    <div className='blog_post' >
        <div className='blog_post_title' >
         <h1>{blog.title}</h1>
        </div>
        <TopProfile/>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} className='para_container blog_post_container' ></div>
        <ProfileBox/>
    </div>
  )
}