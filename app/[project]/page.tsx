import React from "react"
import SEO from "@components/Seo"

import projects from "@json/projects.json"

import Layout from "@components/layouts/HomeLayout"
import ProjectView from "@components/ProjectView"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const ProjectTemplate: React.FC<{ params: { [key: string]: string } }> = ({ params }) => {
  const project = projects.find((p) => p.slug === params.project)!

  return (
    <Layout>
      <SEO title={project.title} />
      <ProjectView project={project} />
    </Layout>
  )
}

export default ProjectTemplate
