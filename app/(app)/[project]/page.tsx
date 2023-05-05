import ProjectView from "@components/ProjectView"
import projects from "@json/projects.json"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

function ProjectTemplate({ params }: { params: { project: string } }) {
  const project = projects.find((p) => p.slug === params.project)!

  return <ProjectView project={project} />
}

export default ProjectTemplate
