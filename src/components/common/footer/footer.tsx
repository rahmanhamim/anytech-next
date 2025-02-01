import Image from 'next/image'
import { navItems } from '../navbar/navbar.helper'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className='bg-[#002045] py-14 text-tertiary-500'>
        <div className='container flex items-center justify-between gap-4'>
          <Image src='/assets/logo.svg' alt='logo' width={170} height={28} />
          <div className='flex items-center gap-10'>
            <p className='relative'>
              Our Solutions
              <span className='absolute -right-5 -top-3 h-12 w-[1px] bg-tertiary-900' />
            </p>

            <div className='flex items-center gap-4'>
              {navItems[0]?.subItems?.map((item, index) => (
                <p key={index}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-[#164377] bg-[#00152D]'>
        <div className='container flex items-center justify-between gap-4 py-6 text-xs text-[#1f80f0]'>
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. Any
            Technology
          </p>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
