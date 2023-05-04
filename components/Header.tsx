import React from "react"
import Link from "next/link"

// import styles from "@styles/components/header.module.scss"

interface Props {
  dir?: string
  pos?: number
  atHome?: boolean
  isMobile?: boolean
}

const Header: React.FC<Props> = ({ dir, pos = 0, atHome, isMobile }) => {
  // function makeClass(): string {
  // const classes = {
  //   fill: ` ${styles.fill}`,
  //   hide: ` ${styles.hide}`,
  //   show: ` ${styles.show}`,
  // }
  // let cns = styles.homeHeader
  // if (isMobile || pos >= 300) cns += classes.fill
  // if (!atHome && pos > 0) cns += classes.fill
  // switch (dir) {
  //   case "down":
  //     cns += classes.hide
  //   case "up":
  //     cns += classes.show
  //   case "top":
  //     cns
  //   default:
  //     break
  // }
  // return cns
  // }

  return (
    <header className="header">
      <div className="header-content">
        <Link passHref href="/">
          <h1 className="header-title">KC</h1>
        </Link>
        <div className="header-navigation">
          <Link className="header-nav-item" passHref href="/about">
            <span className="mono">About</span>
          </Link>
          <Link className="header-nav-item" passHref href="/work">
            <span className="mono">Work</span>
          </Link>
          <Link
            className="header-nav-item"
            passHref
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriokdev@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <span className="mono">Contact</span>
          </Link>
          <Link className="header-nav-item" passHref href="/resume">
            <span className="mono">Resume</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
