"use client"
import featuresData from "@json/features.json"

import FeaturedCard from "@components/FeatureCard"

import styles from "@styles/components/sections/featureMap.module.scss"

export default function FeatureMap() {
  let features: Array<Feature> = featuresData

  return (
    <div className={styles.featureMapSection}>
      <h1 className={styles.sectionTitle}>Featured</h1>
      {features.map((project, i: number) => (
        <FeaturedCard key={i} project={project} index={i} />
      ))}
    </div>
  )
}
