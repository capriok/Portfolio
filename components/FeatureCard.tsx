import Link from "next/link"
import Image from "next/image"

import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

interface Props {
  project: Feature
  index: number
}

export default function FeaturedCard({ project, index }: Props) {
  const isLtr = index !== 1
  return (
    <div className="feature-card mb-[120px] select-none relative">
      <div className={isLtr ? "rtl" : `ltr`}>
        <div className="feature group">
          <Link passHref href={`/${project.slug}`}>
            <div className="overlay group-hover:opacity-0" />
          </Link>
          <Image src={project.thumb} alt={project.title} width={450} height={245} />
        </div>
        <div className="content group">
          <h1 className="mono text-[#4682B4]">Featured Project</h1>
          <Link passHref href={`/${project.slug}`}>
            <h1 className="text-2xl font-bold mb-3">{project.title}</h1>
          </Link>
          <p className={`description ${isLtr ? "group-hover:md:mr-2" : "group-hover:md:ml-2"}`}>
            {project.description}
          </p>
          <div className="flex my-4">
            {project.tags.map((tag, i) => (
              <span key={i} className="mono mx-2 my-0">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <div className="grid grid-cols-2 gap-4 text-2xl ml-4">
              <Link passHref target="_blank" rel="noreferrer" href={`${project.source}`}>
                <AiFillGithub className="hover:text-[#4682B4]" />
              </Link>
              <Link passHref target="_blank" rel="noreferrer" href={`${project.demo}`}>
                <RiExternalLinkFill className="hover:text-[#4682B4]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
