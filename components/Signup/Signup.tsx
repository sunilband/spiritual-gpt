'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth, provider } from '../../firebase/firebase'
import spinner from '../../public/svgs/spinner.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { setCookie, parseCookies } from 'nookies'
import { getCookie } from '../../utils/getCookie'
import userContext from '@/context/userContext'
import { UserInterface } from '@/context/userContext'
import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useToast } from '@/components/ui/use-toast'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(30, 'Firstname should be 30 char or less')
        .required('First Name Required'),
      lastname: Yup.string()
        .max(30, 'Lastname should be 30 char or less')
        .required('Last Name Required'),
      email: Yup.string().email('Invalid Email').required('Email Required'),
      password: Yup.string()
        .min(6, 'Password must be 6 char or more')
        .required('Password Required'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password Required'),
    }),
    onSubmit: (values) => {},
  })
  const { toast } = useToast()

  const { user, setUser } = useContext(userContext)
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    const formikErrors = Object.values(formik.errors)
    if (formikErrors.length > 0) {
      toast({
        title: 'Fill the form correctly',
        description: formikErrors.join(' , '),
      })
    } else {
      try {
        createUserWithEmailAndPassword(
          auth,
          formik.values.email,
          formik.values.password,
        )
          .then((data: any) => {
            const googleToken = data?.user.accessToken
            // @ts-ignore
            updateProfile(auth.currentUser, {
              displayName: `${formik.values.firstname} ${formik.values.lastname}`,
            }).then(() => {
              setUser({
                ...user,
                name: data.user.displayName,
                email: data.user.email,
                image: '',
              })
              setCookie(
                null,
                'user',
                JSON.stringify({
                  ...user,
                  name: data.user.displayName,
                  email: data.user.email,
                  image: '',
                }),
                {
                  maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
                  path: '/', // Cookie available across all paths
                },
              )
              // router.push('/')
            })
          })
          .catch((err) => {
            if (err.code === 'auth/email-already-in-use') {
              toast({
                title: 'User already exists',
                description: 'Please login instead',
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
        console.log(error)
      }
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <div className="flex gap-1 mx">
              <Label className="sr-only" htmlFor="firstname">
                First Name
              </Label>
              <Input
                id="firstname"
                placeholder="First Name"
                type="text"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
              <Label className="sr-only" htmlFor="lastname">
                Last Name
              </Label>
              <Input
                id="lastname"
                placeholder="Last Name"
                type="text"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
            </div>

            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
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
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Label className="sr-only" htmlFor="passwordConfirm">
              Confirm Password
            </Label>
            <Input
              id="passwordConfirm"
              placeholder="Confirm Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.passwordConfirm}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Image
                src={spinner}
                alt="spinner"
                width={20}
                height={20}
                className="mr-2 h-4 w-4 animate-spin"
              />
            )}
            Sign Up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Already have an account ?
          </span>
        </div>
      </div>
      <Button variant="link" type="button" disabled={isLoading}>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  )
}
