import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-white flex items-center px-32 gap-5'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center relative'>
          <h1 className='text-[5vw] text-[#CDEA68] font-[700]'>ochi</h1>
          <button className="absolute left-10 px-5 py-1 text-[#CDEA68] bottom-10 border-2 rounded-full">&copy; 2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer w-1/2 h-[50vh] flex gap-5 relative'>
        <div className='card rounded-xl w-1/2 h-full bg-[#203f3b]  flex items-center justify-center'>
        <h1 className='text-[3vw] text-[#CDEA68] font-[700]'>Clutch</h1>
        <button className="absolute left-5 px-5 py-1 bottom-10 border-2 rounded-full">Rating 5.0 on clutch</button>
        </div>
        <div className='card rounded-xl w-1/2 h-full bg-[#1c3b37] relative flex items-center justify-center'>
        <h1 className='text-[3vw] text-[#CDEA68] font-[700]'>ochi</h1>
        <button className="absolute left-5 px-5 py-1 bottom-10 border-2 rounded-full">Bussiness Bootcamp Alumini</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
