"use client"
import React, { useState } from "react"

import { MdExpandMore, MdExpandLess } from "react-icons/md"
import ProjectCard from "@components/ProjectCard"

interface Props {
  projects: any[]
  paginated?: boolean
}

export default function ProjectList({ projects, paginated }: Props) {
  const [pg, setPg] = useState<number>(6)

  return (
    <>
      <h1 className={s.sectionTitle}>Project Collection</h1>
      <div className={s.cards}>
        {projects.slice(0, paginated ? pg : projects.length).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {paginated && (
        <div className={s.controls}>
          {pg > 6 && (
            <button className={s.button} onClick={() => setPg(pg - 3)}>
              <MdExpandLess className={s.icon} />
            </button>
          )}
          {pg <= projects.length && (
            <button className={s.button} onClick={() => setPg(pg + 3)}>
              <MdExpandMore className={s.icon} />
            </button>
          )}
        </div>
      )}
    </>
  )
}

const s = {
  sectionTitle: "section-title",
  cards: "grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-6",
  controls: "flex justify-center mt-6",
  button: "btn gradient-hover ml-4 py-2",
  icon: "icon",
}
