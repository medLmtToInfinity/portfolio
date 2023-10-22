import React from 'react'
import * as Icon from "@/components/skills-icons"
import Skill from './skill'
import { SVGProps } from 'react'

export interface SkillInt {
  label: string;
  icon: React.JSX.Element;
}

const Skills = () => {
  const skills: SkillInt[] = [
    {
      label: "html5",
      icon: Icon.SkillIconsHtml({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "css3",
      icon: Icon.SkillIconsCss({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "javascript",
      icon: Icon.SkillIconsJavascript({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "typescript",
      icon: Icon.SkillIconsTypescript({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "php",
      icon: Icon.SkillIconsPhpLight({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "java",
      icon: Icon.SkillIconsJavaLight({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "kotlin",
      icon: Icon.SkillIconsKotlinLight({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "c++",
      icon: Icon.SkillIconsCpp({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "c#",
      icon: Icon.SkillIconsCs({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "reactjs",
      icon: Icon.SkillIconsReactLight({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "redux",
      icon: Icon.SkillIconsRedux({fill: "purple", width: "60px", height: "60px"})
    },
    {
      label: "nextjs",
      icon: Icon.SkillIconsNextjsLight({fill: "purple", width: "60px", height: "60px"})
    },
  ]
  return (
    <div id='skills' className='section group/icons grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 w-full'>
      {
        skills.map(skill => <Skill key={skill.label} icon={skill.icon} label={skill.label} />)
      }
    </div>
  )
}

export default Skills