import React from "react"
import Header from "@components/Header"
import "@styles/globals.css"

import Resume from "/images/RESUME.jpg"

export const metadata = {
  title: "Kyle Caprio | Resume",
  description: "Software Engineer Resume",
  openGraph: {
    images: [Resume],
  },
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={s.layout}>{children}</div>
    </>
  )
}

const s = {
  layout: "w-full h-[calc(100vh-75px)] transition-all delay-200 mx-auto my-0",
}
