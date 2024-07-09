import React from 'react'

function Featured() {
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-8xl font-[Neue-Montreal] tracking-tight'>Feature projects</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-20 mt-20'>

                    <div className='cardcontainer w-1/2 h-[75vh] relative'>
                        <h1 className='text-[#CDEA68] absolute z-[3] text-8xl leading-none tracking-tight left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
                            {"FYDE".split('').map((item, index)=><span>{item}</span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </div>
                    <div className='cardcontainer w-1/2 h-[75vh] relative'>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <h1 className='text-[#CDEA68] absolute z-[3] text-8xl leading-none tracking-tight right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                                {"VISE".split('').map((item, index)=><span>{item}</span>)}
                            </h1>
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
