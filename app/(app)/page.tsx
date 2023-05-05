"use client"
import Contact from "@components/sections/Contact"
import FeatureMap from "@components/sections/FeatureMap"
import Introduction from "@components/sections/Intro"
import Skills from "@components/sections/Skills"

export default function Home() {
  return (
    <>
      <Introduction />
      <Skills />
      <FeatureMap />
      {/* <ProjectMap /> */}
      <Contact />
    </>
  )
}
