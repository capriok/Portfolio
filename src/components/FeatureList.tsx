"use client"

import FeaturedCard from "~/components/FeatureCard"

export default function FeatureList({ features }) {
  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold mt-14 mb-8">Featured</h1>
      <div className="flex flex-col">
        {features.map((project, i: number) => (
          <FeaturedCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
