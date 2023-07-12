'use client'
import { useState, useEffect, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import io from 'socket.io-client'
import { TextArea } from '../TextArea/TextArea'
import { useToast } from '@/components/ui/use-toast'
import Scripture from '../Dropdowns/Scripture'
import Language from '../Dropdowns/Language'
import dropdownContext from '../../context/dropdownContext'

type Props = {}
const apiServer = 'https://spiritual-gpt-api.onrender.com'
// const apiServer = "http://localhost:5000/";
const socket = io(apiServer, {
  transports: ['websocket'],
  upgrade: false,
})

export const Main = (props: Props) => {
  const { language, scripture } = useContext(dropdownContext)
  const { toast } = useToast()
  const [answer, setAnswer] = useState('')
  const [input, setInput] = useState('')
  const generateHandler = async (e?: any) => {
    if (input == '')
      toast({
        title: 'Write a question first',
      })
    else {
      try {
        setAnswer('')
        socket.emit('question', {
          scripture: scripture,
          question: input,
          language: language,
        })
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong !',
        })
      }
    }
  }

  useEffect(() => {
    socket.on('answer', (data) => {
      setAnswer(data)
    })
  }, [])

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-7 ">
      <TextArea data={answer} />
      <Input
        className="w-[80vw] tracking-wider h-12"
        placeholder="Ask question here..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <div className="flex flex-wrap gap-4 justify-center ">
        <Scripture />
        <Language />

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" onClick={generateHandler} className="w-28">
            Generate
          </Button>
          <Button
            variant="outline"
            onClick={() => setAnswer('')}
            className="w-28 border-[#ff000093]"
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Main
