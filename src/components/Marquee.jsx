import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl rounded-r-2xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <h1 className='text-[24vw] leading-none font-["Founders_Grotesk_X"] font-semibold uppercase pt-10 -mb-[7vw]' >we are ochi</h1>
        <h1 className='text-[24vw] leading-none font-["Founders_Grotesk_X"] font-semibold uppercase pt-10 -mb-[7vw]' >we are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee
