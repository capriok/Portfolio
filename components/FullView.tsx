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
    <div className="z-10 w-[100vw] h-screen fixed left-0 top-0 grid place-items-center">
      <div className="w-[98%] md:w-[96%] pl-0 grid place-items-center">
        <Image
          className="shadow-xl rounded-lg select-none"
          src={images[view.image]}
          alt={images[view.image]}
          width={1920}
          height={1005}
          quality={100}
          loading="eager"
          priority={true}
        />
        <div className="w-[60%] mt-6 btns">
          <div
            className="btn btn-icon gradient-hover w-full bg-secondary"
            onClick={() => prevImage()}
          >
            <MdChevronLeft />
          </div>
          <div
            className="btn btn-icon gradient-hover w-full bg-secondary"
            onClick={() => nextImage()}
          >
            <MdChevronRight />
          </div>
        </div>
      </div>
      <div
        className="z-[-10] w-[100vw] h-screen fixed left-0 top-0 bg-neutral-900/90"
        onClick={() => close()}
      />
    </div>
  )
}
