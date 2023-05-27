import React from "react";
import localFont from "@next/font/local";
import { motion} from "framer-motion";
const zigfont = localFont({ src: "../public/fonts/zigfont.ttf" });

type Props = {};

const Heading = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, type: "spring", delay: 1 }}
      className="z-20 absolute left-0 right-0"
    >
      <h1
        className={`animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ${zigfont.className} text-center font-extrabold pt-2 sm:pt-10 tracking-[15px] text-3xl md:text-7xl z-20 text-[#9ca3af] scale-95`}
      >
        Spiritual GPT
      </h1>
    </motion.div>
  );
};


export default Heading;
