import React from 'react'
import {SkillInt} from './skills';

const Skill: React.FC<SkillInt> = ({ label, icon }) => {
  return (
    <div>
        {label}
        {icon}
    </div>
  )
}

export default Skill;