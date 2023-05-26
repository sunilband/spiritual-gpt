import React from 'react'
import { Login } from '../../components/login/Login'
import Background from '../../components/login/LoginBackground'
import Heading from '../../components/Heading'

type Props = {}

const login = (props: Props) => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Heading/>
      <Background/>
      <Login/>
    </div>
    
  )
}

export default login