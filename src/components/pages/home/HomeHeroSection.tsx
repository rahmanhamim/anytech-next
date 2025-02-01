'use client'
import Button from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { motion } from 'motion/react'

const HomeHeroSection = () => {
  const [mouseX, setMouseX] = useState<number>(0)
  const [mouseY, setMouseY] = useState<number>(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div>
      <section
        className='relative -mt-20 hidden overflow-x-clip text-neutral-0 md:block'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 83%, 0% 100%)',
        }}
      >
        <Image
          src='/assets/hero-person-image.jpg'
          alt='hero-person-image'
          width={1600}
          height={1400}
          className='-z-1 absolute left-40 h-full w-full object-cover'
        />

        <div
          className='absolute left-0 top-0 z-0 h-full w-full'
          style={{
            clipPath: 'polygon(0 0, 77% 0, 39% 100%, 0% 100%)',
            background:
              'linear-gradient(215deg, rgba(0,91,196,1) 0%, rgba(23,156,239,1) 100%)',
          }}
        ></div>

        {/* wave line 1 */}
        <motion.img
          src='/assets/backgrounds/WaveLinesDesktop1.svg'
          alt='wave-line-1'
          width={1600}
          height={100}
          className='absolute -right-96 top-0 z-20'
          layoutId={mouseX.toString() + mouseY.toString()}
          animate={{
            x: mouseX / 100,
            y: mouseY / 100,
          }}
        />
        <motion.img
          src='/assets/backgrounds/WaveLinesDesktop2.svg'
          alt='wave-line-1'
          width={1600}
          height={100}
          className='absolute -top-[90%] left-0 z-20 w-full'
          layoutId={mouseX.toString() + mouseY.toString()}
          animate={{
            x: mouseX / 100,
            y: mouseY / 100,
          }}
        />
        <motion.img
          src='/assets/backgrounds/WaveLinesDesktop3.svg'
          alt='wave-line-1'
          width={700}
          height={100}
          className='absolute left-0 top-0 z-20'
          layoutId={mouseX.toString() + mouseY.toString()}
          animate={{
            x: mouseX / -100,
            y: mouseY / -100,
          }}
        />
        <motion.img
          src='/assets/backgrounds/WaveLinesDesktop4.svg'
          alt='wave-line-1'
          width={500}
          height={100}
          className='absolute right-0 z-20'
          layoutId={mouseX.toString() + mouseY.toString()}
          animate={{
            x: mouseX / -100,
            y: mouseY / 100,
          }}
        />

        <span className='absolute -right-14 -top-40 aspect-square w-[27%] rounded-full bg-primary-500 bg-opacity-45 blur-lg' />

        <div className='container relative z-50 pb-80 pt-80'>
          <div className=''>
            <h2>
              Embrace the <br /> future of finance
            </h2>
            <p className='mb-8 mt-5 max-w-[37rem] font-bold'>
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
            <Button intent='secondary'>
              <div className='flex items-center gap-2'>
                <span>Reach Out Us</span>
                <IoChevronForward />
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* hero phone */}
      <section
        className='bg-primary-600 md:hidden'
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
        }}
      >
        <div className='container relative z-50 pb-20 pt-40 text-neutral-0'>
          <div className=''>
            <h2>
              Embrace the <br /> future of finance
            </h2>
            <p className='mb-8 mt-5 max-w-[37rem] font-bold'>
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
            <Button intent='secondary'>
              <div className='flex items-center gap-2'>
                <span>Reach Out Us</span>
                <IoChevronForward />
              </div>
            </Button>
          </div>
        </div>
        <div className='relative -skew-y-12'>
          <Image
            src='/assets/hero-person-image.jpg'
            alt='hero-person-image'
            width={1600}
            height={1400}
          />
        </div>
      </section>
    </div>
  )
}

export default HomeHeroSection
