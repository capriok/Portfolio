"use client"

import FeaturedCard from "@components/FeatureCard"

export default function FeatureList({ features }) {
  return (
    <div className="feature-list">
      <h1 className="section-list">Featured</h1>
      {features.map((project, i: number) => (
        <FeaturedCard key={i} project={project} index={i} />
      ))}
    </div>
  )
}
