import React from "react"

import Contact from "@components/Contact"

import experience from "@json/experience.json"

export default function About() {
  return (
    <div className="about">
      <h1 className="section-title">About me</h1>
      <div className="content">
        <h1 className="title">Background</h1>
        <p className="time">
          My name is Kyle. Im a self taught software engineer based in Arizona. I found my
          passion for learning computer sciences at the age of 16 and have been
          programming ever since. Being able to effectively teach myself is something I am
          most proud of about myself. In 2019, I decided to reinvent my career path and
          pursue a degree in web programming. Ive dedicated countless hours to learning
          and expanding this passion. I have developed an avid work ethic and disciplinary
          skills along my journey in life. Strong creative and critical thinking skills
          have helped me to excel in areas like web development as well as functional and
          object oriented programming. In free my time, I immerse myself in learning new
          programming technologies and how to better myself as a programmer but also find
          joy with meditation, music, hiking, and spending time under the sun.
        </p>
        <h1 className="title">Experience</h1>
        <ul>
          {experience.map((exp, i) => (
            <div key={i} className="item">
              <div className="time">{exp.timeFrame}</div>
              <div className="company">
                <b>
                  {exp.occupation} - {exp.company}
                </b>
              </div>
              <ul className="bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <h1 className="title">Education</h1>
        <ul>
          <div className="item">
            <div className="time">Graduated Feb 2022</div>
            <div>
              <b>Rasmussen University</b> - Deans List, 3.97 GPA
            </div>
            <div className="time pl-2">Associate of Science Degree, Web Programming</div>
          </div>
        </ul>
      </div>
      <Contact />
    </div>
  )
}
