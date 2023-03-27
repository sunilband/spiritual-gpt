import React, { useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from "openai"



type Props = {}

const Answer = (props: Props) => {
  const [input,setInput]=useState("")
  const [answer,setAnswer]=useState("")
  const [scripture,setScripture]=useState("Bhagavad Gita")
  const [loading,setLoading]=useState(false)

  const setterInput=async(e:any)=>{
    setInput(e.target.value)
  }

  const buttonClick=async()=>{
    setAnswer("Loading...")
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input+scripture }],
    })
    setAnswer(await response.data.choices[0].message.content)
  }
  

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey:"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"
    })
  )

  const dropdown=(e:any)=>{
    setScripture(` according to ${e.target.value}? also give references`)
    console.log(scripture)
  }
  

   
  return (
    <div className='flex flex-col justify-center'>
      {/* answer field */}
    <textarea className='w-screen self-center mt-16 border-2 max-w-7xl h-72 rounded-2xl p-4 flex flex-wrap bg-[#40414f] text-white text-justify font-medium tracking-wide overflow-y-scroll no-scrollbar'  value={answer} />
    {/* loader */}
    {loading==true?<h3 className='text-center mt-4'>Creating response...</h3>:<></>}
    {/* input fiend */}
      <input type="text" className='self-center  border-2 m-4 p-4 rounded-2xl bg-[#40414f] text-white w-4/5 tracking-wide' value={input} onChange={setterInput}/>

        {/*Dropdown  */}
      <form className="w-52 self-center">
            <select className="w-full p-2.5 text-white bg-[#202123] rounded-md shadow-sm outline-none appearance-none focus:border-[#202123] tracking-widest"  onChange={dropdown}>
                <option className='text-center tracking-widest'>Bhagavad Gita</option>
                <option className='text-center tracking-widest'>Holy Quran</option>
                <option className='text-center tracking-widest'>Holy Bible</option>
                <option className='text-center tracking-widest'>Guru Granth Sahib</option>
                <option className='text-center tracking-widest'>Jainism</option>    
            </select>
        </form>
{/* button */}
    <button className='w-44 self-center border-2 m-4 p-4 rounded-2xl bg-[#202123] text-white transition-all ease-in-out duration-200 uppercase tracking-[7px]' onClick={buttonClick}>
    Generate
    </button>
    
    
    
    </div>
    
  )
}

export default Answer