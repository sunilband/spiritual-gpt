import React, { useEffect, useState } from "react";
import axios from "axios";
import localFont from "@next/font/local";
import { motion } from "framer-motion";
const zigfont = localFont({ src: "../public/fonts/zigfont.ttf" });

type Props = {};

const Answer = (props: Props) => {
  const apiServer = "https://spiritual-gpt-api.onrender.com";
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [scripture, setScripture] = useState("Bhagavad Gita / Hinduism ");
  const [language, setLanguage] = useState("English");

  const setterInput = async (e: any) => {
    setInput(e.target.value);
  };

  const buttonClick = async () => {
    if (input.length != 0) {
      setAnswer("Loading Response...\nThis may take some time");
      const result = await axios.post(`${apiServer}`, {
        scripture: scripture,
        question: input,
        language: language,
      });
      setAnswer(result.data.answer);
    } else {
      setAnswer("Type a question first !");
    }
  };

  const dropdownScripture = (e: any) => {
    setScripture(`${e.target.value}`);
  };

  const dropdownLanguage = (e: any) => {
    setLanguage(`${e.target.value}`);
  };

  return (
    <div className="flex flex-col justify-center z-20 md:pt-20 w-screen h-screen">
      {/* answer field */}
      <motion.textarea
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className={`w-screen  self-center focus:outline-none mt-16  max-w-7xl h-72 rounded-2xl p-4 flex flex-wrap bg-[#40414f] text-white text-justify   overflow-y-scroll no-scrollbar drop-shadow-2xl z-20 ${
          answer == "Type a question first !" ||
          answer == "Loading Response...\nThis may take some time"
            ? "animate-pulse tracking-[4px] font-extrabold"
            : "tracking-wide font-medium "
        }`}
        value={answer}
      />

      {/* input fiend */}
      <motion.input
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
        type="text"
        className={`${zigfont.className} self-center focus:outline-none border-1 border-[#202123] m-4 p-4 rounded-2xl bg-[#40414f] text-white w-4/5 tracking-wide z-20`}
        value={input}
        onChange={setterInput}
        placeholder="Ask question here..."
      />

      {/*Dropdown for scripture */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.4 }}
        className="self-center z-20 flex flex-row flex-wrap justify-center"
      >
        <form className="w-72 px-2 pb-2">
          <select
            className="w-full p-2.5  text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest"
            onChange={dropdownScripture}
          >
            <option className="text-center tracking-widest">
              Bhagavad Gita / Hinduism
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
            <option className="text-center tracking-widest">Jainism</option>
          </select>
        </form>
        {/*Dropdown for language */}
        <form className="w-72 px-2">
          <select
            className="w-full p-2.5  text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest"
            onChange={dropdownLanguage}
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

      {/* button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.6 }}
        className="w-44 self-center border-2 m-4 p-4 rounded-2xl bg-[#202123] text-white hover:scale-[1.02]  transition-all ease-in-out duration-100 uppercase tracking-[4px] z-20 "
        onClick={buttonClick}
      >
        Generate
      </motion.button>

      {/* footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 1 }}
        className={`${zigfont.className} z-20 bottom-0 flex flex-row justify-center space-x-4 sm:space-x-10 text-[#161818] `}
      >
        <p
          className="hover:text-white hover:scale-[1.05] hover:drop-shadow-2xl cursor-pointer"
          onClick={() => {
            setAnswer(
              `1-Type a question (ex- what is love?)\n2-Select Source \n3-Select Response Language \n4-Click Generate button \n5-Wait for response`
            );
            setInput("");
          }}
        >
          How to Use
        </p>
        <p
          className="hover:text-white hover:scale-[1.05] hover:drop-shadow-2xl cursor-pointer"
          onClick={() => {
            setAnswer(
              "All the responses are generated by AI(ChatGPT Turbo-3.5).\nThe validity/accuracy of any response cant be guaranteed by me.\nThe use of our AI app is entirely at the user's own risk.I will not be held liable for any damages or losses resulting from the use of this app, including but not limited to, direct, indirect, incidental, or consequential damages.By using our AI app, you acknowledge and agree to these terms and conditions."
            );
            setInput("");
          }}
        >
          disclaimer
        </p>
        <p
          className="hover:text-white hover:scale-[1.05] hover:drop-shadow-2xl cursor-pointer"
          onClick={() => {
            setAnswer(
              `Email: sunilbandwork@gmail.com\nLinkedIn: www.linkedin.com/in/sunil-band/\nGithub: github.com/sunilband\nPortfolio: sunilband.netlify.com`
            );
            setInput("");
          }}
        >
          contact
        </p>
      </motion.div>
    </div>
  );
};

export default Answer;
