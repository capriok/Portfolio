"use client"
import React, { useState } from "react"

import { MdExpandMore, MdExpandLess } from "react-icons/md"
import ProjectCard from "@components/ProjectCard"

export default function ProjectList({ projects, features }) {
  const [pg, setPg] = useState<number>(6)

  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === "/"
  }

  const slugs = features.map((f) => f.slug)
  const projectList = projects.filter((p) => {
    if (!atHome) return p
    if (slugs.some((s) => s === p.slug)) return
    return p
  })

  return (
    <div className="section project-list">
      <h1 className="section-title">Project Collection</h1>
      <div className="project-cards">
        {projectList.slice(0, atHome ? pg : projectList.length).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {atHome && (
        <div className="controls">
          {pg > 6 && (
            <button className="btn" onClick={() => setPg(pg - 3)}>
              <MdExpandLess />
            </button>
          )}
          {pg <= projectList.length && (
            <button className="btn" onClick={() => setPg(pg + 3)}>
              <MdExpandMore />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
