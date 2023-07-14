import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'

import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'
import classes from './Dailog.module.css'

type MyFunctionType = () => void
type Props = {
  question: string
  answer: string
  time: string
  scripture: string
  language: string
  openValue: boolean
  setOpenValue: any
}

const Dailog = ({
  question,
  answer,
  time,
  scripture,
  language,
  openValue,
  setOpenValue,
}: Props) => {
  return (
    <Dialog open={openValue}>
      <DialogContent className="sm:max-w-[425px] flex flex-col items-end">
        <DialogHeader>
          <DialogTitle>
            {question}
            <p className="break-words">
              {/* asddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
            </p>
          </DialogTitle>
          <DialogDescription>
            <p className="font-bold">Scripture: {scripture}</p>
            <p className="font-bold">Language: {language}</p>
            <p className="font-bold mb-2">Time: {time}</p>
            <p
              className={`max-h-96 overflow-y-scroll
            ${classes.style}`}
              id={classes.style2}
            >
              {answer}
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="default"
            onClick={() => setOpenValue(false)}
            className="w-96"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Dailog
