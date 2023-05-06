"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const NavLink = ({ href, children }) => {
    const itemCn = (r) => (r === pathname ? "nav-item btn active" : "nav-item btn")
    return (
      <Link passHref href={href} className={itemCn(href)}>
        <h1>{children}</h1>
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
            <h1>About</h1>
          </NavLink>
          <NavLink href="/work">
            <h1>Work</h1>
          </NavLink>
          <NavLink href="/resume">
            <h1>Resume</h1>
          </NavLink>
          <Link
            passHref
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriokdev@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            className="nav-item"
          >
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}
