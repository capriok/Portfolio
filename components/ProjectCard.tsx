"use client"
import React from "react"
import Link from "next/link"

import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

import styles from "@styles/components/projectCard.module.scss"

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.head}>
          <h1 className={styles.cardTitle}>
            <Link passHref href={`/${project.slug}`}>
              {project.title}
            </Link>
          </h1>
          <div className={styles.cardFolder}>
            <div className={styles.folderClosed}>
              <AiOutlineFolder />
            </div>
            <div className={styles.folderOpen}>
              <AiOutlineFolderOpen />
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <p>{project.description}</p>
        </div>
        <div className={styles.foot}>
          <Link passHref href={`${project.source}`} target="_blank" rel="noreferrer">
            <AiFillGithub />
          </Link>
          <Link passHref href={`${project.demo}`} target="_blank" rel="noreferrer">
            <RiExternalLinkFill />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
