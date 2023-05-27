import React from 'react'
import {Sidebar,Badge} from "flowbite-react"


type Props = {}

const SidebarBurger = (props: Props) => {
  return (
   <div className='absolute z-40 h-screen'>

<Sidebar aria-label="Sidebar with call to action button example">
  <Sidebar.Items>
    <Sidebar.ItemGroup>
      <Sidebar.Item
        href="#"
        
      >
        Dashboard
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
        Kanban
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
       
      >
        Inbox
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
        Users
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
       
      >
        Products
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
        Sign In
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        
      >
        Sign Up
      </Sidebar.Item>
    </Sidebar.ItemGroup>
  </Sidebar.Items>
  
</Sidebar>
   </div>

  )
}

export default SidebarBurger