"use client"
import React, { useRef, useState } from "react"
import Image from "next/image"
import AliceCarousel from "react-alice-carousel"
import FullView from "./FullView"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

import "react-alice-carousel/lib/alice-carousel.css"

interface Props {
  images: string[]
}

export default function Carousel({ images }: Props) {
  const [viewState, setView] = useState<ViewState>({ open: false, image: 0 })
  const ref = useRef<AliceCarousel | null>(null)

  let isMobile
  if (typeof window !== `undefined`) {
    isMobile = window.innerWidth < 500
  }
  const handleOnDragStart = (e: React.DragEvent) => e.preventDefault()
  const responsive = { 0: { items: 1 }, 1024: { items: 2 } }

  return (
    <>
      <FullView images={images} view={viewState} set={setView} />
      <div className=" w-full flex flex-col justify-center items-center">
        <AliceCarousel
          ref={ref}
          mouseTracking={isMobile ? true : false}
          infinite={true}
          responsive={responsive}
          disableButtonsControls={true}
          disableDotsControls={true}
          items={images.map((image, i) => (
            <div
              key={i}
              className="w-full m-auto p-0 pb-4 md:pb-8 px-2 transition-colors"
              onDragStart={handleOnDragStart}
              onClick={() => !isMobile && setView({ open: true, image: i })}
            >
              <Image
                className="cursor-pointer rounded-lg md:mx-auto md:shadow-sm md:hover:shadow-none max-w-[100%] max-h-[200px] md:max-w-[400px] md:max-h-[200px]"
                src={image}
                alt={image}
                width={400}
                height={200}
                quality={100}
                loading="eager"
                priority={true}
              />
            </div>
          ))}
        />
        <div className="flex gap-2 my-4">
          <button
            className="btn gradient-hover bg-primary mb-4 py-2"
            onClick={() => ref.current?.slidePrev()}
          >
            <MdChevronLeft className="icon" />
          </button>
          <button
            className="btn gradient-hover bg-primary mb-4 py-2"
            onClick={() => ref.current?.slideNext()}
          >
            <MdChevronRight className="icon" />
          </button>
        </div>
      </div>
    </>
  )
}
