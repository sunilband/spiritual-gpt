'use client'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import loginImage from '../../public/svgs/loginImage.svg'
import outerMandala from '../../public/svgs/outerMandala.svg'

import { cn } from '@/lib/utils'
import { buttonVariants } from '../../components/ui/button'
import Login from './Login'
import Logo from '../Logo/Logo'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function LoginForm() {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen flex-wrap">
        <div className="flex justify-center items-center flex-col sm:mt-0">
          <Logo />
          <Image
            src={loginImage}
            alt="loginImage"
            width={400}
            height={400}
            className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert hover:scale-105 transition-all duration-300 ease-in-out'          />
        </div>
        <hr className="border h-80 hidden md:inline-block" />
        <div className="lg:p-8 ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to login
              </p>
            </div>
            <Login />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By logging in, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
