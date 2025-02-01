import Image from 'next/image'

const PoweringFinance = () => {
  return (
    <section className='container my-40 grid grid-cols-1 gap-16 md:grid-cols-2'>
      <div className='text-content-500'>
        <p className='mb-6 font-montserrat font-bold tracking-widest text-primary-500'>
          POWERING THE FUTURE OF FINANCE
        </p>
        <h2 className='font-semibold leading-[1.25]'>
          Uncovering new ways to delight customers
        </h2>
        <p className='my-5 font-bold'>
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p>
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>
      <div className='relative'>
        {/* pattern 1 */}
        <Image
          src='/assets/pattern-finance-1.svg'
          width={950}
          height={650}
          alt='Powering Finance'
          className='absolute left-[-50px] top-[-60px]'
        />
        {/* pattern 2 */}
        <Image
          src='/assets/pattern-foreground-finance.png'
          width={550}
          height={550}
          alt='Powering Finance'
          className='absolute -bottom-20 right-10 z-20'
        />

        {/* icons */}
        <Image
          src='/assets/icon-1-finance.svg'
          width={80}
          height={80}
          alt='Powering Finance'
          className='absolute -left-10 top-28 z-20 animate-bounce [animation-duration:_13s]'
        />
        <Image
          src='/assets/icon-2-finance.svg'
          width={100}
          height={100}
          alt='Powering Finance'
          className='absolute left-14 top-56 z-20 animate-bounce [animation-duration:_15s]'
        />
        <Image
          src='/assets/icon-3-finance.svg'
          width={120}
          height={120}
          alt='Powering Finance'
          className='absolute right-0 top-20 z-20 animate-bounce [animation-duration:_10s] md:right-10'
        />

        {/* main image */}
        <Image
          src='/assets/powering-finance.jpg'
          width={450}
          height={546}
          alt='Powering Finance'
          className='relative z-10'
        />
      </div>
    </section>
  )
}

export default PoweringFinance
