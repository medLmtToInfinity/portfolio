"use client"
import { cn } from '@/lib/utils'
import React, { FC, HTMLAttributes, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { useMutation } from "@tanstack/react-query"
import {nanoid} from "nanoid";
import { Message } from '@/lib/validators/message'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ( {className, ...props} ) => {
    const [input, setInput] = useState<string>('');
    const {mutate: sendMessage, isSuccess, isPending} = useMutation({
      mutationFn: async (msg: Message) => {
        const res = await fetch("/api/message", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            messages: msg,
          }),
        })
        return res.body;
      },
      onSuccess: () => {
        console.log("success");
      },
    });
  return (
    <div {...props} className={cn('border-t border-slate-500', className)}>
        <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
            <TextareaAutosize
                rows={2}
                onKeyDown={(e) => {
                  if(e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    const message = {
                      id: nanoid(),
                      isUserMessage: true,
                      text: input,
                    }
                    sendMessage(message);
                  }
                }}
                maxRows={4}
                autoFocus
                placeholder='Write a Message...'
                className='peer disabled:opacity-50 pr-14 pl-4 py-3 resize-none block w-full border-0 bg-slate-300 text-gray-900 focus:ring-0 text-sm sm:leading-6'
                value={input}
                onChange={(e) => setInput(e.target.value)}
             />
        </div>
    </div>
  )
}

export default ChatInput