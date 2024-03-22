import clsx from 'clsx'

interface PlusIconProps {
  className?: string
}

function PlusIcon({ className }: PlusIconProps) {
  const style = clsx('', className)
  return (
    <svg width='25' className={style} height='23' viewBox='0 0 43 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_266_2063)'>
        <path d='M33.8024 1H8.6003C6.61191 1 5 2.46537 5 4.273V27.184C5 28.9916 6.61191 30.457 8.6003 30.457H33.8024C35.7908 30.457 37.4027 28.9916 37.4027 27.184V4.273C37.4027 2.46537 35.7908 1 33.8024 1Z' stroke='white' strokeWidth='1.9638' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M21.2014 9.1825V22.2745' stroke='white' strokeWidth='1.9638' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M14.0008 15.7285H28.402' stroke='white' strokeWidth='1.9638' strokeLinecap='round' strokeLinejoin='round' />
      </g>
      <defs>
        <filter id='filter0_d_266_2063' x='0.0181274' y='0.0181274' width='42.3665' height='39.4208' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_266_2063' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_266_2063' result='shape' />
        </filter>
      </defs>
    </svg>


  )
}

export default PlusIcon
