
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bakery from '@/public/bakery-bg.jpg'
import SubHeading from './SubHeading'
import Button from './Button'

const Hero = () => {
  return (
    <div className='px-2 md:px-16 lg:px-42 py-[70%] md:py-[30%] lg:py-[18%] h-full lg:h-[100%] md:h-[70%]' style={{
        position: 'relative',
        width: '100%',
    }}>
        <Image src={bakery} alt='bakery-bg' layout='fill' objectFit='cover' quality={100}/>
        <div className='absolute min-w-full h-full bg-gradient-to-tr from-black/100 to-white/20 z-10 top-0 left-0'></div>
        <div style={{
            position: 'relative'
        }} className='text-white z-40 md:px-16'>
            <SubHeading text='HOT BUTTER BREAD & SNACKS' classname='flex items-center justify-center text-[12px] lg:justify-start'/>
            <h1 className='text-5xl md:text-6xl font-bold font-play text-center lg:text-left text-shadow-lg
            w-full lg:w-[60%] mb-6 tracking-tight'>Freshly Baked, Just For You!</h1>
            <Link href='/product' className='flex items-center justify-center lg:block'><Button label='SHOP NOW' classname='bg-green
            hover:bg-transparent hover:text-green hover:border-2 border-green text-[12px]'/></Link>
        </div>
    </div>
  )
}

export default Hero