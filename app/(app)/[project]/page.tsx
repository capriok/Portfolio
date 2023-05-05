import ProjectView from "@components/ProjectView"
import { getProjects } from "@api/getProjects"
import projects from "@json/projects.json"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

function ProjectTemplate({ params }: { params: { project: string } }) {
  const projects = getProjects(true)
  const project = projects.find((p) => p.slug === params.project)!

  return (
    <div className="page">
      <ProjectView project={project} />
    </div>
  )
}

export default ProjectTemplate
