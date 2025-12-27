"use client"

import React, { useState } from "react"

import { MdExpandMore, MdExpandLess } from "react-icons/md"
import ProjectCard from "~/components/ProjectCard"

interface Props {
  projects: any[]
  paginated?: boolean
}

export default function ProjectList({ projects, paginated }: Props) {
  const [pg, setPg] = useState<number>(6)

  return (
    <>
      <h1 className="text-3xl font-bold mt-14 mb-8">Project Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-6">
        {projects.slice(0, paginated ? pg : projects.length).map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      {paginated && (
        <div className="flex justify-center mt-6">
          {pg > 6 && (
            <div className="btn gradient-hover ml-4 py-2" onClick={() => setPg(pg - 3)}>
              <MdExpandLess className="icon" />
            </div>
          )}
          {pg <= projects.length && (
            <div className="btn gradient-hover ml-4 py-2" onClick={() => setPg(pg + 3)}>
              <MdExpandMore className="icon" />
            </div>
          )}
        </div>
      )}
    </>
  )
}
