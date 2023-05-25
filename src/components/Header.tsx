"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const s = {
    active: "shadow-md bg-primary",
    navItem:
      "flex items-center rounded-lg ml-2 justify-center items-center cursor-pointer py-1 px-2 md:px-4 md:min-w-[80px] font-semibold shadow-none bg-background text-sm hover hover:border-b-transparent hover:shadow-xl border-none",
  }
  const NavLink = ({ href, children }) => {
    const baseCn = s.navItem
    const itemCn = href === pathname ? `${baseCn} ${s.active}` : baseCn
    return (
      <Link passHref href={href} className={itemCn}>
        {children}
      </Link>
    )
  }
  return (
    <header className="bg-background z-50 sticky select-none top-0 w-full h-[75px] flex justify-between items-center px-4">
      <div className="flex justify-between w-full max-w-[1000px] mx-auto">
        <Link passHref href="/">
          <h1 className="cursor-pointer m-0 text-3xl font-bold">KC</h1>
        </Link>
        <div className="navigation flex align-bottom">
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
            className={`${s.navItem} hover:shadow-none hover:bg-none`}
          >
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </header>
  )
}
