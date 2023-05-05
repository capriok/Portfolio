"use client"

import FeaturedCard from "@components/FeatureCard"

export default function FeatureList({ features }) {
  return (
    <div className="feature-list">
      <h1 className="section-title">Featured</h1>
      <div className="features-cards">
        {features.map((project, i: number) => (
          <FeaturedCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
