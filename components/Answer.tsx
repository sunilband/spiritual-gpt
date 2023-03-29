import React, { useEffect, useState } from "react";
// import { Configuration, OpenAIApi } from "openai";
import axios from "axios"

type Props = {};

const Answer = (props: Props) => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [scripture, setScripture] = useState("Bhagavad Gita / Hinduism . also give references");

  // const key = process.env.OPEN_AI_API_KEY;
  // const openAi = new OpenAIApi(
  //   new Configuration({
  //     apiKey: "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",
  //     // apiKey:key
  //   })
  // );
  const setterInput = async (e: any) => {
    setInput(e.target.value);
  };

  const buttonClick = async () => {
    if(input.length!=0){
      setAnswer("Loading Response...");
      const result = await axios.post('http://localhost:5000/',({scripture:scripture,question:input}));
      setAnswer(result.data.answer)
    }
    else{
      setAnswer("Type a question first !")
    }



  };

  const dropdown = (e: any) => {
    setScripture(
      `${e.target.value}`
    );
    console.log(scripture);
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

      {/*Dropdown  */}
      <form className="w-72 self-center z-20">
        <select
          className="w-full p-2.5  text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest"
          onChange={dropdown}
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
