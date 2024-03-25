import clsx from 'clsx'
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table as WrapperTable } from '../ui/table'

interface TableProps {
  className?: string
}

function Table({ className }: TableProps) {
  const style = clsx('overflow-y-scroll', className)

  return (
    <WrapperTable className={style}>
      <TableHeader>
        <TableRow>
          <TableHead className=''>Codigo</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Localidad</TableHead>
          <TableHead className=''>Edad</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Santiago</TableCell>
          <TableCell>Cordoba, Argentina</TableCell>
          <TableCell>23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className='font-medium'>INV002</TableCell>
          <TableCell>Nahuel</TableCell>
          <TableCell>Mendoza, Argentina</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Santiago</TableCell>
          <TableCell>Cordoba, Argentina</TableCell>
          <TableCell>23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Nahuel</TableCell>
          <TableCell>Mendoza, Argentina</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Santiago</TableCell>
          <TableCell>Cordoba, Argentina</TableCell>
          <TableCell>23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Nahuel</TableCell>
          <TableCell>Mendoza, Argentina</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Santiago</TableCell>
          <TableCell>Cordoba, Argentina</TableCell>
          <TableCell>23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Nahuel</TableCell>
          <TableCell>Mendoza, Argentina</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Santiago</TableCell>
          <TableCell>Cordoba, Argentina</TableCell>
          <TableCell>23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Nahuel</TableCell>
          <TableCell>Mendoza, Argentina</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Santiago</TableCell>
          <TableCell>Cordoba, Argentina</TableCell>
          <TableCell>23</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Nahuel</TableCell>
          <TableCell>Mendoza, Argentina</TableCell>
          <TableCell>18</TableCell>
        </TableRow>

      </TableBody>
    </WrapperTable>
  )
}

export default Table
