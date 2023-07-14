import { Textarea } from '@/components/ui/textarea'
import classes from './TextArea.module.css'

import React, { useEffect } from 'react'

type Props = {
  data: string
}

export const TextArea = ({ data }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <Textarea
        className={`w-[80vw] h-64 tracking-wider roboto leading-5 p-4 border-none  resize-none cursor-default  ${classes.style}`}
        value={data}
        id={classes.style2}
      />
    </div>
  )
}
