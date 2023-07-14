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
import userContext from '../../context/userContext'
import historyContext from '../../context/historyContext'

import { db, app, auth, provider } from '../../firebase/firebase'
import {
  set,
  ref,
  push,
  query,
  orderByChild,
  orderByKey,
  limitToLast,
  equalTo,
  onValue,
  orderByValue,
} from 'firebase/database'
import { uid } from 'uid'

type Props = {}
const apiServer = 'https://spiritual-gpt-api.onrender.com'
// const apiServer = 'http://localhost:5000/'
const socket = io(apiServer, {
  transports: ['websocket'],
  upgrade: false,
})

export const Main = (props: Props) => {
  const { user } = useContext(userContext)
  const { language, scripture } = useContext(dropdownContext)
  const { history, setHistory } = useContext(historyContext)
  const { toast } = useToast()
  const [answer, setAnswer] = useState('')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const generateHandler = async (e?: any) => {
    if (input == '')
      toast({
        title: 'Write a question first',
      })
    else {
      try {
        setAnswer('')
        setLoading(true)
        socket.emit('question', {
          scripture: scripture,
          question: input,
          language: language,
          user: user?.email,
        })
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong !',
        })
      }
    }
  }

  // setting answer till packets arrive
  useEffect(() => {
    socket.on('answer', (data) => {
      setAnswer(data)
    })
  }, [])

  // storing in database when answer is completed
  useEffect(() => {
    socket.on('end', (data) => {
      toast({
        title: 'Answer Completed',
      })
      const postListRef = ref(db, 'responses')
      const newPostRef = push(postListRef)
      set(newPostRef, {
        email: data.user,
        question: data.question,
        answer: data.answer,
        time: new Date().toLocaleString(),
        language: data.language,
        scripture: data.scripture,
      })
      setLoading(false)
    })
  }, [])

  // fetching user specific data
  useEffect(() => {
    const fetchData = async () => {
      const postsRef = query(
        ref(db, 'responses'),
        limitToLast(6),
        orderByChild('email'),
        // @ts-ignore
        equalTo(user?.email),
      )
      try {
        onValue(postsRef, (snapshot) => {
          const fetchedData = snapshot.val()
          const tempArr = []
          for (var key in fetchedData) {
            if (fetchedData.hasOwnProperty(key)) {
              tempArr.push(fetchedData[key])
              setHistory(tempArr)
            }
          }
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    console.log('fetched')
    fetchData()
  }, [user])

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
          <Button
            variant="outline"
            onClick={generateHandler}
            className="w-28"
            disabled={!user?.email || loading}
          >
            Generate
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setAnswer('')
              setInput('')
            }}
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
