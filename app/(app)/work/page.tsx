import { getProjects } from "@api/getProjects"
import ProjectList from "@components/ProjectList"
import Contact from "@components/Contact"

export const metadata = {
  title: "Kyle Caprio | Work",
  description: "A function a day keeps the doctor away.",
}
export default async function Work() {
  const projects = getProjects(true)

  return (
    <>
      <ProjectList projects={projects} paginated={false} />
      <Contact />
    </>
  )
}
