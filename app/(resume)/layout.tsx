import "@styles/globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
  author: "Kyle Caprio",
  keywords:
    "JavaScript, TypeScript, React, Nextjs, Frontend Engineer, Frontend Developer, Fullstack Engineer, Fullstack Developer",
}

import React from "react"
import Header from "@components/Header"

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="resume-layout">{children}</div>
    </>
  )
}
