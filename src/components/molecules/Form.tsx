import { AlertDialogCancel, AlertDialogFooter } from '../ui/alert-dialog'
import { Button } from '../ui/button'

interface FormAbmProps {
  children: React.ReactNode
}

function FormAbm({ children }: FormAbmProps) {
  return (
    <form
      className='flex flex-col gap-3' onSubmit={(e) => {
        e.preventDefault()
        console.log('Funciona')
      }}
    >
      {children}
      <AlertDialogFooter className='pt-9'>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <Button type='submit'>enviar</Button>
      </AlertDialogFooter>
    </form>
  )
}

export default FormAbm
