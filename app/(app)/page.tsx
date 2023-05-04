"use client"
import Contact from "@components/sections/Contact"
import FeatureMap from "@components/sections/FeatureMap"
import Introduction from "@components/sections/Intro"
import Skills from "@components/sections/Skills"
import SEO from "@components/Seo"

export default function Home() {
  return (
    <>
      <SEO title="Kyle Caprio" />
      <Introduction />
      <Skills />
      <FeatureMap />
      {/* <ProjectMap /> */}
      <Contact />
    </>
  )
}
