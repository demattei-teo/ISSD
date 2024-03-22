import clsx from 'clsx'

interface ItemProps {

  className?: string
  children: React.ReactNode
}
function Item({ className, children }: ItemProps) {
  const style = clsx('', className)
  return (
    <li className={style}>{children}</li>
  )
}

export default Item
