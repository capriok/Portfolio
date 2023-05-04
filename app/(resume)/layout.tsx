"use client"
import "@styles/globals.css"

export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
}

import React from "react"
import Header from "@components/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === "/"
  }

  return (
    <>
      <Header atHome={atHome} />
      <div className="resume-layout">
        <main>{children}</main>
      </div>
    </>
  )
}
