import { formatWord } from '@/utils/functions/formattedWord'
import { Table } from '..'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '../ui/alert-dialog'

interface ConsultProps {
  table: string
  name: string

}

function Consult({ table, name }: ConsultProps) {
  return (
    <div className='flex hover:bg-slate-200/70 transition-colors cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled] data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50'>
      <AlertDialog>
        <AlertDialogTrigger className='text-start'>
          <p>Consultar <span>{formatWord(name)}</span></p>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <p>Consultar <span>{formatWord(name)}</span></p>
          </AlertDialogHeader>
          <Table className='py-7' />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Consult
