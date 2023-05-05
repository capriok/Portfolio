"use client"
import React, { useState } from "react"

import featuresJson from "@json/features.json"
import projectsJson from "@json/projects.json"

import { MdExpandMore, MdExpandLess } from "react-icons/md"
import ProjectCard from "@components/ProjectCard"

export default function ProjectMap() {
  const [pg, setPg] = useState<number>(6)

  let atHome
  if (typeof window !== `undefined`) {
    atHome = window.location.pathname === "/"
  }

  const slugs = featuresJson.map((f) => f.slug)
  const projects = [...projectsJson].filter((p) => {
    if (!atHome) return p
    if (slugs.some((s) => s === p.slug)) return
    return p
  })

  return (
    <div className="section project-list">
      <h1 className="section-title">Project Collection</h1>
      <div className="project-cards">
        {projects.slice(0, atHome ? pg : projects.length).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {atHome && (
        <div className="project-list-controls">
          {pg > 6 && (
            <button onClick={() => setPg(pg - 3)}>
              <MdExpandLess />
            </button>
          )}
          {pg <= projects.length && (
            <button onClick={() => setPg(pg + 3)}>
              <MdExpandMore />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
