'use client'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const TabSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const tabs = [
    {
      name: 'Customer focused',
      title: 'Purpose-built financial services',
      content1:
        'Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.',
      content2:
        'Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.',
      image: '/assets/slider-image-1.avif',
    },
    {
      name: 'Agile and adaptable',
      title: 'Agile and adaptable for growth',
      content1:
        'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.',
      content2:
        'Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
      image: '/assets/slider-image-2.avif',
    },
    {
      name: 'Compliance ready',
      title: 'Manage compliance with ease',
      content1:
        'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.',
      content2:
        'Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.',
      image: '/assets/slider-image-3.avif',
    },
    {
      name: 'Secure and safe',
      title: 'Highly secure and safe',
      content1:
        'Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.',
      content2:
        'Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.',
      image: '/assets/slider-image-4.avif',
    },
  ]

  return (
    <div className='container mt-5 lg:px-0'>
      {/* Tabs */}
      <div className='mb-4 flex justify-center gap-8'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`rounded-full px-8 py-3 font-bold text-primary-500 transition-all hover:bg-primary-100 ${
              activeIndex === index ? 'bg-primary-200 bg-opacity-20' : ''
            }`}
            onClick={() => (swiperRef?.current as any)?.swiper.slideTo(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className='mt-10 h-[550px] overflow-hidden'
      >
        {tabs.map((tab, index) => (
          <SwiperSlide key={index}>
            <div className='h-full p-1'>
              <div className='grid h-full grid-cols-2 gap-10 rounded-3xl border px-8 py-14 text-content-500 shadow'>
                <div>
                  <p className='font-bold tracking-widest text-primary-500'>
                    {tab.name}
                  </p>
                  <h3 className='my-8 leading-none'>{tab.title}</h3>
                  <p className='mb-8'>
                    <strong>{tab.content1}</strong>
                  </p>
                  <p>{tab.content2}</p>
                </div>
                <div className='relative overflow-hidden rounded-2xl'>
                  <Image
                    src={tab.image}
                    alt={tab.name}
                    width={500}
                    height={500}
                    className='absolute h-full w-full object-cover'
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TabSwiper
