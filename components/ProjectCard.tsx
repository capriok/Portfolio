import Link from "next/link"

import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

interface Props {
  project: Project
}

function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <div className="head">
        <h1 className="head-title">
          <Link passHref href={`/${project.slug}`}>
            {project.title}
          </Link>
        </h1>
      </div>
      <div className="description">
        <div>{project.description}</div>
      </div>
      <div className="foot">
        <Link
          passHref
          target="_blank"
          rel="noreferrer"
          href={`${project.source}`}
          className="foot-icon"
        >
          <AiFillGithub />
        </Link>
        <Link
          passHref
          target="_blank"
          rel="noreferrer"
          href={`${project.demo}`}
          className="foot-icon"
        >
          <RiExternalLinkFill />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
