"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"

import { AiFillGithub } from "react-icons/ai"
import { RiExternalLinkFill } from "react-icons/ri"

import styles from "@styles/components/featureCard.module.scss"

interface Props {
  project: Feature
  index: number
}

const FeaturedCard: React.FC<Props> = ({ project, index }) => {
  return (
    <div className={styles.cardWrapper}>
      <div
        className={
          index !== 1 ? styles.featureCard : `${styles.featureCard} ${styles.inverted}`
        }
      >
        <div className={styles.thumbCont}>
          <div className={styles.imgCont}>
            <Link passHref href={`/${project.slug}`} legacyBehavior>
              <div className={styles.overlay}></div>
            </Link>
            <Image src={project.thumb} alt={project.title} width={450} height={245} />
          </div>
        </div>
        <div className={styles.contentCont}>
          <h5 className={styles.mono}>Featured Project</h5>
          <Link passHref href={`/${project.slug}`}>
            <h1>{project.title}</h1>
          </Link>
          <p className={styles.descriptionCont}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.mono}>
                {t}
              </span>
            ))}
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
    </div>
  )
}

export default FeaturedCard
