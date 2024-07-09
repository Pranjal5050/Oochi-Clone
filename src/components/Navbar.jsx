import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 flex items-center justify-between'>
      <div>
        <h1 className='text-4xl font-bold'>ochi</h1>
      </div>
      <div className='link flex gap-10'>
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-md font-bold capitalize text-2xl ${index === 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
