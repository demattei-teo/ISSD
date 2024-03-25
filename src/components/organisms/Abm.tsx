'use client'

import { formatWord } from '@/utils/functions/formattedWord'
import { Input, Item, List, ModificateIcon, PlusIcon } from '..'
import FormAbm from '../molecules/Form'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from '../ui/alert-dialog'

interface AbmProps {
  table: string
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
const table = 'table_name'
const formattedTable = table.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
console.log(formattedTable)
function Abm({ name, header, inputs, table }: AbmProps) {
  return (
    <div className='flex hover:bg-slate-200/70 transition-colors cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled] data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50'>
      <AlertDialog>
        <AlertDialogTrigger>{name}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <List className='flex gap-4'>
              <Item>
                <button className='flex gap-2 items-center flex-wrap p-2 px-4 text-white bg-primary-green rounded-md'><PlusIcon /><p className='flex text-start flex-col'> Nuevo <span className=''>{formatWord(table)}</span></p>
                </button>
              </Item>
              <Item>
                <button className='flex gap-2 px-4 items-center flex-wrap p-2 text-white bg-primary-green rounded-md'>
                  <ModificateIcon /> <p className='flex text-start flex-col'>Modificar <span className=''>{formatWord(table)}</span></p>
                </button>
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
