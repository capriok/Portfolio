import "@styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="resume-layout">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
