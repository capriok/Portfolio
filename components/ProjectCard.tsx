import Link from "next/link"

import { AiOutlineFolder } from "react-icons/ai"
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
        <div className="icon">
          <div className="head-icon">
            <AiOutlineFolder />
          </div>
        </div>
      </div>
      <div className="description">
        <div>{project.description}</div>
      </div>
      <div className="foot">
        <Link passHref href={`${project.source}`} target="_blank" rel="noreferrer">
          <div className="foot-icon">
            <AiFillGithub />
          </div>
        </Link>
        <Link passHref href={`${project.demo}`} target="_blank" rel="noreferrer">
          <div className="foot-icon">
            <RiExternalLinkFill />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
