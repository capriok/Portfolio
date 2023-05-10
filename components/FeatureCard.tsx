import Link from "next/link"
import Image from "next/image"

import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

interface Props {
  project: Feature
  index: number
}

export default function FeaturedCard({ project, index }: Props) {
  const isInverted = index === 1

  const featureCn = (is) => {
    const base = "flex min-h-[200px] relative overflow-hidden rounded-lg group"
    const invert = "w-full justify-end"
    return !is ? base : `${base} ${invert}`
  }

  const overlayCn = (is) => {
    const base =
      "bg-blue-400/10 hidden md:block z-10 absolute w-[450px] h-[245px] rounded-lg group-hover:opacity-0"
    const invert = "top-0 right-0 items-end"
    return !is ? base : `${base} ${invert}`
  }

  const contentCn = (is) => {
    const base = "w-full h-full absolute flex justify-start flex-col"
    const normal = "top-0 right-0 items-end"
    const invert = "top-0 left-0 items-start"
    return !is ? `${base} ${normal}` : `${base} ${invert}`
  }

  const descriptionCn = (is) => {
    const base =
      "z-20 md:min-h-[60px] md:max-w-[60%] rounded-lg p-4 bg-neutral-900 text-white shadow-lg group-hover:md:mr-2"
    const invert = "text-right group-hover:md:ml-2"
    return !is ? base : `${base} ${invert}`
  }

  return (
    <div className="mb-[120px] select-none relative">
      <div className={featureCn(isInverted)}>
        <Link passHref href={`/${project.slug}`}>
          <div className={overlayCn(isInverted)} />
        </Link>
        <Image
          className="hidden md:block w-[450px] h-[245px] rounded-lg"
          src={project.thumb}
          alt={project.title}
          width={450}
          height={245}
        />
      </div>
      <div className={contentCn(isInverted)}>
        <h1 className="mono text-[#4682B4]">Featured Project</h1>
        <Link passHref href={`/${project.slug}`}>
          <h1 className="text-2xl font-bold mb-3">{project.title}</h1>
        </Link>
        <p className={descriptionCn(isInverted)}>{project.description}</p>
        <div className="flex my-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="mono mx-2 my-0">
              {tag}
            </span>
          ))}
        </div>
        {/* <div className="flex justify-end">
            <div className="grid grid-cols-2 gap-4 text-2xl ml-4">
              <Link passHref target="_blank" rel="noreferrer" href={`${project.source}`}>
                <AiFillGithub className="btn-icon" />
              </Link>
              <Link passHref target="_blank" rel="noreferrer" href={`${project.demo}`}>
                <RiExternalLinkFill className="btn-icon" />
              </Link>
            </div>
          </div> */}
      </div>
    </div>
  )
}
