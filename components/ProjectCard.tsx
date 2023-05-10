import Link from "next/link"

import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

interface Props {
  project: Project
}

function ProjectCard({ project }: Props) {
  return (
    <div className="bg-primary select-none min-h-[210px] flex flex-col justify-between p-4 rounded-md shadow-md hover:shadow-lg gradient-hover">
      <div className="flex w-full">
        <Link
          passHref
          href={`/${project.slug}`}
          className="w-full text-lg mb-2 hover:ml-1 transition-all duration-200"
        >
          {<div className="font-bold">{project.title}</div>}
        </Link>
      </div>
      <div className="h-full">
        <div>{project.description}</div>
      </div>
      <div className="flex justify-end w-full pt-4">
        <Link passHref target="_blank" rel="noreferrer" href={`${project.source}`} className="ml-4">
          <AiFillGithub className="btn-icon" />
        </Link>
        <Link passHref target="_blank" rel="noreferrer" href={`${project.demo}`} className="ml-4">
          <RiExternalLinkFill className="btn-icon" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
