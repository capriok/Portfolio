import React from "react"

import ProjectList from "@components/ProjectList"

import projectsJson from "@json/projects.json"
import featuresJson from "@json/features.json"

function getProjects() {
  return projectsJson
}

function getFeatures() {
  return featuresJson
}

export default function Work() {
  const projectsData = getProjects()
  const featuresData = getFeatures()
  return (
    <div className="page">
      <ProjectList projects={projectsData} features={featuresData} />
    </div>
  )
}
