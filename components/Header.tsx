import React from "react"
import Link from "next/link"

// import styles from "@styles/components/header.module.scss"
import styles from "@styles/index"

interface Props {
  dir?: string
  pos?: number
  atHome?: boolean
  isMobile?: boolean
}

const Header: React.FC<Props> = ({ dir, pos = 0, atHome, isMobile }) => {
  function makeClass(): string {
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
    return styles.header.root
  }
  const headerCn = makeClass()

  return (
    <header className={headerCn}>
      <div className={styles.header.content.root}>
        <Link passHref href="/">
          <h1 className={styles.header.content.title}>KC</h1>
        </Link>
        <div className={styles.header.content.navigation}>
          <Link passHref href="/about">
            <span className={styles.global.font.mono}>About</span>
          </Link>
          <Link passHref href="/work">
            <span className={styles.global.font.mono}>Work</span>
          </Link>
          <Link
            passHref
            href="https://mail.google.com/mail/u/0/?fs=1&to=capriokdev@gmail.com&su=Portfolio%20Inquiry&tf=cm"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.global.font.mono}>Contact</span>
          </Link>
          <Link passHref href="/resume">
            <span className={styles.global.font.mono}>Resume</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
