import classNames from 'classnames';
import React, { ReactElement } from 'react'

const NavItem : React.FC<{text : String, icon ?: ReactElement, refId : String, active : boolean}> = ( { text, icon, refId, active } ) => {
  const classes = classNames(
  "uppercase",  
  "-translate-x-[10%]", 
  "transition-all", 
  "ease-in", 
  "duration-300",
  "group-hover:translate-x-0", 
  "group-hover:opacity-100",
  "group-hover:text-white",
  {
    "opacity-100": active,
    "translate-x-0": active,
    "text-white": active
  }
  )
  return (
    <li className='py-5 md:py-6 group'>
      <a href={`#${refId}`} className='font-semibold flex'>
        <span className={`mr-3 transition-all group-hover:text-white ${active ? "text-white scale-110" : ""} group-hover:scale-110`}>{icon}</span>
        <span className={classes}>{text}</span>
      </a>  
    </li>
  )
}

export default NavItem;