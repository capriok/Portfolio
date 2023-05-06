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
    <div className="project-view">
      <h1 className="section-title">{project.title}</h1>
      <Carousel images={project.images} />
      <p className="description">{project.description}</p>
      <h1 className="sub-title">The Process</h1>
      {project.writing.process && (
        <div className="content">
          <p className="process">{project.writing.process}</p>
          <p className="process">{project.writing.processSub}</p>
        </div>
      )}
      <h1 className="sub-title">Take Aways</h1>
      {project.writing.conclusion.length > 0 && (
        <div className="content">
          {project.writing.conclusion.map((conclusion, i) => (
            <li key={i}>{conclusion}</li>
          ))}
        </div>
      )}
      <h1 className="sub-title">Technology stack</h1>
      <div className="content">
        {project.stack.map((stack, i) => (
          <li key={i}>{stack}</li>
        ))}
      </div>
      <h1 className="sub-title">Resources</h1>
      {project.resources.length > 0 && (
        <div className="content">
          {project.resources.map((resource, i) => (
            <li key={i}>
              <a href={resource} target="_blank" rel="noreferrer" className="resource">
                {resource}
              </a>
            </li>
          ))}
        </div>
      )}
      <h1 className="sub-title">Links</h1>
      <div className="links">
        <button className="btn">
          <Link passHref href="/" className="link">
            <AiOutlineHome className="icon" />
            Home
          </Link>
        </button>
        <button className="btn">
          <Link
            passHref
            target="_blank"
            rel="noreferrer"
            href={project.source}
            className="link"
          >
            <AiFillGithub className="icon" />
            Github
          </Link>
        </button>
        <button className="btn">
          <Link
            passHref
            target="_blank"
            rel="noreferrer"
            href={project.demo}
            className="link"
          >
            <RiExternalLinkFill className="icon" />
            Demo
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ProjectView
