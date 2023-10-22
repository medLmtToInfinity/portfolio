import React, { FC, HTMLAttributes } from 'react'
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from './ui/accordion'
import ChatHeader from './chatHeader'
import ChatInput from './chatInput'
import { cn } from '@/lib/utils'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const Chat = ( ) => {
  return (
    <Accordion type='single' collapsible className='relative shadow bg-slate-800 z-50'>
        <AccordionItem value='item-1'>
            <div className={cn('w-80 fixed right-8 bottom-8 bg-slate-800 border border-slate-700 rounded-md overflow-hidden')}>
                <div className='w-full h-full flex flex-col'>
                    <AccordionTrigger className='w-full px-6 py-3 border-b border-slate-400'>
                        <ChatHeader />
                    </AccordionTrigger>
                    <AccordionContent className='px-3'>
                        <div className='flex flex-col h-80'>
                            messages
                            <ChatInput className='px-3' />
                        </div>
                    </AccordionContent>
                </div>
            </div>
        </AccordionItem>
    </Accordion>
  )
}

export default Chat