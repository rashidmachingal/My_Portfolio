import Image from 'next/image';

export const metadata = {
    title: 'CSV Anywhere - Rashid Machingal',
    description: 'CSV Anywhere is a report automation service where I converted Figma UI designs to React components for both the web and landing page. View screenshots of the project here.',
}

export default function Page() {
return (
    <div className="blog_post">
        <div className="blog_post_title">
            <h1>CSV Anywhere</h1>
        </div>
        <div className="para_container blog_post_container">
         A report automation service where I converted Figma UI designs to React components for both the web and landing page.
         here is screenshots of the project.
        </div>
        <div className="project_screenshots">
            <Image 
             src="/csvanywhere-1.png" alt="CSV Anywhere - Report Automation Service" 
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: 'auto' }}
            />
            <Image 
             src="/csvanywhere-2.png" alt="CSV Anywhere - Report Automation Service" 
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: 'auto' }}
            />
            <Image 
             src="/csvanywhere-3.png" alt="CSV Anywhere - Report Automation Service" 
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: 'auto' }}
            />
            <Image 
             src="/csvanywhere-5.png" alt="CSV Anywhere - Report Automation Service" 
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: 'auto' }}
            />
            <Image 
             src="/csvanywhere-4.png" alt="CSV Anywhere - Report Automation Service" 
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: '100%', height: 'auto' }}
            />
        </div>
    </div>
);
}
