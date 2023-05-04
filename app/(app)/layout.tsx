"use client"
import "@styles/globals.css"

export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
}

import React, { useState, useEffect } from "react"
import { useScrollDirection } from "react-hooks-lab"

import Stars from "@components/Stars"
import Header from "@components/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [dir, setDir] = useState<string>("top")
  const [pos, setPos] = useState<number>(0)

  const scrollingDir = useScrollDirection()

  let atHome
  let isMobile
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === "/"
    isMobile = window.innerWidth < 550
  }

  useEffect(() => {
    let delay = setTimeout(() => {
      setDir(scrollingDir)
      clearTimeout(delay)
    }, 50)
  }, [pos, scrollingDir])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleScroll() {
    let position
    if (typeof window !== `undefined`) {
      position = window.pageYOffset
    }
    setPos(position)
  }

  return (
    <>
      <Stars />
      <Header dir={dir} pos={pos} atHome={atHome} isMobile={isMobile} />
      <div className="layout">
        <main>{children}</main>
        <footer className="layout-footer">
          <p>Built by Kyle Caprio | {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}
