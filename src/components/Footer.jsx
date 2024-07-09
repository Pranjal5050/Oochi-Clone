import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 p-20 flex gap-5 font-["Founders_Grotesk_X"]'>
            <div className='w-1/2 h-full flex flex-col justify-between '>
                <div className="heading">
                <h1 className='uppercase text-[8vw] leading-none -mb-10 font-semibold'>Eye-</h1>
                <h1 className='uppercase text-[8vw] leading-none -mb-10 font-semibold'>opening</h1>
                </div>
                <h3 className='text-4xl font-[500]'>ochi</h3>
            </div>
            <div className='w-1/2'>
            <h1 className='uppercase text-[8vw] leading-none -mb-10 font-semibold'>Presentation</h1>
            <div className='dets font-["Neue_Montreal"] mt-32'>
               {["Instagram", "Facebook", "Twitter"].map((item, index)=><a className='block text-1xl mt-2' href='#'>{item}</a>)}
            </div>
            </div>
        </div>
    )
}

export default Footer