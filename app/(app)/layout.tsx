import "@styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
}

import Header from "@components/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // data-darkreader-mode="dynamic"
  // data-darkreader-scheme="dark"

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="layout">
          <main>{children}</main>
          <footer className="footer">
            <p>Built by Kyle Caprio | {new Date().getFullYear()}</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
