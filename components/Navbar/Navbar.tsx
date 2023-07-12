import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { history } from './data'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { ThemeButton } from '../ThemeButton/ThemeButton'
import { Button } from '../ui/button'

function Navbar() {
  return (
    <div className="flex justify-center">
      <NavigationMenu className="h-16 ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 border w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                <ListItem href="/how-to-use" title="Introduction">
                  Get to know the basic usage of SpiritualGPT.
                </ListItem>
                <ListItem href="/Disclaimer" title="Disclaimer">
                  Read the disclaimer before using SpiritualGPT.
                </ListItem>
                <ListItem href="/Contact" title="Contact">
                  Contact us for any questions or concerns.
                </ListItem>
                <ListItem href="/about" title="About Dev">
                  Get to know about the developer.
                </ListItem>
                <Button variant="outline" className="self-center border">
                  <a
                    href="https://buy.stripe.com/9AQ7vF3kjedO17G3cd"
                    target="_blank"
                  >
                    Buy me a Coffee
                  </a>
                </Button>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              History
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-10">
              <ul className="grid w-[300px]  gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {history.map((history) => (
                  <ListItem
                    key={history.title}
                    title={history.title}
                    href={history.href}
                  >
                    {history.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Profile
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              User
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex justify-center items-center gap-4 p-6 w-[320px] md:w-[400px] lg:w-[400px] ">
                <li className="flex flex-col justify-center items-center w-auto">
                  <div className="mb-2">
                    <Image
                      src="https://freepngimg.com/download/google/66726-customer-account-google-service-button-search-logo.png"
                      alt="profile-pic"
                      width={50}
                      height={50}
                    />
                  </div>

                  <ListItem
                    href="/docs"
                    title="Profile"
                    className="text-center w-64"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Sign Out"
                    className="text-center text-[#EF4444] hover:text-[#EF4444] w-64"
                  ></ListItem>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* theme button */}
          <NavigationMenuItem>
            <ThemeButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navbar
