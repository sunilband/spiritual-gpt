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

type MyFunctionType = () => void
type Props = {
  setTerms: MyFunctionType
}

const Dailog = ({ setTerms }: Props) => {
  const [checked, setChecked] = useState(false)

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Terms of use</DialogTitle>
          <DialogDescription>
            Please read these{' '}
            <Link href="/terms" className="underline">
              terms of use
            </Link>{' '}
            carefully before using the website
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          <div className="flex items-center justify-around space-x-2 w-auto order-1">
            <div className="flex gap-2">
              <Checkbox
                id="terms"
                onClick={() => {
                  setChecked(!checked)
                }}
              />
              <Label htmlFor="terms">
                I have read and accept the terms of use
              </Label>
            </div>

            <Button disabled={!checked} type="submit" onClick={setTerms}>
              Accept
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Dailog
