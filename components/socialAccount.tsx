import React from 'react'
import { SocialAcc } from './socialAccounts'

const SocialAccount : React.FC<SocialAcc> = ( { href, icon } ) => {
  return (
    <a href={href} target='_blank' className="cursor-pointer transition-all duration-300 hover:text-white hover:scale-110">
        {icon}
    </a>
  )
}

export default SocialAccount;