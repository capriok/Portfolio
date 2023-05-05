import Introduction from "@components/Intro"
import Skills from "@components/Skills"
import FeatureList from "@components/FeatureList"
import ProjectList from "@components/ProjectList"
import Contact from "@components/Contact"

import { getProjects } from "@api/getProjects"
import { getFeatures } from "@api/getFeatures"

export default function Home() {
  const projectsData = getProjects()
  const featuresData = getFeatures()

  return (
    <>
      <Introduction />
      {/* <Skills /> */}
      <FeatureList features={featuresData} />
      <ProjectList projects={projectsData} paginated={true} />
      <Contact />
    </>
  )
}
