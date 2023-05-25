import React from "react"
import Header from "~/components/Header"

import Resume from "@/images/RESUME.jpg"

export const metadata = {
  title: "Kyle Caprio | Resume",
  description:
    "Seasoned software engineer with front and backend experience in strategizing and maintaining cross-platform software solutions to enhance efficiency and productivity across the web",
  openGraph: {
    images: [Resume.src],
  },
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-75px)] transition-all delay-200 mx-auto my-0">
        {children}
      </div>
    </>
  )
}
