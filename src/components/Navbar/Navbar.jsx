import Link from "next/link"


export const Navbar = () => {
  return (
    <nav className="navbar" >
        <div className="brand_name">
            <Link href="/" ><h2>RASHID MACHINGAL</h2></Link>
        </div>

        <ul>
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/projects" >Projects</Link></li>
            <li><Link href="/blog" >Blog</Link></li>
            <li><Link href="/contact" >Contact</Link></li>
        </ul>
    </nav>
  )
}
