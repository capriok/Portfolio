import { getProjects } from "@api/getProjects"
import ProjectList from "@components/ProjectList"

export default async function Work() {
  const projects = getProjects(true)

  return (
    <div className="page">
      <ProjectList projects={projects} paginated={false} />
    </div>
  )
}
