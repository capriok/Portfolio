"use client"
import React, { useState } from "react"
import Link from "next/link"

import FullView from "./FullView"
import Carousel from "./Carousel"

import { AiFillGithub, AiOutlineHome } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

import styles from "@styles/components/projectView.module.scss"

interface Props {
  project: Project
}

function ProjectView({ project }: Props) {
  const [viewState, setView] = useState<ViewState>({ open: false, image: 0 })

  return (
    <div className={styles.projectView}>
      <h1 className={styles.sectionTitle}>{project.title}</h1>
      <div>
        <FullView images={project.images} view={viewState} set={setView} />
        <Carousel images={project.images} set={setView} />
      </div>
      <p className={styles.description}>{project.description}</p>
      <hr />
      {project.writing.process && (
        <>
          <h1>The Process</h1>
          <p className={styles.process}>{project.writing.process}</p>
          <p className={styles.process}>{project.writing.processSub}</p>
        </>
      )}
      {project.writing.conclusion.length > 0 && (
        <>
          <h1>Take Aways</h1>
          <ul>
            {project.writing.conclusion.map((conclusion, i) => (
              <li key={i}>{conclusion}</li>
            ))}
          </ul>
        </>
      )}
      <h1>Technology stack</h1>
      <ul>
        {project.stack.map((stack, i) => (
          <li key={i}>{stack}</li>
        ))}
      </ul>
      {project.resources.length > 0 && (
        <>
          <h1>Resources</h1>
          <ul>
            {project.resources.map((resource, i) => (
              <li key={i}>
                <a href={resource} target="_blank" rel="noreferrer">
                  {resource}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <h1>Links</h1>
      <div className={styles.links}>
        <Link passHref href="/" className={styles.link}>
          <p>
            <AiOutlineHome />
          </p>
          <p>Home</p>
        </Link>
        <Link
          passHref
          href={project.source}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <AiFillGithub />
          </p>
          <p>Github</p>
        </Link>
        <Link
          passHref
          href={project.demo}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <RiExternalLinkFill />
          </p>
          <p>Demo</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectView
