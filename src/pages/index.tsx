import Heading from "../../components/Heading"
import Answer from "../../components/Answer"
import Background from "../../components/Background"
import Favicon from "react-favicon";
import Head from 'next/head';

export default function Home() {
 
  return (
    <div className="h-screen w-screen bg-[#343541] overflow-hidden">
      <Head>
      hooi<title>Spiritual-GPT</title>
      </Head>
      <Favicon url={["https://img.icons8.com/ios-filled/512/pranava.png","https://cdn-icons-png.flaticon.com/512/100/100491.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Christian_cross.svg/1200px-Christian_cross.svg.png"]} />
      <Background/>
      <Heading/> 
      <Answer/>
    </div>
  )
}
