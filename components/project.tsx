import React from 'react'
import { ProjectItem } from './projects'
import Image from 'next/image'

const Project: React.FC<ProjectItem> = ( { title, description, link, imgSrc } ) => {
  return (
    <a href={link} target='_blank' className='mb-12 lg:flex md:flex items-center group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />
        <Image className='w-full h-full self-start object-cover z-10 mr-3 group-hover:border group-hover:opacity-100 mb-4 transition-all duration-200' src={imgSrc} width={100} height={30}  alt={title} />
        <div className='mb-3 lg:self-start'>
            <h3 className='inline-flex items-baseline font-medium leading-tight text-slate-200  group-hover:text-teal-300 group-hover:scale-105 transition-all duration-200 focus-visible:text-teal-300  group/link text-base'>{title}</h3>
            <p>{`${description.slice(0, 150)}...`}</p>
        </div>
    </a>
  )
}

export default Project