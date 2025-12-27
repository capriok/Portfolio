"use client"

import React from "react"
import Header from "~/components/Header"
import { Analytics } from "@vercel/analytics/react"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Analytics />
    </>
  )
}
