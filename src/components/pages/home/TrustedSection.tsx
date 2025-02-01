import CounterAnimation from '@/components/ui/CounterAnimation'
import React from 'react'
import { FaGreaterThan } from 'react-icons/fa6'
import { IoMdAdd } from 'react-icons/io'

const achievementData = [
  {
    title: 'Years of Experience',
    count: 20,
    leftIcon: FaGreaterThan,
  },
  {
    title: 'Financial Institutions',
    count: 40,
    rightIcon: IoMdAdd,
  },
  {
    title: 'Customers Each',
    count: 200,
    leftIcon: FaGreaterThan,
    subText: 'm',
  },
]

const TrustedSection = () => {
  return (
    <section className='container my-20 md:my-40'>
      <p className='mb-6 text-center font-montserrat font-bold tracking-widest text-primary-500'>
        TRUSTED BY THE BEST
      </p>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        {achievementData.map((item, index) => (
          <div key={index} className='flex items-center gap-4 md:flex-col'>
            <div className='flex items-center text-primary-500'>
              {item?.leftIcon && (
                <item.leftIcon className='text-7xl text-primary-500' />
              )}
              <p className='text-7xl text-primary-500'>
                <CounterAnimation count={item?.count} />
                {item?.subText && (
                  <span className='bg-gradient-to-b from-primary-400 to-primary-700 bg-clip-text text-transparent'>
                    {item?.subText}
                  </span>
                )}
              </p>
              {item?.rightIcon && (
                <item.rightIcon className='text-7xl text-primary-500' />
              )}
            </div>
            <p className='text-sm text-content-500 md:text-lg'>{item?.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustedSection
