'use client'

import { GetOutIcon, Input, Item, Line, List, ModificateIcon, PlusIcon } from '..'
import FormAbm from '../molecules/Form'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from '../ui/alert-dialog'

interface AbmProps {
  abm?: {
    header: {
      linkAdd: string
      linkEdit: string
      linkSave: string
    }
  }
  name: string
  header?: React.ReactNode
  body?: React.ReactNode
  inputs?: Array<{
    type: string
    name: string
    label: string
    placeholder?: string
  }>
}


function Abm({ name, header, inputs, abm }: AbmProps) {
  return (
    <div className='flex hover:bg-slate-200/70 transition-colors cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled] data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50'>
      <AlertDialog>
        <AlertDialogTrigger>{name}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <List className='flex justify-between bg-primary-green rounded-lg'>
              <Item className='flex'>
                <button className='flex gap-2 items-center justify-center flex-col sm:flex-row p-2 px-4 text-white rounded-md'><PlusIcon className='w-10 h-[46.25px] fill-white' /><span className='hidden sm:flex text-start flex-col'>{abm?.header.linkAdd}</span>
                </button>
                <Line direction='vertical' className='' />
                <button className='flex gap-2 px-4 items-center flex-col sm:flex-row p-2 text-white rounded-md'>
                  <ModificateIcon className='w-10 h-[46.25px] fill-white' /> <span className='hidden sm:flex text-start flex-col'>{abm?.header.linkEdit}</span>
                </button>
              </Item>
              <Item className='justify-self-end'>
                <AlertDialogCancel className='bg-transparent m-0 w-auto h-auto rounded-none border-none hover:bg-transparent'><GetOutIcon className='w-10 h-[46.25px] fill-white ' /></AlertDialogCancel>
              </Item>
            </List>
          </AlertDialogHeader>
          <FormAbm>
            {inputs?.map((input, index) => {
              return <Input key={index} {...input} />
            })}
          </FormAbm>

        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Abm
