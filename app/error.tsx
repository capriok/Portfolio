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
    <main className={s.root}>
      <div className={s.content}>
        <p className={s.title}>Thats not right.</p>
        <p className={s.subTitle}>The page was unable to find content!</p>
        <button className={s.button} onClick={() => reset()}>
          Reload
        </button>
      </div>
    </main>
  )
}

const s = {
  root: " w-[400px] h-[80vh] grid place-items-center mx-auto",
  content: "flex flex-col w-fit justify-center items-center",
  title: "mb-2 text-lg text-center",
  subTitle: "mb-6 text-sm",
  button: "w-fit",
}
