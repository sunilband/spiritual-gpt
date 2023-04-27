import React, { useEffect, useState } from "react";
import axios from "axios";
import localFont from "@next/font/local";
import { motion } from "framer-motion";
const zigfont = localFont({ src: "../public/fonts/zigfont.ttf" });

type Props = {};

const Answer = (props: Props) => {
  const apiServer = "https://spiritual-gpt-api.onrender.com";
  // const apiServer = "http://localhost:5000/";
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [scripture, setScripture] = useState("Bhagavad Gita / Hinduism ");
  const [language, setLanguage] = useState("English");

  const setterInput = async (e: any) => {
    if (answer == "Type a question first !") setAnswer("");
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
    <div className="flex flex-col justify-center z-20 md:pt-20 w-screen h-screen relative">
      {/* answer field */}
      <motion.textarea
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className={`w-screen sm:bg-transparent  self-center focus:outline-none mt-16  max-w-7xl h-72 rounded-2xl p-4 flex flex-wrap bg-[#40414f] text-white  overflow-y-scroll no-scrollbar drop-shadow-2xl z-20  ${
          answer == "Type a question first !" ||
          answer == "Loading Response...\nThis may take some time"
            ? "animate-pulse tracking-[4px] font-extrabold text-center"
            : "tracking-wide font-medium text-justify"
        }`}
        value={answer}
      />

      {/* input fiend */}
      <motion.input
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
        type="text"
        className={`${zigfont.className} self-center focus:outline-none border-1 border-[#202123] m-4 p-4 rounded-2xl bg-[#40414f] text-white w-4/5 tracking-wide z-20  `}
        value={input}
        onChange={setterInput}
        placeholder="Ask question here..."
      />

      {/*Dropdown for scripture */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.4 }}
        className="self-center z-20 flex flex-row flex-wrap justify-center mt-2 p-2 space-y-1 sm:space-y-0"
      >
        <form className="w-72 px-2 pb-2">
          <select
            className="w-full p-2.5  text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest "
            onChange={dropdownScripture}
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
        className={`h-16 w-16 sm:mb-5 mt-3 sm:mt-0  self-center bg-[#202123] text-white  transition-all ease-in-out duration-100 uppercase tracking-[4px] z-20 flex justify-center items-center rounded-full ${
          answer == "Loading Response...\nThis may take some time"
            ? "animate-spin"
            : ""
        } hover:border-2 border-slate-200`}
        disabled={
          answer == "Loading Response...\nThis may take some time"
            ? true
            : false
        }
        onClick={buttonClick}
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

      {/* footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 1 }}
        className={`${zigfont.className} z-20 bottom-3 left-0 right-0 sm:mx-1 flex flex-wrap flex-row justify-center space-x-4 sm:space-x-10 text-gray-400 drop-shadow-[0_1.2px_1.2px_rgba(1,1,1,1)] absolute `}
      >
        <p
          className="hover:text-white hover:scale-[1.05] hover:drop-shadow-2xl cursor-pointer "
          onClick={() => {
            setAnswer(
              `1-Type a question (ex- what is love?)\n\n2-Select Source \n\n3-Select Response Language \n\n4-Click Generate button \n\n5-Wait for response`
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
              "All the responses are generated by AI(ChatGPT Turbo-3.5).\nThe validity/accuracy of any response cant be guaranteed by me.\nThe use of Spiritual GPT is entirely at the user's own risk.\nI will not be held liable for any damages or losses resulting from the use of this app, \nincluding but not limited to, direct, indirect, incidental, or consequential damages.\nBy using Spiritual GPT, you acknowledge and agree to these terms and conditions."
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
