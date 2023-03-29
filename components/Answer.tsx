import React, { useEffect, useState } from "react";
import axios from "axios"

type Props = {};

const Answer = (props: Props) => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [scripture, setScripture] = useState("Bhagavad Gita / Hinduism . also give references");
  const [language,setLanguage]=useState("English")

  const setterInput = async (e: any) => {
    setInput(e.target.value);
  };

  const buttonClick = async () => {
    if(input.length!=0){
      setAnswer("Loading Response...");
      const result = await axios.post('https://server-31um.onrender.com',({scripture:scripture,question:input,language:language}));
      setAnswer(result.data.answer)
    }
    else{
      setAnswer("Type a question first !")
    }



  };

  const dropdownScripture = (e: any) => {
    setScripture(
      `${e.target.value}`
    );
  };

  const dropdownLanguage = (e: any) => {
    setLanguage(
      `${e.target.value}`
    );
  };

  return (
    <div className="flex flex-col justify-center z-20 md:pt-20 w-screen h-screen">
      {/* answer field */}
      <textarea
        className={`w-screen  self-center focus:outline-none mt-16 border max-w-7xl h-72 rounded-2xl p-4 flex flex-wrap bg-[#40414f] text-white text-justify   overflow-y-scroll no-scrollbar drop-shadow-2xl z-20 ${
          answer == "Type a question first !" || answer == "Loading Response..."
            ? "animate-pulse tracking-[4px] font-extrabold"
            : "tracking-wide font-medium "
        }`}
        value={answer}
      />
      {/* loader */}

      {/* input fiend */}
      <input
        type="text"
        className="self-center focus:outline-none border-2 border-[#202123] m-4 p-4 rounded-2xl bg-[#40414f] text-white w-4/5 tracking-wide z-20"
        value={input}
        onChange={setterInput}
        placeholder="Ask question here..."
      />

      {/*Dropdown for scripture */}
      <div className="self-center z-20 flex flex-row space-x-2">
      <form className="w-72 ">
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

      <form className="w-72 ">
        <select
          className="w-full p-2.5  text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest"
          onChange={dropdownLanguage}
        >
          <option className="text-center tracking-widest">
            English
          </option>
          <option className="text-center tracking-widest">
            Hindi
          </option>
          <option className="text-center tracking-widest">
            Marathi
          </option>
          <option className="text-center tracking-widest">
            Punjabi
          </option>
          <option className="text-center tracking-widest">
            Gujarati
            </option>
            <option className="text-center tracking-widest">
            Tamil
            </option>
            <option className="text-center tracking-widest">
            Kannada
            </option>
            <option className="text-center tracking-widest">
            Bengali
            </option>
            <option className="text-center tracking-widest">
            Telegu
            </option>
            <option className="text-center tracking-widest">
            Odia
            </option>
            <option className="text-center tracking-widest">
            Malayalam
            </option>
            <option className="text-center tracking-widest">
            Urdu
            </option>
            <option className="text-center tracking-widest">
            Arabic
            </option>
        </select>
      </form>
      </div>
      
      {/* button */}
      <button
        className="w-44 self-center border-2 m-4 p-4 rounded-2xl bg-[#202123] text-white hover:scale-[1.02]   hover:font-bold hover:drop-shadow-2xl  transition-all ease-in-out duration-200 uppercase tracking-[7px] z-20"
        onClick={buttonClick}
      >
        Generate
      </button>
    </div>
  );
};

export default Answer;
