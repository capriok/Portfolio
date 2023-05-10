import { getProjects } from "@api/getProjects"
import ProjectView from "@components/ProjectView"
import projects from "@json/projects.json"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const project = projects.find((project) => project.slug === params.project)

  return {
    title: "Kyle Caprio | Project",
    description: project?.description,
    openGraph: {
      images: [project?.images[0]],
    },
  }
}

function ProjectTemplate({ params }: { params: { project: string } }) {
  const projects = getProjects(true)
  const project = projects.find((p) => p.slug === params.project)!

  return (
    <>
      <ProjectView project={project} />
    </>
  )
}

export default ProjectTemplate
