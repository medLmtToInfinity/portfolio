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
      icon: Icon.SkillIconsHtml({fill: "nonzero"})
    },
    {
      label: "css3",
      icon: Icon.SkillIconsCss({fill: "nonzero"})
    },
    {
      label: "javascript",
      icon: Icon.SkillIconsJavascript({fill: "nonzero"})
    },
    {
      label: "php",
      icon: Icon.SkillIconsPhpLight({fill: "nonzero"})
    },
    {
      label: "java",
      icon: Icon.SkillIconsJavaLight({fill: "nonzero"})
    },
    {
      label: "c++",
      icon: Icon.SkillIconsCpp({fill: "nonzero"})
    },
    {
      label: "c#",
      icon: Icon.SkillIconsCs({fill: "nonzero"})
    },
    {
      label: "reactjs",
      icon: Icon.SkillIconsReactLight({fill: "nonzero"})
    },
    {
      label: "redux",
      icon: Icon.SkillIconsRedux({fill: "nonzero"})
    },
    {
      label: "nextjs",
      icon: Icon.SkillIconsNextjsLight({fill: "nonzero"})
    },
    {
      label: "html5",
      icon: Icon.SkillIconsHtml({fill: "nonzero"})
    },
    {
      label: "html5",
      icon: Icon.SkillIconsHtml({fill: "nonzero"})
    },
  ]
  return (
    <div id='skills'>
      {
        skills.map(skill => <Skill key={skill.label} icon={skill.icon} label={skill.label} />)
      }
    </div>
  )
}

export default Skills