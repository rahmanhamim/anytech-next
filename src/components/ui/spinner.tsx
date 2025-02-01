import { cn } from '@/helpers/cn'
import { SVGProps } from 'react'

interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const Spinner = ({ size = 20, className, ...props }: IIconProps) => {
  return (
    <svg
      className={cn('animate-spin', className)}
      width={size}
      height={size}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        className='fill-current'
        d='M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z'
      ></path>
    </svg>
  )
}

export default Spinner
