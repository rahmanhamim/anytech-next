import Image from 'next/image'
import { IoShareSocialSharp } from 'react-icons/io5'

import { FaLightbulb } from 'react-icons/fa'
import { FaMicrochip } from 'react-icons/fa6'

const cardsData = [
  {
    title: 'Full-suite solutions',
    description:
      'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.',
    icon: (
      <IoShareSocialSharp className='rounded-full bg-[#E9F3FF] p-3' size={40} />
    ),
  },
  {
    title: 'Simplify the complex',
    description:
      'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.',
    icon: <FaLightbulb className='rounded-full bg-[#D2F9F6] p-3' size={40} />,
  },
  {
    title: 'Cutting-edge tech',
    description:
      'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.',
    icon: <FaMicrochip className='rounded-full bg-[#FFE2D5] p-3' size={40} />,
  },
]

const OurPhilosophy = () => {
  return (
    <section className='container my-20'>
      <p className='text-center font-bold tracking-widest text-primary-500'>
        OUR PHILOSOPHY
      </p>
      <h2 className='text-center text-content-500'>Human-centred innovation</h2>

      <Image
        src='/assets/our-philoshopy.jpg'
        alt='Our Philosophy'
        width={1600}
        height={100}
        className='mt-10'
      />

      <div className='mt-8 grid grid-cols-3 gap-8'>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className='rounded-md bg-primary-100 p-8 text-content-500'
          >
            {card.icon}
            <h4 className='mb-4 mt-4'>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurPhilosophy
