'use client'
import Button from '@/components/ui/button'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const LegacySection = () => {
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
    <section
      className='relative mt-40 overflow-clip bg-[#005BC4] pb-32 pt-48'
      style={{
        clipPath: 'polygon(0 0, 100% 45%, 100% 100%, 0% 100%)',
      }}
    >
      <span className='absolute -top-10 left-44 h-40 w-40 rounded-full bg-primary-200 blur-xl' />
      <div className='container relative z-40 text-neutral-0'>
        <h2>Legacy no longer</h2>
        <p className='my-6 text-lg font-medium'>
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <Button intent='secondary'>
          <div className='flex items-center gap-1'>
            <span>Contact Us</span>
          </div>
        </Button>
      </div>

      {/* svgs */}
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
        className='absolute left-0 top-0 z-20'
        layoutId={mouseX.toString() + mouseY.toString()}
        animate={{
          x: mouseX / -100,
          y: mouseY / 100,
        }}
      />
    </section>
  )
}

export default LegacySection
