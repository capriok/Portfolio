import React from "react"
import Link from "next/link"

import Carousel from "./Carousel"

import { AiFillGithub, AiOutlineHome } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

interface Props {
  project: Project
}

function ProjectView({ project }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold mt-14 mb-8">{project.title}</h1>
      <Carousel images={project.images} />
      <p className="mb-4 pb-2 border-b">{project.description}</p>
      {project.writing.process && (
        <>
          <h1 className="text-2xl pt-6 pb-2">The Process</h1>
          <div className="pl-4 md:pl-8 pb-2 overflow-hidden">
            <p className="indent-4 pb-2">{project.writing.process}</p>
            <p className="indent-4 pb-2">{project.writing.processSub}</p>
          </div>
        </>
      )}
      {project.writing.conclusion.length > 0 && (
        <>
          <h1 className="text-2xl pt-6 pb-2">Reflection</h1>
          <div className="pl-4 md:pl-8 pb-2 overflow-hidden">
            {project.writing.conclusion.map((conclusion, i) => (
              <li key={i}>{conclusion}</li>
            ))}
          </div>
        </>
      )}
      <h1 className="text-2xl pt-6 pb-2">Technology Stack</h1>
      <div className="pl-4 md:pl-8 pb-2 overflow-hidden w-full flex gap-2">
        {project.stack.map((stack, i) => (
          <span
            key={i}
            className="btn bg-primary shadow-sm text-foreground hover:text-foreground cursor-default font-normal py-1 px-3 hover:bg-none"
          >
            {stack}
          </span>
        ))}
      </div>
      {project.resources.length > 0 && (
        <>
          <h1 className="text-2xl pt-6 pb-2">Resources</h1>
          <div className="pl-4 md:pl-8 pb-2 overflow-hidden">
            {project.resources.map((resource, i) => (
              <li key={i}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={resource}
                  className="underline text-blue-600"
                >
                  {resource}
                </a>
              </li>
            ))}
          </div>
        </>
      )}
      <h1 className="text-2xl pt-6 pb-2">Explore</h1>
      <div className="w-full grid grid-cols-3 gap-2 links">
        <Link passHref href="/">
          <div className="btn w-full flex flex-col justify-center items-center">
            <AiOutlineHome className="icon" />
            Home
          </div>
        </Link>
        <Link passHref target="_blank" rel="noreferrer" href={project.source}>
          <div className="btn w-full flex flex-col justify-center items-center">
            <AiFillGithub className="icon" />
            Github
          </div>
        </Link>
        <Link passHref target="_blank" rel="noreferrer" href={project.demo}>
          <div className="btn w-full flex flex-col justify-center items-center">
            <RiExternalLinkFill className="icon" />
            Demo
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProjectView
