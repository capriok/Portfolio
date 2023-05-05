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
  let ref: any = useRef()

  let isMobile
  if (typeof window !== `undefined`) {
    isMobile = window.innerWidth < 500
  }
  const handleOnDragStart = (e) => e.preventDefault()
  const responsive = { 0: { items: 1 }, 1024: { items: 2 } }

  return (
    <>
      <FullView images={images} view={viewState} set={setView} />
      <div className="carousel">
        <AliceCarousel
          ref={(el) => (ref = el)}
          mouseTracking={isMobile ? true : false}
          infinite={true}
          responsive={responsive}
          disableButtonsControls={true}
          disableDotsControls={true}
          items={images.map((image, i) => (
            <div
              key={i}
              className="content"
              onDragStart={handleOnDragStart}
              onClick={() => !isMobile && setView({ open: true, image: i })}
            >
              <Image
                className="image"
                src={image}
                alt={image}
                width={400}
                height={200}
                quality={100}
              />
            </div>
          ))}
        />
        <div className="controls">
          <button className="btn" onClick={() => ref.slidePrev()}>
            <MdChevronLeft />
          </button>
          <button className="btn" onClick={() => ref.slideNext()}>
            <MdChevronRight />
          </button>
        </div>
      </div>
    </>
  )
}
