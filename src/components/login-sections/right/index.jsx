import React from 'react'

export default function Right() {
  return (
    <div className='lg:block hidden'>
        <div className='mb-6 text-[2rem] font-bold flex gap-2'>
            <span>C</span> - <p>CYOP</p>
        </div>
        <ul className='flex flex-col gap-16'>
            <li className='flex items-start gap-3'>
                <div className='w-5 h-5 rounded-[50%] flex items-center justify-center flex-shrink-0 bg-primaryBlue'>
                    <i class="fa-solid fa-check text-[13px] text-primaryBlue_bg"></i>
                </div>
                <div>
                    <h3 className='text-[1.5rem] font-bold leading-none mb-3'>Easy Create (Without coding)</h3>
                    <p className='text-secondary_card_color text-[1rem]'>Just write about yourself, practice, services, projects etc</p>
                </div>
            </li>
            <li className='flex items-start gap-3'>
                <div className='w-5 h-5 rounded-[50%] flex items-center justify-center flex-shrink-0 bg-primaryBlue'>
                    <i class="fa-solid fa-check text-[13px] text-primaryBlue_bg"></i>
                </div>
                <div>
                    <h3 className='text-[1.5rem] font-bold leading-none mb-3'>Good Prices</h3>
                    <p className='text-secondary_card_color text-[1rem]'>We have just three subscribes free, 10$, 20%</p>
                </div>
            </li>
            <li className='flex items-start gap-3'>
                <div className='w-5 h-5 rounded-[50%] flex items-center justify-center flex-shrink-0 bg-primaryBlue'>
                    <i class="fa-solid fa-check text-[13px] text-primaryBlue_bg"></i>
                </div>
                <div>
                    <h3 className='text-[1.5rem] font-bold leading-none mb-3'>Good Templates</h3>
                    <p className='text-secondary_card_color text-[1rem]'>Good portfolio templates for subscribes, free = simple</p>
                </div>
            </li>
        </ul>
    </div>
  )
}