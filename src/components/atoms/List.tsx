import clsx from 'clsx'

interface ListProps {
  className?: string
  children: React.ReactNode
}

function List({ className, children }: ListProps) {
  const style = clsx('', className)
  return (
    <ul className={style}>{children}</ul>
  )
}

export default List
