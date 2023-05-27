import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    answer:any,
    buttonClick:any
}

const Submit = (props: Props) => {

  return (
    <div className="scale-95">
    <motion.button
        initial={{ scale: 0 }}
        // this is done because the button wont spin on submit if rotate is present in animate
        animate={props.answer!=="Loading Response...\nThis may take some time"?{ scale: 1 ,rotate:360}:{scale: 1}}
        transition={{ duration: 2, type: "spring", delay: 0.6 }}
        className={`h-16 w-16 sm:mb-10 mt-2 sm:mt-0  self-center bg-[#202123] text-white  transition-all ease-in-out duration-100 uppercase tracking-[4px] z-20 flex justify-center items-center rounded-full ${
          props.answer == "Loading Response...\nThis may take some time"
            ? "animate-spin"
            : ""
        } hover:border-2 border-slate-200`}
        disabled={
          props.answer == "Loading Response...\nThis may take some time"
            ? true
            : false
        }
        onClick={props.buttonClick} 
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="fill-white "
        >
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
      </motion.button>
      </div>
  )
}

export default Submit