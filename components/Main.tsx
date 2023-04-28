import React, { useEffect, useState } from "react";
import axios from "axios";
import localFont from "@next/font/local";
import Dropdowns from "./Dropdowns";
import Footer from "./Footer";
import Submit from "./Submitbutton"
import Output from "./Output";
import Input from "./Input";
const zigfont = localFont({ src: "../public/fonts/zigfont.ttf" });

type Props = {};

const Main = (props: Props) => {
  const apiServer = "https://spiritual-gpt-api.onrender.com";
  // const apiServer = "http://localhost:5000/";
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading,setLoading]=useState(false)
  const [scripture, setScripture] = useState("Bhagavad Gita / Hinduism ");
  const [language, setLanguage] = useState("English");

  const setterInput = async (e: any) => {
    if (answer == "Type a question first !") setAnswer("");
    setInput(e.target.value);
  };

  const buttonClick = async (e?:any) => {
    // e is given for enter button submit
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
      <Output answer={answer}/>

      {/* input fiend */}
      <Input input={input} setterInput={setterInput} buttonClick={buttonClick}/>

      {/*Dropdown for scripture */}
      <Dropdowns dropdownLanguage={dropdownLanguage} dropdownScripture={dropdownScripture}/>

      {/* button */}
      <Submit answer={answer} buttonClick={buttonClick}/>

      {/* footer */}
      <Footer setInput={setInput}  setAnswer={setAnswer}/>
    </div>
  );
};

export default Main;
