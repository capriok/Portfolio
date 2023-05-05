"use client"
import "@styles/globals.css"

export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
}

// <meta
// name="keywords"
// content="JavaScript, TypeScript, React, Nextjs, Frontend Engineer, Frontend Developer, Fullstack Engineer, Fullstack Developer"
// />
// <meta name="author" content="Kyle Caprio" />
// <meta name="description" content="Software Engineer" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
