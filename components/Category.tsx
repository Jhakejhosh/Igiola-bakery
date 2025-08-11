import Image from 'next/image'
import React from 'react'
import variety from "@/public/variety.jpg"
import SubHeading from './SubHeading'
import { IconType } from 'react-icons'
import { PiBreadLight, PiCake } from 'react-icons/pi'
import { LuDonut } from 'react-icons/lu'
import Link from 'next/link'
import Button from './Button'

const Category = () => {

  interface CategoryType {
    id: number,
    category: string,
    icon: IconType,
    text: string
  }

  const categories:CategoryType[] = [
    {
      id: 1,
      category: "BREAD",
      icon: PiBreadLight,
      text: "The heart and soul of our bakery"
    },
    {
      id: 2,
      category: "PASTRY",
      icon: LuDonut,
      text: "A little piece of heaven in every bite"
    },
    {
      id: 3,
      category: "CAKES & CUP CAKES",
      icon: PiCake,
      text: "Celebrate the moments that matter"
    }
  ]

  return (
    <div className='px-4 md:px-16 lg:px-42 py-10 md:py-16 tracking-widest font-lato relative'>
        <div className='md:flex w-full md:h-[55vh] h-[100vh]'>
            <div className='w-full md:h-full lg:px-16 md:py-8 h-[60vh]'>
                <>
                    <SubHeading text='CATEGORIES' classname='justify-start text-[12px]'/>
                    <h1 className='font-play text-[22px] md:text-3xl tracking-tight 
                    font-bold mb-4'>Explore The Categories Of All Our Products</h1>
                    <p className='font-normal leading-6 mb-4'>From our buttery bread, tender but flaky snacks to our rich, decadent cakes, 
                      every bite is a celebration of flavor and tradition.
                    </p>
                    <div className='grid grid-cols-2 gap-4'>
                      {
                        categories.map((c) => {
                          const {icon, text, category, id} = c
                          const IconElement = icon
                          return(
                            <div key={id} className='bg-brown/10 p-3'>
                              <div className='flex justify-between items-center font-bold'>
                                <h2 className='mb-3'>{category}</h2>
                                <span className='text-lg'><IconElement/></span>
                              </div>
                              <p className='text-[12px]'>{text}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                </>
            </div>
            <div className='relative w-full md:h-full h-[40vh]'>
                 <Image src={variety} alt='varieties' layout='fill' objectFit='cover' quality={100}/>
                 <div className='z-40 bg-white/90 absolute md:w-[70%] w-[80%] h-[70%] md:h-[50%] md:p-10 p-6
                 bottom-0 right-0'>
                  <SubHeading text='OUR CATEGORIES' classname='text-[12px]'/>
                  <h1 className='font-play text-[22px] font-bold mb-4 tracking-tight'>Find The Product Here!</h1>
                  <Link href='/product'><Button label='SEE PRODUCTS' classname='bg-green text-white font-bold
                  text-[12px]'/></Link>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Category