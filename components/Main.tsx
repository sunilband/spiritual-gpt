import React, { use, useEffect, useState } from "react";
import localFont from "@next/font/local";
import Dropdowns from "./Dropdowns";
import Footer from "./Footer";
import Submit from "./Submitbutton";
import Output from "./Output";
import Input from "./Input";
const zigfont = localFont({ src: "../public/fonts/zigfont.ttf" });
import io from "socket.io-client";
import 'firebase/database';



type Props = {};
const apiServer = process.env.NEXT_PUBLIC_API;
// const apiServer = "http://localhost:5000/";
  const socket=io(apiServer ,{
    transports: ['websocket'], 
    upgrade: false
  })
const Main = (props: Props) => {

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [scripture, setScripture] = useState("Bhagavad Gita / Hinduism ");
  const [language, setLanguage] = useState("English");

  const setterInput = async (e: any) => {
    if (answer == "Type a question first !") 
    setAnswer("");
    else{
    setInput(e.target.value);
    } 
  };

  
  const buttonClick = async (e?: any) => {
    if(input=="")
    setAnswer("Type a question first !")
    else{
     
      setAnswer("")
      socket.emit("question",{scripture: scripture,
        question: input,
        language: language,
      })
    
    }
   
  };

  useEffect(()=>{
    socket.on("answer",(data)=>{
      setAnswer(data)
    })
  },[])



  const dropdownScripture = (e: any) => {
    setScripture(`${e.target.value}`);
  };

  const dropdownLanguage = (e: any) => {
    setLanguage(`${e.target.value}`);
  };

  return (
    <div className="flex flex-col justify-center z-20 md:pt-20 w-screen h-screen relative">
      {/* answer field */}
      <Output answer={answer} />

      {/* input fiend */}
      <Input
        input={input}
        setterInput={setterInput}
        buttonClick={buttonClick}
      />

      {/*Dropdown for scripture */}
      <Dropdowns
        dropdownLanguage={dropdownLanguage}
        dropdownScripture={dropdownScripture}
      />

      {/* button */}
      <Submit answer={answer} buttonClick={buttonClick}/>

      {/* footer */}
      <Footer setInput={setInput} setAnswer={setAnswer} />
    </div>
  );
};

export default Main;
