import React from "react";
import localFont from "@next/font/local";
import { motion, stagger } from "framer-motion";
import { type } from "os";

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
        className={`${zigfont.className} text-center font-extrabold pt-2 sm:pt-10 tracking-[15px] text-3xl md:text-7xl z-20 text-[#9ca3af]`}
      >
        Spiritual Gpt
      </h1>
    </motion.div>
  );
};

export default Heading;
