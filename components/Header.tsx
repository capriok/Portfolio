import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <div className="content">
        <Link passHref href="/">
          <h1 className="title">KC</h1>
        </Link>
        <div className="navigation">
          <Link className="nav-item" passHref href="/about">
            <span className="mono">About</span>
          </Link>
          <Link className="nav-item" passHref href="/work">
            <span className="mono">Work</span>
          </Link>
          <Link
            className="nav-item"
            passHref
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriokdev@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mono">Contact</span>
          </Link>
          <Link className="nav-item" passHref href="/resume">
            <span className="mono">Resume</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
