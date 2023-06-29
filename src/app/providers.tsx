"use client"

import Header from "~/components/Header"
import { Analytics } from "@vercel/analytics/react"

export default function Providers({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      {children}
      <Analytics />
    </>
  )
}
