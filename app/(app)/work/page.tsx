import { getProjects } from "@api/getProjects"
import ProjectList from "@components/ProjectList"
import Contact from "@components/Contact"

export default async function Work() {
  const projects = getProjects(true)

  return (
    <div className="page">
      <ProjectList projects={projects} paginated={false} />
      <Contact />
    </div>
  )
}
