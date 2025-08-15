import Image from 'next/image'
import React from 'react'
import baker from '@/public/aboutBaker.jpg'
import { HiArrowLongRight } from 'react-icons/hi2'

const AboutSection = () => {
  return (
    <div className='px-4 md:px-16 lg:px-42 pb-15 md:py-16 tracking-widest font-lato relative'>
        <div className='lg:flex block gap-10'>
            <figure className='w-full'>
                <Image src={baker} alt='Baker' width={400}/>
            </figure>
            <div className='w-full'>
                <h1 className='font-bold font-play text-2xl py-5 lg:py-0 lg:pb-5 tracking-tight'>Get To Know Us More</h1>
                <p className='leading-7 font-medium'>At <b className='font-bold'>British Butter Bakery</b>, we believe that every bite should tell a story.
                Our recipes blend with innovative twists, using only the finest, freshest
                ingredients. From our warm, crusty artisan breads to our delicate pastries and decadant cakes, each creation is
                made to bring joy to your table.</p>
            </div>
            <div className='w-full'>
                <h1 className='font-bold border-b-1 border-gray-300 mt-4'>Hours</h1>
                <div className='flex-col'>
                   <div className='flex items-center gap-3 py-6'>
                    <span className='text-green'><HiArrowLongRight/></span>
                    <p><b className='font-bold'>Monday - Saturday:</b> 7:00am - 10:00pm</p>
                   </div>
                   <div className='flex items-center gap-3'>
                    <span className='text-green'><HiArrowLongRight/></span>
                    <p><b className='font-bold'>Sunday:</b> 7:00am - 8:00pm</p>
                   </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default AboutSection