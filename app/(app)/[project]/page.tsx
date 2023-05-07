import ProjectView from "@components/ProjectView"
import { getProjects } from "@api/getProjects"
import projects from "@json/projects.json"

export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
  author: "Kyle Caprio",
  keywords:
    "JavaScript, TypeScript, React, Nextjs, Frontend Engineer, Frontend Developer, Fullstack Engineer, Fullstack Developer",
}

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
    <div className="page">
      <ProjectView project={project} />
    </div>
  )
}

export default ProjectTemplate
