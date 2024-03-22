'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '../ui/alert-dialog'

interface AbmProps {
  name: string
  header?: React.ReactNode
  body?: React.ReactNode
}

function Abm({ name, header, body }: AbmProps) {
  return (
    <div className='flex hover:bg-slate-200/70 transition-colors cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled] data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50'>
      <AlertDialog>
        <AlertDialogTrigger>{name}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            ABM
            {header}
          </AlertDialogHeader>
          {body}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Abm
