import React from 'react'
import { motion } from "framer-motion";


type Props = {
dropdownLanguage:any,
dropdownScripture:any
}

const Dropdowns = (props: Props) => {
  return (
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.4 }}
        className="self-center z-20 flex flex-row flex-wrap justify-center  space-y-1 sm:space-y-0"
      >
        <form className="w-72 px-2 pb-2">
          <select
            className="w-full p-2.5  text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest "
            onChange={props.dropdownScripture}
          >
            <option className="text-center tracking-widest">
              Bhagavad Gita/ Hinduism
            </option>
            <option className="text-center tracking-widest">
              Holy Quran / Islam
            </option>
            <option className="text-center tracking-widest">
              Holy Bible / Christanity
            </option>
            <option className="text-center tracking-widest">
              Guru Granth Sahib / Sikhism
            </option>
            <option className="text-center tracking-widest">
              Agamas/Jainism
            </option>
            <option className="text-center tracking-widest">
              Sutras/Buddhism
            </option>
            <option className="text-center tracking-widest">
              The Torah/Judaism
            </option>
            <option className="text-center tracking-widest">
              Avesta/Zoroastrianism
            </option>
          </select>
        </form>
        {/*Dropdown for language */}
        <form className="w-72 px-2 pb-2">
          <select
            className="w-full p-2.5  text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest "
            onChange={props.dropdownLanguage}
          >
            <option className="text-center tracking-widest">English</option>
            <option className="text-center tracking-widest">Hindi</option>
            <option className="text-center tracking-widest">Marathi</option>
            <option className="text-center tracking-widest">Sanskrit</option>
            <option className="text-center tracking-widest">Punjabi</option>
            <option className="text-center tracking-widest">Gujarati</option>
            <option className="text-center tracking-widest">Tamil</option>
            <option className="text-center tracking-widest">Kannada</option>
            <option className="text-center tracking-widest">Bengali</option>
            <option className="text-center tracking-widest">Telegu</option>
            <option className="text-center tracking-widest">Odia</option>
            <option className="text-center tracking-widest">Malayalam</option>
            <option className="text-center tracking-widest">Urdu</option>
            <option className="text-center tracking-widest">Arabic</option>
          </select>
        </form>
      </motion.div>
  )
}

export default Dropdowns