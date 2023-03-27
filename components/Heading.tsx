import React from 'react'
import localFont from "@next/font/local"


const zigfont=localFont({src:"../public/fonts/zigfont.ttf"})

type Props = {}

const Heading = (props: Props) => {
  return (
    
    <>
    <h1 className={`${zigfont.className} text-center font-extrabold p-10 tracking-[10px] text-4xl`}>Spiritual Gpt</h1>
    </>
  )
}

export default Heading