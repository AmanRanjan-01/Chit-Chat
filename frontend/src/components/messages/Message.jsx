import React from 'react'

export const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble component' src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qcl_uYPM2DjJL_WO1G5gCt5VNdKyN-KezA&s"
                } />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! what is up?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}
