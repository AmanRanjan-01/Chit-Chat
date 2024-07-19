import React from 'react'

export const Conversation = () => {
  return (
    <>
        <div className=' flex gap=2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qcl_uYPM2DjJL_WO1G5gCt5VNdKyN-KezA&s" alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>  A Man</p>
                    <span className='text-xl'>🫣</span>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1' />
    </>
  )
}
