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
} from "react-icons/si"
import { DiSass, DiPostgresql } from "react-icons/di"
import { RiHtml5Line, RiCss3Fill } from "react-icons/ri"
import { VscDatabase } from "react-icons/vsc"
import { FaJava } from "react-icons/fa"

export default function Skills() {
  const [tab, setTab] = useState<object>({ b: true })

  const Tab = ({ children, t }) => (
    <div
      className={tab[t] ? "tab active" : "tab"}
      onClick={() => !Object.keys(tab).includes(t) && setTab({ [t]: true })}
    >
      {children}
    </div>
  )

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
          <Tab t="a">
            <div>Programming </div>
            <div>Languages</div>
          </Tab>
          <Tab t="b">
            <div>Front-end </div>
            <div>Technologies</div>
          </Tab>
          <Tab t="c">
            <div>Back-end </div>
            <div>Technologies</div>
          </Tab>
          <Tab t="d">
            <div>Database </div>
            <div>Technologies</div>
          </Tab>
          <Tab t="e">
            <div>Storage and</div>
            <div>Deployment</div>
          </Tab>
        </div>
        <div className="content">
          <Icons t="a">
            <Skill Icon={SiJavascript} name="JavaScript" />
            <Skill Icon={SiTypescript} name="TypeScript" />
            <Skill Icon={SiCsharp} name="C Sharp" />
            <Skill Icon={SiPython} name="Python" />
            <Skill Icon={FaJava} name="Java" />
          </Icons>
          <Icons t="b">
            <Skill Icon={SiReact} name="React" />
            <Skill Icon={SiNextdotjs} name="Next" />
            <Skill Icon={RiHtml5Line} name="HTML" />
            <Skill Icon={RiCss3Fill} name="CSS" />
            <Skill Icon={DiSass} name="SASS" />
          </Icons>

          <Icons t="c">
            <Skill Icon={SiNodedotjs} name="Express.js" />
            <Skill Icon={SiGraphql} name="GraphQL" />
            <Skill Icon={SiTrpc} name="TRPC" />
            <Skill Icon={SiPrisma} name="Prisma" />
            <Skill Icon={SiSocketdotio} name="Socket.io" />
          </Icons>
          <Icons t="d">
            <Skill Icon={DiPostgresql} name="PostgreSQL" />
            <Skill Icon={SiMysql} name="MySQL" />
            <Skill Icon={SiMicrosoftsqlserver} name="SQL Server" />
            <Skill Icon={SiMongodb} name="Mongo DB" />
            <Skill Icon={VscDatabase} name="NoSQL" />
          </Icons>
          <Icons t="e">
            <Skill Icon={SiAmazonaws} name="AWS" />
            <Skill Icon={SiMicrosoftazure} name="Azure" />
            <Skill Icon={SiVercel} name="Vercel" />
            <Skill Icon={SiNetlify} name="Netlify" />
            <Skill Icon={SiGithub} name="Github" />
            <Skill Icon={SiNpm} name="NPM" />
          </Icons>
        </div>
      </div>
    </div>
  )
}
