import clsx from 'clsx'

interface MenuIconProps {
  className?: string
}

function MenuIcon({ className }: MenuIconProps) {
  const style = clsx('', className)
  return (
    <svg className={style} width={24} height={24} viewBox='0 0 448 512'><path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' /></svg>
  )
}

export default MenuIcon
