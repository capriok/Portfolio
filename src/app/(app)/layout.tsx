import Header from "~/components/Header"

export const metadata = {
  title: "Kyle Caprio | Portfolio",
  description: "Software Engineer",
  keywords:
    "JavaScript, TypeScript, React, Nextjs, Frontend Engineer, Frontend Developer, Fullstack Engineer, Fullstack Developer",
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1000px] transition-all delay-200 mx-auto my-0 px-4 md:px-6 md:p-0">
        {children}
        <footer className="h-[100px] flex justify-center items-center mt-auto">
          <p>Built by Kyle Caprio | {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  )
}
