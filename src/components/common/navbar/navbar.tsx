'use client'
import Link from 'next/link'
import { navItems } from './navbar.helper'
import Image from 'next/image'
import Button from '@/components/ui/button'
import { cn } from '@/helpers/cn'
import SelectLanguage from '@/components/ui/select/selectLanguage'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('up')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')

      // Check if at top
      setIsAtTop(currentScrollY === 0)

      // Update scroll position
      setScrollPosition(currentScrollY)

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // mobile nav state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isSubNavOpen, setIsSubNavOpen] = useState(false)

  return (
    <div
      className={cn(
        'fixed z-[100] w-full text-neutral-0 transition-all duration-300',
        scrollDirection === 'down' && scrollPosition > 50
          ? '-translate-y-full'
          : 'translate-y-0',
        !isAtTop && scrollDirection === 'up'
          ? 'bg-white text-primary-500 shadow-md'
          : 'bg-primary-700 md:bg-transparent'
      )}
    >
      <nav className='container mx-2 flex items-center justify-between gap-4 py-4 md:mx-auto'>
        {!isAtTop && scrollDirection ? (
          <Image
            src='/assets/blue-logo.svg'
            alt='logo'
            width={170}
            height={28}
            className=''
          />
        ) : (
          <Image src='/assets/logo.svg' alt='logo' width={170} height={28} />
        )}

        <div className='hidden items-center gap-10 md:flex'>
          {navItems.map((item, index) => (
            <div
              key={index}
              className='group relative flex items-center gap-2 py-2'
            >
              <span
                className={cn(
                  'absolute -bottom-1 h-[1px] w-full bg-transparent transition-all duration-300 group-hover:bg-neutral-0',
                  {
                    hidden: !!item.subItems,
                  }
                )}
              ></span>
              <Link href={item.href}>{item.name}</Link>
              {item?.subItems && (
                <Image
                  src='/assets/icons/ChevronRightWhite.svg'
                  alt='chevron'
                  width={6}
                  height={10}
                  className='mt-1 rotate-90 transform transition-transform duration-300 group-hover:-rotate-90'
                />
              )}

              {item?.subItems && (
                <div
                  className={cn(
                    'absolute left-0 top-[calc(100%+10px)] flex w-60 flex-col rounded-md bg-neutral-0 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100'
                  )}
                >
                  {item.subItems.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.href}
                      className='border-b border-neutral-50 p-3 text-content-500 last:border-b-0 hover:text-primary-500'
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <SelectLanguage
            options={[
              { label: 'EN', value: 'en' },
              { label: 'DE', value: 'de' },
              { label: 'FR', value: 'fr' },
            ]}
            className='text-primary-500'
            color={!isAtTop && scrollDirection ? '#1F80F0' : '#fff'}
          />
        </div>

        <Button
          intent={!isAtTop && scrollDirection ? 'secondary' : 'neutral'}
          modifier={!isAtTop && scrollDirection ? null : 'outline'}
          className='hidden text-neutral-0 hover:bg-neutral-0 hover:text-primary-500 md:block'
        >
          Contact Us
        </Button>

        <RxHamburgerMenu
          className='md:hidden'
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        />

        <div
          className={cn(
            'absolute right-0 top-[60px] flex w-screen flex-col gap-6 bg-primary-400 px-6 py-10 text-neutral-0 transition-all md:hidden',
            {
              '-translate-x-full': isMobileNavOpen,
            }
          )}
        >
          {navItems.map((item, index) => (
            <div key={index}>
              <div
                className='flex items-center justify-between gap-2'
                onClick={() => setIsSubNavOpen(!isSubNavOpen)}
              >
                {item.name}
                {item?.subItems && (
                  <Image
                    src='/assets/icons/ChevronRightWhite.svg'
                    alt='chevron'
                    width={6}
                    height={10}
                    className='mt-1 rotate-90 transform transition-transform duration-300 group-hover:-rotate-90'
                  />
                )}
              </div>
              {item?.subItems && (
                <div
                  className={cn('ml-4 mt-2 flex flex-col gap-2', {
                    hidden: !isSubNavOpen,
                  })}
                >
                  {item.subItems.map((subItem, index) => (
                    <Link key={index} href={subItem.href}>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button intent='secondary' className='mt-4'>
            Contact Us
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
