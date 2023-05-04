"use client"
import Layout from "@components/layouts/HomeLayout"
import Contact from "@components/sections/Contact"
import FeatureMap from "@components/sections/FeatureMap"
import Introduction from "@components/sections/Intro"
import ProjectMap from "@components/sections/ProjectMap"
import Skills from "@components/sections/Skills"
import SEO from "@components/Seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Kyle Caprio" />
      <Introduction />
      <Skills />
      <FeatureMap />
      <ProjectMap />
      <Contact />
    </Layout>
  )
}
