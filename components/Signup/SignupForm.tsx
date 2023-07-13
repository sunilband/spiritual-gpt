'use client'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import loginImage from '../../public/svgs/loginImage.svg'
import outerMandala from '../../public/svgs/outerMandala.svg'
import { UserAuthForm } from './Signup'
import Logo from '../Logo/Logo'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function LoginForm() {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen flex-wrap p-2">
        <div className="flex justify-center flex-col mt-20 sm:mt-0">
          <Logo />
          <Image
            src={loginImage}
            alt="loginImage"
            width={400}
            height={400}
            className=" dark:bg-white"
          />
        </div>
        <hr className="border h-80 hidden md:inline-block" />
        <div className="lg:p-8 ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mt-0 md:mt-24">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials below to create an account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By signing up, you agree to our{' '}
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
