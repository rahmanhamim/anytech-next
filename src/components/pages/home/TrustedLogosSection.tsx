'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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
    <>
      <section className='container mb-20 hidden grid-cols-1 items-center gap-16 md:grid md:grid-cols-5'>
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
      <section className='block md:hidden'>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className='mt-10 overflow-hidden'
        >
          {logosData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='h-full p-1'>
                  <div>
                    <div className='min-h-40'>
                      <Image
                        src={item.slug}
                        alt='logo'
                        width={500}
                        height={200}
                        className='absolute h-full w-full object-scale-down'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </>
  )
}

export default TrustedLogosSection
