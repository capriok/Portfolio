import projectsJson from "@/json/projects.json"
import featuresJson from "@/json/features.json"

export function getProjects(all = false) {
  const slugs = featuresJson.map((f) => f.slug)
  const projects = projectsJson.filter((p) => (all ? p : !slugs.some((s) => s === p.slug) && p))
  return projects
}
