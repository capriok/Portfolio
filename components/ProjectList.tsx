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
    <div className="section project-list">
      <h1 className="section-title">Project Collection</h1>
      <div className="project-cards">
        {projects.slice(0, paginated ? pg : projects.length).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {paginated && (
        <div className="controls">
          {pg > 6 && (
            <button className="btn" onClick={() => setPg(pg - 3)}>
              <MdExpandLess className="icon" />
            </button>
          )}
          {pg <= projects.length && (
            <button className="btn" onClick={() => setPg(pg + 3)}>
              <MdExpandMore className="icon" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
