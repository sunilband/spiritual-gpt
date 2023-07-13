'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth, provider } from '../../firebase/firebase'
import spinner from '../../public/svgs/spinner.svg'
import googleIcon from '@/public/svgs/google.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import userContext from '@/context/userContext'
import { UserInterface } from '@/context/userContext'
import { setCookie, parseCookies } from 'nookies'
import { getCookie } from '../../utils/getCookie'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useToast } from '@/components/ui/use-toast'

type Props = {}

const Login = (props: Props) => {
  useEffect(() => {
    if (user) {
      // router.push('/')
    }
  }, [])

  const initialValues = {
    email: '',
    password: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email').required('Email Required'),
      password: Yup.string()
        .min(6, 'Password must be 6 char or more')
        .required('Password Required'),
    }),
    onSubmit: (values) => {},
  })
  const { toast } = useToast()

  const router = useRouter()
  const { user, setUser } = useContext(userContext)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    try {
      signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password,
      )
        .then((data: any) => {
          const googleToken = data?.user.accessToken
          setUser({
            ...user,
            name: data.user.displayName,
            email: data.user.email,
            image: data.user.photoURL,
          })
          setCookie(
            null,
            'user',
            JSON.stringify({
              ...user,
              name: data.user.displayName,
              email: data.user.email,
              image: data.user.photoURL,
            }),
            {
              maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
              path: '/', // Cookie available across all paths
            },
          )
          router.push('/')
        })
        .catch((err) => {
          if (err.code === 'auth/user-not-found') {
            toast({
              title: 'User not found',
              description: 'Please signup first',
            })
          } else {
            toast({
              title: 'An error occured',
            })
          }
        })
    } catch (error: any) {
      toast({
        title: 'An error occured',
      })
    }
  }

  const googleSignIn = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    try {
      signInWithPopup(auth, provider)
        .then((data: any) => {
          const googleToken = data?.user.accessToken
          setUser({
            ...user,
            name: data.user.displayName,
            email: data.user.email,
            image: data.user.photoURL,
          })
          setCookie(
            null,
            'user',
            JSON.stringify({
              ...user,
              name: data.user.displayName,
              email: data.user.email,
              image: data.user.photoURL,
            }),
            {
              maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
              path: '/', // Cookie available across all paths
            },
          )
          router.push('/')
        })
        .catch((err) => {
          alert(err)
        })
    } catch (err: any) {
      alert(err)
    }
  }

  return (
    <div className={cn('grid gap-6')} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Label className="sr-only" htmlFor="password">
              password
            </Label>
            <Input
              id="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              //   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              <Image
                src={spinner}
                alt="spinner"
                width={20}
                height={20}
                className="mr-2 h-4 w-4 animate-spin"
              />
            )}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        type="button"
        disabled={isLoading}
        onClick={googleSignIn}
        className="bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-slate-800 "
      >
        {isLoading ? (
          //   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          <Image
            src={spinner}
            alt="spinner"
            width={100}
            height={100}
            className="mr-2 h-4 w-4 animate-spin"
          />
        ) : (
          <Image
            src={googleIcon}
            alt="google-icon"
            width={100}
            height={100}
            className="mr-2 h-4 w-4 hover:scale-110 transition-all duration-300 ease-in-out"
          />
        )}{' '}
        Google
      </Button>
    </div>
  )
}

export default Login
