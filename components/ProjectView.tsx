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
      {project.writing.process && (
        <>
          <h1 className="sub-title">The Process</h1>
          <div className="content">
            <p className="process">{project.writing.process}</p>
            <p className="process">{project.writing.processSub}</p>
          </div>
        </>
      )}
      {project.writing.conclusion.length > 0 && (
        <>
          <h1 className="sub-title">Take Aways</h1>
          <div className="content">
            {project.writing.conclusion.map((conclusion, i) => (
              <li key={i}>{conclusion}</li>
            ))}
          </div>
        </>
      )}
      <h1 className="sub-title">Technology stack</h1>
      <div className="content">
        {project.stack.map((stack, i) => (
          <li key={i}>{stack}</li>
        ))}
      </div>
      {project.resources.length > 0 && (
        <>
          <h1 className="sub-title">Resources</h1>
          <div className="content">
            {project.resources.map((resource, i) => (
              <li key={i}>
                <a href={resource} target="_blank" rel="noreferrer" className="resource">
                  {resource}
                </a>
              </li>
            ))}
          </div>
        </>
      )}
      <h1 className="sub-title">Links</h1>
      <div className="links">
        <Link passHref href="/">
          <button className="btn">
            <div className="link">
              <AiOutlineHome className="icon" />
              Home
            </div>
          </button>
        </Link>
        <Link passHref target="_blank" rel="noreferrer" href={project.source}>
          <button className="btn">
            <div className="link">
              <AiFillGithub className="icon" />
              Github
            </div>
          </button>
        </Link>
        <Link passHref target="_blank" rel="noreferrer" href={project.demo}>
          <button className="btn">
            <div className="link">
              <RiExternalLinkFill className="icon" />
              Demo
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectView
