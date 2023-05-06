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
            <h1>About</h1>
          </Link>
          <Link className="nav-item" passHref href="/work">
            <h1>Work</h1>
          </Link>
          <Link
            className="nav-item"
            passHref
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriokdev@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <h1>Contact</h1>
          </Link>
          <Link className="nav-item" passHref href="/resume">
            <h1>Resume</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}
