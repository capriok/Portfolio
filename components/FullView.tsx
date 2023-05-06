import React, { useEffect } from "react"
import Image from "next/image"

import { MdChevronLeft, MdChevronRight } from "react-icons/md"

interface Props {
  images: string[]
  view: ViewState
  set: SetViewState
}

export default function FullView({ images, view, set }: Props) {
  const first = 0
  const last = images.length - 1

  useEffect(() => {
    window.addEventListener("keydown", handleKey)
    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  }, [])

  function handleKey(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowLeft":
        prevImage()
        break
      case "ArrowRight":
        nextImage()
        break
      case "Escape":
        close()
        break
      default:
        break
    }
  }

  const prevImage = () =>
    set((v) => ({ open: true, image: v.image === first ? last : v.image - 1 }))

  const nextImage = () =>
    set((v) => ({ open: true, image: v.image === last ? first : v.image + 1 }))

  const close = () => set(() => ({ open: false, image: 0 }))

  if (!view.open) return <></>

  return (
    <div className="wide-view">
      <div className="content">
        <Image
          className="image"
          src={images[view.image]}
          alt={images[view.image]}
          width={1920}
          height={1005}
        />
        <div className="controls btns">
          <button className="btn btn-icon" onClick={() => prevImage()}>
            <MdChevronLeft />
          </button>
          <button className="btn btn-icon" onClick={() => nextImage()}>
            <MdChevronRight />
          </button>
        </div>
      </div>
      <div className="underlay" onClick={() => close()} />
    </div>
  )
}
