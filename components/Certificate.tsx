import React from 'react'
import cac from '@/public/cac-removebg-preview.png'
import nafdac from '@/public/nafdac-removebg-preview.png'
import son from '@/public/son-removebg-preview.png'
import Image from 'next/image'

const Certificate = () => {
  return (
    <div className='flex items-center justify-center md:gap-32 gap-2 md:py-10 pb-10'>
        <Image src={cac} alt='cac' width={80}/>
        <Image src={nafdac} alt='nafdac' width={80}/>
        <Image src={son} alt='son' width={80}/>
    </div>
  )
}

export default Certificate