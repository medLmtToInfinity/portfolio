import React, { ReactElement } from 'react'

const NavItem : React.FC<{text : String, icon ?: ReactElement, refId : String, active : boolean}> = ( { text, icon, refId, active } ) => {
  return (
    <li className='py-5 md:py-6 group'>
      <a href={`#${refId}`} className='font-semibold flex'>
        <span className='mr-3'>{icon}</span>
        <span className={`uppercase opacity-${active ? "100" : "0"} -translate-x-[10%] transition-all ease-in duration-300 group-hover:translate-x-0 group-hover:opacity-100`}>{text}</span>
      </a>  
    </li>
  )
}

export default NavItem