'use client'
import CountUp from 'react-countup'

const CounterAnimation = ({ count }: { count: number }) => {
  return (
    <CountUp
      end={count}
      duration={5}
      delay={1}
      separator=','
      enableScrollSpy
      scrollSpyOnce={false}
      className='bg-gradient-to-b from-primary-400 to-primary-700 bg-clip-text text-4xl font-bold text-transparent md:text-7xl'
    />
  )
}

export default CounterAnimation
