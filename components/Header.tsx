"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const NavLink = ({ href, children }) => {
    const itemCn = (r) => (r === pathname ? "nav-item btn active" : "nav-item btn")
    return (
      <Link passHref href={href} className={itemCn(href)}>
        {children}
      </Link>
    )
  }
  return (
    <header className="header">
      <div className="content">
        <Link passHref href="/">
          <h1 className="title">KC</h1>
        </Link>
        <div className="navigation">
          <NavLink href="/about">
            <div>About</div>
          </NavLink>
          <NavLink href="/work">
            <div>Work</div>
          </NavLink>
          <NavLink href="/resume">
            <div>Resume</div>
          </NavLink>
          <Link
            passHref
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriokdev@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            className="nav-item btn contact"
          >
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </header>
  )
}
