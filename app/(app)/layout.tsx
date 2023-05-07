export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
  author: "Kyle Caprio",
  keywords:
    "JavaScript, TypeScript, React, Nextjs, Frontend Engineer, Frontend Developer, Fullstack Engineer, Fullstack Developer",
}

import Header from "@components/Header"
import "@styles/globals.css"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="layout">
        {children}
        <footer className="footer">
          <p>Built by Kyle Caprio | {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}
