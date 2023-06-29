import React from "react"
import Providers from "./providers"
import "./globals.css"

export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
  author: "Kyle Caprio",
  keywords:
    "JavaScript, TypeScript, React, Nextjs, Frontend Engineer, Frontend Developer, Fullstack Engineer, Fullstack Developer",
}

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
