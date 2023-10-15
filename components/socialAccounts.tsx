import React from 'react'
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import SocialAccount from './socialAccount';

export interface SocialAcc {
  href: string;
  icon : React.ReactElement;
}

const SocialAccounts = () => {
  const size : number = 20;
  const socialAccounts : SocialAcc[] = [
    {
      href: "https://github.com/medLmtToInfinity?tab=repositories",
      icon: <BsGithub size={size} />
    },
    {
      href: "https://www.linkedin.com/in/mohammed-lamarti-49751a224/",
      icon: <BsLinkedin size={size} />
    },
    {
      href: "https://twitter.com/lamarti28",
      icon: <BsTwitter size={size} />
    },
    {
      href: "https://www.instagram.com/med_lamarti/",
      icon: <BsInstagram size={size} />
    },
    {
      href: "https://web.facebook.com/mohamed.lamarti.359",
      icon: <BsFacebook size={size} />
    },
  ]
  return (
    <div className='flex items-center gap-4 mt-10'>
      {
        socialAccounts.map(({href, icon}, index) => <SocialAccount key={index} href={href} icon={icon} />)
      }
    </div>
  )
}

export default SocialAccounts