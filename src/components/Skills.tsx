"use client"

import React, { useState } from "react"

import {
  SiJavascript,
  SiTypescript,
  SiSharp,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTrpc,
  SiPrisma,
  SiSocketdotio,
  SiMysql,
  SiGraphql,
  SiMongodb,
  SiAmazonwebservices,
  SiGithub,
  SiNetlify,
  SiNpm,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si"
import { DiSass, DiPostgresql, DiMsqlServer } from "react-icons/di"
import { RiHtml5Line } from "react-icons/ri"
import { VscDatabase, VscAzure } from "react-icons/vsc"
import { FaJava } from "react-icons/fa"

export default function Skills() {
  const [active, setActive] = useState<object>({ c: true })

  const handleSet = (t) => !Object.keys(active).includes(t) && setActive({ [t]: true })

  const Tab = ({ tab, loc, children }) => {
    const s = {
      l: "rounded-tr-none rounded-br-none",
      c: "rounded-none",
      r: "rounded-tl-none rounded-bl-none",
      active: "bg-secondary shadow-lg",
    }
    const baseCn = `btn gradient-hover bg-primary w-full flex flex-col justify-center items-center px-4 md:px-2 py-2 text-xs md:text-sm cursor-pointer font-normal ${s[loc]}`

    const tabCn = active[tab] ? `${baseCn} ${s.active}` : baseCn
    return (
      <button className={tabCn} onClick={() => handleSet(tab)}>
        {children}
      </button>
    )
  }

  const Skill = ({ Icon, name }) => (
    <div className="w-[50%] flex flex-col justify-center items-center pt-8 pb-2">
      <div className="text-2xl md:text-3xl">
        <Icon />
      </div>
      <div className="text-sm md:text-base mt-2 md:mt-4">{name}</div>
    </div>
  )

  const Icons = ({ children, t }) => active[t] && children

  return (
    <section className="w-full transition-all duration-200">
      <h1 className="text-3xl font-bold mt-14 mb-8">Technology</h1>
      <div className="mx-[-10px] md:mx-auto md:w-[80%] flex flex-col md:flex-col">
        <div className="tabs w-full flex md:justify-center overflow-x-scroll md:overflow-visible">
          <Tab tab="a" loc="l">
            <div>Storage and</div>
            <div>Deployment</div>
          </Tab>
          <Tab tab="b" loc="c">
            <div>Programming</div>
            <div>Languages</div>
          </Tab>
          <Tab tab="c" loc="c">
            <div>Frontend</div>
            <div>Technologies</div>
          </Tab>
          <Tab tab="d" loc="c">
            <div>Backend</div>
            <div>Technologies</div>
          </Tab>
          <Tab tab="e" loc="r">
            <div>Database</div>
            <div>Technologies</div>
          </Tab>
        </div>
        <div className="w-[80%] mx-auto flex flex-wrap md:flex-nowrap justify-center items-center">
          <Icons t="a">
            <Skill Icon={SiAmazonwebservices} name="AWS" />
            <Skill Icon={VscAzure} name="Azure" />
            <Skill Icon={SiVercel} name="Vercel" />
            <Skill Icon={SiNetlify} name="Netlify" />
            <Skill Icon={SiGithub} name="Github" />
            <Skill Icon={SiNpm} name="NPM" />
          </Icons>
          <Icons t="b">
            <Skill Icon={SiJavascript} name="JavaScript" />
            <Skill Icon={SiTypescript} name="TypeScript" />
            <Skill Icon={SiSharp} name="C Sharp" />
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
            <Skill Icon={DiMsqlServer} name="SQL Server" />
            <Skill Icon={SiMongodb} name="Mongo DB" />
            <Skill Icon={VscDatabase} name="NoSQL" />
          </Icons>
        </div>
      </div>
    </section>
  )
}
