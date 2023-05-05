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
      <div>
        <Carousel images={project.images} />
      </div>
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
        <button className="btn btn-icon">
          <Link passHref href="/" className="link">
            <p>
              <AiOutlineHome />
            </p>
            <p>Home</p>
          </Link>
        </button>
        <button className="btn btn-icon">
          <Link
            passHref
            href={project.source}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <AiFillGithub />
            </p>
            <p>Github</p>
          </Link>
        </button>
        <button className="btn btn-icon">
          <Link
            passHref
            href={project.demo}
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <RiExternalLinkFill />
            </p>
            <p>Demo</p>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ProjectView
