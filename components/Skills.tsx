"use client"
import React, { useState } from "react"

import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTrpc,
  SiPrisma,
  SiSocketdotio,
  SiMysql,
  SiGraphql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGithub,
  SiNetlify,
  SiNpm,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si"
import { DiSass, DiPostgresql } from "react-icons/di"
import { RiHtml5Line } from "react-icons/ri"
import { VscDatabase } from "react-icons/vsc"
import { FaJava } from "react-icons/fa"

export default function Skills() {
  const [tab, setTab] = useState<object>({ c: true })

  const handleSet = (t) => !Object.keys(tab).includes(t) && setTab({ [t]: true })
  const tabCn = (t, x) => (tab[t] ? `btn tab active ${x}` : `btn tab ${x}`)

  const Skill = ({ Icon, name }) => (
    <div className="skill">
      <div className="icon">
        <Icon />
      </div>
      <div className="name">{name}</div>
    </div>
  )

  const Icons = ({ children, t }) => tab[t] && children

  return (
    <div className="section skills">
      <h1 className="section-title">Technology</h1>
      <div className="flipper">
        <div className="tabs">
          <button className={tabCn("a", "l")} onClick={() => handleSet("a")}>
            <div>Storage and</div>
            <div>Deployment</div>
          </button>
          <button className={tabCn("b", "c")} onClick={() => handleSet("b")}>
            <div>Programming </div>
            <div>Languages</div>
          </button>
          <button className={tabCn("c", "c")} onClick={() => handleSet("c")}>
            <div>Front-end </div>
            <div>Technologies</div>
          </button>
          <button className={tabCn("d", "c")} onClick={() => handleSet("d")}>
            <div>Back-end </div>
            <div>Technologies</div>
          </button>
          <button className={tabCn("e", "r")} onClick={() => handleSet("e")}>
            <div>Database </div>
            <div>Technologies</div>
          </button>
        </div>
        <div className="content">
          <Icons t="a">
            <Skill Icon={SiAmazonaws} name="AWS" />
            <Skill Icon={SiMicrosoftazure} name="Azure" />
            <Skill Icon={SiVercel} name="Vercel" />
            <Skill Icon={SiNetlify} name="Netlify" />
            <Skill Icon={SiGithub} name="Github" />
            <Skill Icon={SiNpm} name="NPM" />
          </Icons>
          <Icons t="b">
            <Skill Icon={SiJavascript} name="JavaScript" />
            <Skill Icon={SiTypescript} name="TypeScript" />
            <Skill Icon={SiCsharp} name="C Sharp" />
            <Skill Icon={SiPython} name="Python" />
            <Skill Icon={FaJava} name="Java" />
          </Icons>
          <Icons t="c">
            <Skill Icon={RiHtml5Line} name="HTML" />
            <Skill Icon={SiReact} name="React" />
            <Skill Icon={SiNextdotjs} name="Next" />
            <Skill Icon={SiTailwindcss} name="TailwindCSS" />
            <Skill Icon={DiSass} name="SASS" />
          </Icons>
          <Icons t="d">
            <Skill Icon={SiNodedotjs} name="Express.js" />
            <Skill Icon={SiGraphql} name="GraphQL" />
            <Skill Icon={SiTrpc} name="TRPC" />
            <Skill Icon={SiPrisma} name="Prisma" />
            <Skill Icon={SiSocketdotio} name="Socket.io" />
          </Icons>
          <Icons t="e">
            <Skill Icon={DiPostgresql} name="PostgreSQL" />
            <Skill Icon={SiMysql} name="MySQL" />
            <Skill Icon={SiMicrosoftsqlserver} name="SQL Server" />
            <Skill Icon={SiMongodb} name="Mongo DB" />
            <Skill Icon={VscDatabase} name="NoSQL" />
          </Icons>
        </div>
      </div>
    </div>
  )
}
