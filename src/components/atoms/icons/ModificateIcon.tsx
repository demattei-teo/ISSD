import clsx from 'clsx'

interface ModificateIconProps {
  className?: string
}

function ModificateIcon({ className }: ModificateIconProps) {
  const style = clsx('', className)
  return (
    <svg width='23' className={style} height='25' viewBox='0 0 32 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(#filter0_d_265_1621)'>
        <path d='M14.6622 3.81155H7.14716C6.5777 3.81155 6.03156 4.09083 5.62889 4.58794C5.22622 5.08506 5 5.75929 5 6.46232V25.0176C5 25.7207 5.22622 26.3949 5.62889 26.892C6.03156 27.3891 6.5777 27.6684 7.14716 27.6684H22.1773C22.7467 27.6684 23.2929 27.3891 23.6955 26.892C24.0982 26.3949 24.3244 25.7207 24.3244 25.0176V15.74' stroke='white' strokeWidth='1.9638' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M22.714 1.82349C23.1411 1.29622 23.7204 1 24.3244 1C24.9284 1 25.5077 1.29622 25.9348 1.82349C26.3619 2.35076 26.6018 3.06589 26.6018 3.81156C26.6018 4.55723 26.3619 5.27236 25.9348 5.79963L15.7358 18.3907L11.4415 19.7161L12.515 14.4146L22.714 1.82349Z' stroke='white' strokeWidth='1.9638' strokeLinecap='round' strokeLinejoin='round' />
      </g>
      <defs>
        <filter id='filter0_d_265_1621' x='0.0180969' y='0.0180969' width='31.5656' height='36.6322' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_265_1621' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_265_1621' result='shape' />
        </filter>
      </defs>
    </svg>

  )
}

export default ModificateIcon
