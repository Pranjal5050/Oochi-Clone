import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

const LandingPage = () => {
    return (
        <div className='w-full h-screen pt-1'>
            <div className='textstructure mt-52 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker '>
                            <div className='w-fit flex'>
                                {index === 1 && <div className='mr-[1vw] w-[8vw] h-[5.7vw] rounded-md relative -top-[1.2vw] bg-green-500'></div>}
                                <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7vw] font-['Founders_Grotesk_X'] font-bold">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 flex items-center justify-between py-5 px-20'>
                {[
                    "For public and private companies", "From the first picth to IPO"].map((item, index) => (
                        <p className='text-md font-bold tracking-tighter leading-none'>{item}</p>
                    ))}
                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase '>Start The Project</div>
                    <div className='w-10 h-10 border-[2px] border-zinc-400 rounded-full flex items-center justify-center'>
                        <span className='rotate-[45deg]'>
                            <FaLongArrowAltUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
