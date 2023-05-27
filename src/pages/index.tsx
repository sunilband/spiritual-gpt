import Heading from "../../components/Heading"
import Main from "../../components/Main"
import Background from "../../components/Background"
import Favicon from "react-favicon";
import Head from 'next/head';
import SidebarBurger from "../../components/SidebarBurger";


export default function Home() {
 
  return (
    <div className="h-screen w-screen bg-[#343541] overflow-hidden ">
      <Head>
      <title>Spiritual-GPT</title>
      <meta name="robots" content="spiritual gpt,spiritual,gpt,spiritual guidance,religious guidance,ai guidance,chatgpt,AI project,ai religion,religious knowledge,islamic knowledge,hindu knowledge,christian knowledge,christian guidance,hindu guidance,islamic guidance " />
      </Head>
      <Favicon url={["https://img.icons8.com/ios-filled/512/pranava.png","https://cdn-icons-png.flaticon.com/512/100/100491.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Christian_cross.svg/1200px-Christian_cross.svg.png"]} />
      <div className="sm:scale-100">
       
      <Background/>
      {/* <SidebarBurger/> */}
      <Heading/> 
      <Main/>
      </div>
      
    </div>
  )
}
