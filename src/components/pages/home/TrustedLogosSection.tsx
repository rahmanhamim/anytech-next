import Image from 'next/image'
import React from 'react'

const logosData = [
  {
    slug: '/assets/logo-slider-1.webp',
  },
  {
    slug: '/assets/logo-slider-2.webp',
  },
  {
    slug: '/assets/logo-slider-3.webp',
  },
  {
    slug: '/assets/logo-slider-4.webp',
  },
  {
    slug: '/assets/logo-slider-5.webp',
  },
  {
    slug: '/assets/logo-slider-6.webp',
  },
  {
    slug: '/assets/logo-slider-7.webp',
  },
  {
    slug: '/assets/logo-slider-8.webp',
  },
  {
    slug: '/assets/logo-slider-9.webp',
  },
  {
    slug: '/assets/logo-slider-10.webp',
  },
  {
    slug: '/assets/logo-slider-11.webp',
  },
  {
    slug: '/assets/logo-slider-6.webp',
  },
  {
    slug: '/assets/logo-slider-6.webp',
  },
  {
    slug: '/assets/logo-slider-7.webp',
  },
  {
    slug: '/assets/logo-slider-8.webp',
  },
]

const TrustedLogosSection = () => {
  return (
    <section className='container mb-20 grid grid-cols-5 items-center gap-16'>
      {logosData.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.slug}
              width={300}
              height={200}
              alt='logo'
              className='h-[100px] w-[300px] object-scale-down'
            />
          </div>
        )
      })}
    </section>
  )
}

export default TrustedLogosSection
