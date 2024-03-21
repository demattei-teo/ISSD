'use client'

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
import { categories } from '@/utils/Links'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CloseIcon, MenuIcon } from '..'
import Button from '../atoms/Buttons'
import { ScrollArea } from '../ui/scroll-area'

function Header() {
  const [open, setOpen] = useState(false)
  const handleOpen = (boolean: boolean) => setOpen(boolean)
  const style = {
    menuBar: clsx('wrapper translate-y-[-200%] flex-wrap fixed lg:static transition-transform flex duration-1000 w-full gap-2  items-start bg-primary-green lg:translate-y-0', open && 'translate-y-0')
  }
  return (
    <header className='overflow-x-hidden w-full lg:bg-primary-green'>
      <div className='w-full p-2 lg:hidden flex absolute justify-between items-center'>
        <Button onClick={() => handleOpen(true)}><MenuIcon /></Button>
        <Image className='object-cover h-auto w-auto' src='/ISSD Negro horizontal.png' priority alt='logo ISSD' width={180} height={100} />
      </div>
      <Menubar className={style.menuBar}>
        <div className='border-b flex lg:hidden pb-2 justify-between items-center border-slate-200 dark:border-slate-700 w-full'>
          <Button onClick={() => handleOpen(false)}><CloseIcon className='fill-gray-200' /></Button>
          <Image className='object-cover h-auto w-auto' src='/Blanco horizontal.png' alt='logo ISSD' width={180} height={100} />
        </div>

        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <ScrollArea className='h-[384px] px-2 overflow-auto'>

              {categories.archivo.map((category, index) => {
                if (category.subMenu) {
                  return (
                    <MenubarSub key={index}>
                      <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                      <MenubarSubContent>
                        {category.subMenu.map((subMenu, index) => {
                          return (
                            <MenubarItem key={index}>
                              <Link href='/'>{subMenu.name}</Link>
                            </MenubarItem>
                          )
                        })}
                      </MenubarSubContent>
                    </MenubarSub>
                  )
                } else {
                  return (
                    <MenubarItem key={index}>
                      <Link href={category.link}>{category.name}</Link>
                    </MenubarItem>
                  )
                }
              })}
            </ScrollArea>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Carreras</MenubarTrigger>
          <MenubarContent>
            {categories.carreras.map((category, index) => {
              if (category.subMenu) {
                return (
                  <MenubarSub key={index}>
                    <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                    <MenubarSubContent>
                      {category.subMenu.map((subMenu, index) => {
                        return (
                          <MenubarItem key={index}>
                            <Link href='/'>{subMenu.name}</Link>
                          </MenubarItem>
                        )
                      })}
                    </MenubarSubContent>
                  </MenubarSub>
                )
              } else {
                return (
                  <MenubarItem key={index}>
                    <Link href={category.link}>{category.name}</Link>
                  </MenubarItem>
                )
              }
            }
            )}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Alumnos</MenubarTrigger>
          <MenubarContent>
            {categories.alumnos.map((category, index) => {
              if (category.subMenu) {
                return (
                  <MenubarSub key={index}>
                    <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                    <MenubarSubContent>
                      {category.subMenu.map((subMenu, index) => {
                        return (
                          <MenubarItem key={index}>
                            <Link href='/'>{subMenu.name}</Link>
                          </MenubarItem>
                        )
                      })}
                    </MenubarSubContent>
                  </MenubarSub>
                )
              } else {
                return (
                  <MenubarItem key={index}>
                    <Link href={category.link}>{category.name}</Link>
                  </MenubarItem>
                )
              }
            })}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Docentes</MenubarTrigger>
          <MenubarContent>
            {categories.docentes.map((category, index) => {
              if (category.subMenu) {
                return (
                  <MenubarSub key={index}>
                    <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                    <MenubarSubContent>
                      {category.subMenu.map((subMenu, index) => {
                        return (
                          <MenubarItem key={index}>
                            <Link href='/'>{subMenu.name}</Link>
                          </MenubarItem>
                        )
                      })}
                    </MenubarSubContent>
                  </MenubarSub>
                )
              } else {
                return (
                  <MenubarItem key={index}>
                    <Link href={category.link}>{category.name}</Link>
                  </MenubarItem>
                )
              }
            })}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Cursado</MenubarTrigger>
          <MenubarContent>
            {categories.cursado.map((category, index) => {
              if (category.subMenu) {
                return (
                  <MenubarSub key={index}>
                    <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                    <MenubarSubContent>
                      {category.subMenu.map((subMenu, index) => {
                        return (
                          <MenubarItem key={index}>
                            <Link href='/'>{subMenu.name}</Link>
                          </MenubarItem>
                        )
                      })}
                    </MenubarSubContent>
                  </MenubarSub>
                )
              } else {
                return (
                  <MenubarItem key={index}>
                    <Link href={category.link}>{category.name}</Link>
                  </MenubarItem>
                )
              }
            })}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Campañas</MenubarTrigger>
          <MenubarContent>
            {categories.campañas.map((category, index) => {
              if (category.subMenu) {
                return (
                  <MenubarSub key={index}>
                    <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                    <MenubarSubContent>
                      {category.subMenu.map((subMenu, index) => {
                        return (
                          <MenubarItem key={index}>
                            <Link href='/'>{subMenu.name}</Link>
                          </MenubarItem>
                        )
                      })}
                    </MenubarSubContent>
                  </MenubarSub>
                )
              } else {
                return (
                  <MenubarItem key={index}>
                    <Link href={category.link}>{category.name}</Link>
                  </MenubarItem>
                )
              }
            })}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Administación</MenubarTrigger>
          <MenubarContent>
            {categories.administración.map((category, index) => {
              if (category.subMenu) {
                return (
                  <MenubarSub key={index}>
                    <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                    <MenubarSubContent>
                      {category.subMenu.map((subMenu, index) => {
                        return (
                          <MenubarItem key={index}>
                            <Link href='/'>{subMenu.name}</Link>
                          </MenubarItem>
                        )
                      })}
                    </MenubarSubContent>
                  </MenubarSub>
                )
              } else {
                return (
                  <MenubarItem key={index}>
                    <Link href={category.link}>{category.name}</Link>
                  </MenubarItem>
                )
              }
            })}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  )
}

export default Header
