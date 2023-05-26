import React from 'react'
import SignUp from '../../components/login/SignUp'
import Background from '../../components/login/LoginBackground'
import Heading from '../../components/Heading'


type Props = {}

const signup = (props: Props) => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Heading/>
      <Background/>
      <SignUp/>
    </div>
  )
}

export default signup