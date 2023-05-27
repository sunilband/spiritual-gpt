import React from 'react'
import { motion } from 'framer-motion'
import localFont from "@next/font/local";
import Submitbutton from "./Submitbutton"
const zigfont = localFont({ src: "../public/fonts/zigfont.ttf" });

type Props = {
    input:any,
    setterInput:any,
    buttonClick:any
}

const Input = (props: Props) => {
  return (
    <motion.input
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
        type="text"
        className={`${zigfont.className} self-center focus:outline-none border-1 border-[#202123] m-4 p-4 rounded-lg bg-[#40414f] text-white w-4/5 tracking-wide z-20  `}
        value={props.input}
        onChange={props.setterInput}
        onKeyDown={(e) => (
          e.keyCode === 13 ? props.buttonClick(e) : null
        )}
        placeholder="Ask question here..."
        
      />
        
  )
}

export default Input