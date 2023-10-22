import React from 'react'

const ChatHeader = () => {
  return (
    <div className='w-full mr-7 flex gap-3 justify-start items-center'>
        <div className='flex flex-col items-start text-sm'>
            <p className='text-xs'>Chat With</p>
            <div className='gap-2 flex items-center'>
                <p className='w-2 h-2 rounded-full bg-green-500' />
                <p className='font-medium'>ChatM8</p>
            </div>
        </div>
    </div>
  )
}

export default ChatHeader