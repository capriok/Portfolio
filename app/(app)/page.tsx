import Introduction from "@components/Intro"
import Skills from "@components/Skills"
import FeatureList from "@components/FeatureList"
import ProjectList from "@components/ProjectList"
import Contact from "@components/Contact"

import projectsJson from "@json/projects.json"
import featuresJson from "@json/features.json"

function getProjects() {
  return projectsJson
}
function getFeatures() {
  return featuresJson
}

export default function Home() {
  const projectsData = getProjects()
  const featuresData = getFeatures()

  return (
    <>
      <Introduction />
      {/* <Skills /> */}
      <FeatureList features={featuresData} />
      <ProjectList projects={projectsData} features={featuresData} />
      <Contact />
    </>
  )
}
