import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a Strategic partner for fast-growing tech businesses that need to raise funds, 
        sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full border-t-[1px] border-[#a1b562] mt-20 pt-10 gap-5 flex '>
        <div className='w-1/2'>
          <h1 className='text-7xl'>Our approach: </h1>
          <button className='flex items-center gap-10 px-10 py-6 uppercase bg-zinc-900 text-white rounded-full mt-10'>Read More 
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div> 
          </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#8b9e44] rounded-3xl'></div>
      </div>
    </div>
  )
}

export default About
