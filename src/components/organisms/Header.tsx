'use client'


import Image from 'next/image'
import { useState } from 'react'
import { Menu, MenuIcon } from '..'
import Button from '../atoms/Buttons'

function Header() {
  const [open, setOpen] = useState(false)
  const handleOpen = (boolean: boolean) => setOpen(boolean)
  return (
    <header className='overflow-x-hidden w-full lg:bg-primary-green'>
      <div className='w-full p-2 lg:hidden flex absolute justify-between items-center'>
        <Button onClick={() => handleOpen(true)}><MenuIcon /></Button>
        <Image className='object-cover h-auto w-auto' src='/ISSD Negro horizontal.png' priority alt='logo ISSD' width={160} height={100} />
      </div>
      <Menu handleOpen={handleOpen} open={open} />
    </header>
  )
}

export default Header
