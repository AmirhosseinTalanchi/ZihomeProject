import React from 'react'

export default function Notifiction() {
  return (
        <div className='flex justify-center w-full  bg-Neutral9'>
           <div className='container  font-iranyakan text-sm text-white w-full h-10 flex items-center justify-between  '>
                <div className='flex items-center'>
                    <span className='border-l-[1px] border-white pl-3'> خرید بیش از یک میلیون تومان ارسال رایگان </span>
                    <span className='pr-2'>خدمات رایگان</span>
                </div>
                <div>
                    <span className='border-l-[1px] border-white pl-3'> 50٪ تخفیف </span>
                    <span className='pr-2'> فروش بهاره </span>
                </div>
           </div>
        </div>
  )
}
