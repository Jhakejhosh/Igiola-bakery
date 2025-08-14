import React from 'react'
import baking from '@/public/baking.jpg'
import nigeria from '@/public/nigeria.png'
import Image from 'next/image'
import SubHeading from './SubHeading'
import Button from './Button'
import Link from 'next/link'

const BakerHotline = () => {

    const supermarket: string[] = [
        'TEMPLE HILL', 'PENNYEXPRESS', 'URBAN', 'GAZA', 'BLEND', 'MAXLAND', 'GLOBUS', 'K&C', 'TAIWO', 'GOODMAN'
    ]

  return (
    <div className='px-4 py-10 md:px-16 lg:px-42 md:py-16 tracking-widest font-lato'>
        <div className='lg:flex block'>
            <div className='relative w-full h-[40vh] lg:h-[60vh]'>
                <Image src={baking} alt='baking' layout='fill' objectFit='cover' quality={100}/>
                <div className='absolute w-full h-full top-0 left-0 bg-black/70'></div>
                <div className='z-40 relative lg:p-32 p-8'>
                    <SubHeading text="BAKER&apos;S HOTLINES" classname='text-white text-[12px]'/>
                    <h1 className='font-play font-bold text-white tracking-tight mb-5 text-[22px]
                    md:text-3xl'>You Need Fresh Hot Butter Bread & Snacks? We&apos;re Not far From you!</h1>
                    <div className='flex gap-4'>
                        <Link href='tel:=2348064204567'><Button label='CALL NOW' classname='bg-green
                        text-white text-[12px]'/></Link>
                        <Link href="https://wa.me/2348064204567"><Button label='CHAT US ON WHATSAPP'classname='border-1
                        text-green text-[12px]'/></Link>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/3 w-full py-6 p-3'>
                <SubHeading text="BREAD SUPPLY" classname='text-[12px] flex items-center justify-center'/>
                <h1 className='font-play font-bold tracking-tight mb-5 text-[22px]
                    md:text-3xl text-center'>Do You Have Anything To Order? We Deliver Nationwide
                </h1>
                {/**<div className='grid grid-cols-2 gap-3'>
                    {
                        supermarket.map((s) => {
                            return(
                                <span key={s} className='bg-brown/10 text-[12px] font-bold text-center p-3'>
                                    {s}
                                </span>
                            )
                        })
                    }
                </div>**/}
                <figure>
                    <Image src={nigeria} alt='Nigeria' width={500}/>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default BakerHotline