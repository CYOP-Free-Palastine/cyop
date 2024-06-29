import React from 'react'

export default function CommentCard({avatar, name, about, message}) {
  return (
    <div className='w-full bg-card_bg p-5 rounded-xl h-auto'>
        <div className='flex items-center gap-3 mb-5'>
            <div className='w-[56px] h-[56px]'>
                <img className='w-full h-full object-cover rounded-[50%]' src={avatar} alt="" />
            </div>
            <div>
                <h3 className='text-primary_card_color font-[500] text-[1.2rem]'>{name}</h3>
                <p className='text-secondary_card_color text-[0.9rem]'>{about}</p>
            </div>
        </div>
        <p className='text-[0.9em] leading-6 text-primary_card_color font-[500]'>{message}</p>
    </div>
  )
}