import React from 'react'
import localFont from "@next/font/local"


const zigfont=localFont({src:"../public/fonts/zigfont.ttf"})

type Props = {}

const Heading = (props: Props) => {
  return (
    
    <div className='z-20 absolute left-0 right-0'>
    <h1 className={`${zigfont.className} text-center font-extrabold pt-10 tracking-[15px] text-3xl md:text-7xl z-20 text-[#161818]`}>Spiritual Gpt</h1>
    </div>
  )
}

export default Heading