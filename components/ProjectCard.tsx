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
    <div className={styles.card}>
      <div className={styles.head}>
        <Link passHref href={`/${project.slug}`}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
        </Link>
        <div className={styles.folderClosed}>
          <AiOutlineFolder />
        </div>
        <div className={styles.folderOpen}>
          <AiOutlineFolderOpen />
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
  )
}

export default ProjectCard
