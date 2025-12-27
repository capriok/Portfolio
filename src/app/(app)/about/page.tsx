import Contact from "~/components/Contact"
import experience from "@/json/experience.json"

export const metadata = {
  title: "Kyle Caprio | About",
  description: "My name is Kyle. A self taught software engineer based in Arizona.",
}

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-bold mt-14 mb-8">About me</h1>
      <div className="w-full md:w-[80%] mx-auto my-0 mb-10">
        <h1 className="text-2xl my-4">Background</h1>
        <p className="indent-6">
          My name is Kyle. Im a self taught software engineer based in Arizona. I found my passion
          for learning computer sciences at the age of 16 and have been programming ever since.
          Being able to effectively teach myself is something I am most proud of about myself. In
          2019, I decided to reinvent my career path and pursue a degree in web programming. Ive
          dedicated countless hours to learning and expanding this passion. I have developed an avid
          work ethic and disciplinary skills along my journey in life. Strong creative and critical
          thinking skills have helped me to excel in areas like web development as well as
          functional and object oriented programming. In free my time, I immerse myself in learning
          new programming technologies and how to better myself as a programmer but also find joy
          with meditation, music, hiking, and spending time under the sun.
        </p>
        <h1 className="text-2xl my-4">Experience</h1>
        <ul>
          {experience.map((exp, i) => (
            <div key={i} className="md:mx-2 mt-2 mb-6">
              <div className="text-foreground">{exp.timeFrame}</div>
              <div className="mb-2">
                <b>
                  {exp.occupation} - {exp.company}
                </b>
              </div>
              <ul className="ml-6">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <h1 className="text-2xl my-4">Education</h1>
        <ul>
          <div className="md:mx-2 mt-2 mb-6">
            <div className="text-foreground">Graduated Feb 2022</div>
            <div>
              <b>Rasmussen University</b> - Deans List, 3.97 GPA
            </div>
            <div className="pl-2">Associate of Science Degree, Web Programming</div>
          </div>
        </ul>
      </div>
      <Contact />
    </>
  )
}
