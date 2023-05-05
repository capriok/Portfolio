import projects from "@json/projects.json"

export async function GET(request: Request) {
  return new Response({ projects } as any)
}
