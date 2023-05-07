import React from "react"
import Header from "@components/Header"
import "@styles/globals.css"

const PrimaryPDF = process.env.NEXT_PUBLIC_RESUME_S3

export const metadata = {
  title: "Kyle Caprio | Recume",
  description: "Software Engineer Resume",
  openGraph: {
    images: [PrimaryPDF],
  },
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="resume-layout">{children}</div>
    </>
  )
}
