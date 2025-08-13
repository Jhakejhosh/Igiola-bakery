import Image from 'next/image'
import React from 'react'
import banner from '@/public/banner.jpg'

interface BannerHeadingProp {
    heading: string,
    subHeading: string
}

const Banner = ({heading, subHeading}:BannerHeadingProp) => {
  return (
    <div className='px-4 md:px-16 lg:px-42 py-10 md:py-16 tracking-widest font-lato relative'>
        <div className='relative mt-20 w-full md:h-[50vh] lg:h-[60vh] h-[50vh]'>
            <div className='absolute w-full h-full top-0 bg-black/50 z-10'></div>
            <Image src={banner} alt='Banner-img' layout='fill' objectFit='cover' quality={100}/>
            <div className='text-white z-40 relative md:px-10 py-30 lg:px-30 text-center lg:text-start'>
                <h1 className='text-4xl md:text-5xl font-bold font-play mb-6'>{heading}</h1>
                <p className='font-lato text-sm tracking-widest'>{subHeading}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner