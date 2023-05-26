import React from 'react'
import LoginBackground from './LoginBackground'
import { Login } from './Login'
import Heading from '../Heading'

type Props = {}

const LoginMain = (props: Props) => {
  return (
    <div className="h-screen w-screen">
        <Heading/>
        <Login/>
        <LoginBackground/>
    </div>
  )
}

export default LoginMain