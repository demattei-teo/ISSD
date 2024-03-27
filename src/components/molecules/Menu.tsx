'use client'

import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
import { categories } from '@/utils/Links'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Abm, CloseIcon, Consult } from '..'
import Button from '../atoms/Buttons'


interface MenuProps {
  open: boolean
  handleOpen: (open: boolean) => void
}

function Menu({ open, handleOpen }: MenuProps) {
  const style = {
    menuBar: clsx('wrapper translate-y-[-200%] flex-wrap fixed lg:static transition-transform flex duration-1000 w-full gap-2  items-start bg-primary-green lg:translate-y-0', open && 'translate-y-0')
  }
  return (
    <Menubar className={style.menuBar}>
      <div className='border-b flex lg:hidden pb-2 justify-between items-center border-slate-200 dark:border-slate-700 w-full'>
        <Button onClick={() => handleOpen(false)}><CloseIcon className='fill-gray-200' /></Button>
        <Image className='object-cover h-auto w-auto' src='/Blanco horizontal.png' alt='logo ISSD' width={180} height={100} />
      </div>

      <MenubarMenu>
        <MenubarTrigger>Archivo</MenubarTrigger>
        <MenubarContent className='h-[380px] overflow-y-scroll scrollable'>

          {categories.archivo.map((category, index) => {
            if (category.subMenu) {
              return (
                <MenubarSub key={index}>
                  <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {category.subMenu.map((subMenu, index) => {
                      switch (subMenu.role) {
                        case 'dialog ABM':
                          return <Abm abm={subMenu.abm} key={index} name={subMenu.name} inputs={subMenu.inputs} />

                        case 'dialog consult': return <Consult key={index} name={subMenu.name} />

                        default:
                          return <MenubarItem key={index}><Link href={subMenu.link ?? '/'}>{subMenu.name}</Link></MenubarItem>
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            } else {
              return (
                <MenubarItem key={index}>
                  <Link href={category.link ?? '/'}>{category.name}</Link>
                </MenubarItem>
              )
            }
          })}
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
                      switch (subMenu.role) {
                        case 'dialog ABM':
                          return <Abm abm={subMenu.abm} key={index} name={subMenu.name} inputs={subMenu.inputs} />
                        case 'dialog consult': return <Consult key={index} name={subMenu.name} />
                        default:
                          return <MenubarItem key={index}><Link href={subMenu.link ?? '/'}>{subMenu.name}</Link></MenubarItem>
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            } else {
              return (
                <MenubarItem key={index}>
                  <Link href={category.link ?? '/'}>{category.name}</Link>
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
                      switch (subMenu.role) {
                        case 'dialog ABM':
                          return <Abm abm={subMenu.abm} key={index} name={subMenu.name} inputs={subMenu.inputs} />
                        case 'dialog consult': return <Consult key={index} name={subMenu.name} />
                        default:
                          return <MenubarItem key={index}><Link href={subMenu.link ?? '/'}>{subMenu.name}</Link></MenubarItem>
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            } else {
              return (
                <MenubarItem key={index}>
                  <Link href={category.link ?? '/'}>{category.name}</Link>
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
                      switch (subMenu.role) {
                        case 'dialog ABM':
                          return <Abm abm={subMenu.abm} key={index} name={subMenu.name} inputs={subMenu.inputs} />
                        case 'dialog consult': return <Consult key={index} name={subMenu.name} />
                        default:
                          return <MenubarItem key={index}><Link href={subMenu.link ?? '/'}>{subMenu.name}</Link></MenubarItem>
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            } else {
              return (
                <MenubarItem key={index}>
                  <Link href={category.link ?? '/'}>{category.name}</Link>
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
                      switch (subMenu.role) {
                        case 'dialog ABM':
                          return <Abm abm={subMenu.abm} key={index} name={subMenu.name} inputs={subMenu.inputs} />
                        case 'dialog consult': return <Consult key={index} name={subMenu.name} />
                        default:
                          return <MenubarItem key={index}><Link href={subMenu.link ?? '/'}>{subMenu.name}</Link></MenubarItem>
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            } else {
              return (
                <MenubarItem key={index}>
                  <Link href={category.link ?? '/'}>{category.name}</Link>
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
                      switch (subMenu.role) {
                        case 'dialog ABM':
                          return <Abm abm={subMenu.abm} key={index} name={subMenu.name} inputs={subMenu.inputs} />
                        case 'dialog consult': return <Consult key={index} name={subMenu.name} />
                        default:
                          return <MenubarItem key={index}><Link href={subMenu.link ?? '/'}>{subMenu.name}</Link></MenubarItem>
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            } else {
              return (
                <MenubarItem key={index}>
                  <Link href={category.link ?? '/'}>{category.name}</Link>
                </MenubarItem>
              )
            }
          })}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Administración</MenubarTrigger>
        <MenubarContent>
          {categories.administración.map((category, index) => {
            if (category.subMenu) {
              return (
                <MenubarSub key={index}>
                  <MenubarSubTrigger>{category.name}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {category.subMenu.map((subMenu, index) => {
                      switch (subMenu.role) {
                        case 'dialog ABM':
                          return <Abm abm={subMenu.abm} key={index} name={subMenu.name} inputs={subMenu.inputs} />
                        case 'dialog consult': return <Consult key={index} name={subMenu.name} />
                        default:
                          return <MenubarItem key={index}><Link href={subMenu.link ?? '/'}>{subMenu.name}</Link></MenubarItem>
                      }
                    })}
                  </MenubarSubContent>
                </MenubarSub>
              )
            } else {
              return (
                <MenubarItem key={index}>
                  <Link href={category.link ?? '/'}>{category.name}</Link>
                </MenubarItem>
              )
            }
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Menu
