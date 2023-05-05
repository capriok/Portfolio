"use client"

import { useEffect } from "react"

interface Props {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="error">
      <div className="content">
        <p className="title">Thats not right.</p>
        <p className="sub-title">The page was unable to find content!</p>
        <button className="btn" onClick={() => reset()}>
          Reload
        </button>
      </div>
    </main>
  )
}
