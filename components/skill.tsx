import React from 'react'
import {SkillInt} from './skills';

const Skill: React.FC<SkillInt> = ({ label, icon }) => {
  return (
    <span className='grayscale transition-all duration-300 hover:grayscale-0 cursor-pointer flex flex-col items-center'>
        {icon}
      <div className='group-hover/icons:text-teal-300 font-bold text-xl text-center mt-3 uppercase font-mono'>
        {label}
      </div>
    </span>
  )
}

export default Skill;