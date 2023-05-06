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
    <div className="feature-card">
      <div className={isLtr ? "rtl" : `ltr`}>
        <div className="feature group">
          <Link passHref href={`/${project.slug}`}>
            <div className="overlay group-hover:opacity-0" />
          </Link>
          <Image src={project.thumb} alt={project.title} width={450} height={245} />
        </div>
        <div className="content group">
          <h1 className="mono pre-title">Featured Project</h1>
          <Link passHref href={`/${project.slug}`}>
            <h1 className="title">{project.title}</h1>
          </Link>
          <p
            className={`description  ${
              isLtr ? "group-hover:md:mr-2" : "group-hover:md:ml-2"
            }`}
          >
            {project.description}
          </p>
          <div className="tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="mono">
                {tag}
              </span>
            ))}
          </div>
          <div className="foot">
            <div className="nav-icons">
              <Link passHref href={`${project.source}`} target="_blank" rel="noreferrer">
                <AiFillGithub className="hover" />
              </Link>
              <Link passHref href={`${project.demo}`} target="_blank" rel="noreferrer">
                <RiExternalLinkFill className="hover" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
