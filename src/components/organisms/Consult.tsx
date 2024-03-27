import { formatWord } from '@/utils/functions/formattedWord'
import { CloseIcon, Table } from '..'
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from '../ui/alert-dialog'

interface ConsultProps {
  name: string

}

function Consult({ name }: ConsultProps) {
  return (
    <div className='flex hover:bg-slate-200/70 transition-colors cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled] data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50'>
      <AlertDialog>
        <AlertDialogTrigger className='text-start'>
          <p> {formatWord(name)}</p>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader className='grid pb-2.5 grid-cols-2 items-end'>
            <span className='font-semibold text-lg'>{formatWord(name)}</span>
            <AlertDialogCancel className='justify-self-end h-auto w-auto p-0.5 border-none shadow-none'><CloseIcon className='fill-black' /></AlertDialogCancel>
          </AlertDialogHeader>
          <Table className='py-7' />
        </AlertDialogContent>

      </AlertDialog>
    </div>
  )
}

export default Consult
