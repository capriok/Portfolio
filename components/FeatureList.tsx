"use client"

import FeaturedCard from "@components/FeatureCard"

export default function FeatureList({ features }) {
  return (
    <section className={s.features}>
      <h1 className={s.sectionTitle}>Featured</h1>
      <div className={s.cards}>
        {features.map((project, i: number) => (
          <FeaturedCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

const s = {
  features: " w-full",
  sectionTitle: "section-title",
  cards: "flex flex-col",
}
