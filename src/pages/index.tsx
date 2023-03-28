import Heading from "../../components/Heading"
import Answer from "../../components/Answer"
import Background from "../../components/Background"

export default function Home() {
  return (
    <div className="h-screen bg-[#343541] ">
      <Background/>
      <Heading/> 
      <Answer/>
    </div>
  )
}
