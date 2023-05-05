import Link from "next/link"
import Image from "next/image"

import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

interface Props {
  project: Feature
  index: number
}

export default function FeaturedCard({ project, index }: Props) {
  return (
    <div className="feature-card">
      <div className={index !== 1 ? "lefty" : `righty`}>
        <div className="feature">
          <div className="thumb">
            <Link passHref href={`/${project.slug}`} legacyBehavior>
              <div className="overlay"></div>
            </Link>
            <Image src={project.thumb} alt={project.title} width={450} height={245} />
          </div>
        </div>
        <div className="content">
          <h5 className="mono title">Featured Project</h5>
          <Link passHref href={`/${project.slug}`}>
            <h1>{project.title}</h1>
          </Link>
          <p className="description">{project.description}</p>
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
                <AiFillGithub />
              </Link>
              <Link passHref href={`${project.demo}`} target="_blank" rel="noreferrer">
                <RiExternalLinkFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
