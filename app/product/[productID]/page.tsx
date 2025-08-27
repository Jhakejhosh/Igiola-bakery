"use client"

import React, { useState } from 'react'
import { productData } from '@/dummyData/data'
import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Naira } from '@/utils/nairaSymbol'

const page = () => {
    const {productID} = useParams()
    const product = productData.find(p => p.id.toString() === productID)

    const [selectedImg, setSelectedImg] = useState<StaticImageData|undefined>(product!.product_img)
    const [activeImg, setActiveImg] = useState<StaticImageData|undefined>(product!.other_img[0])

    const handleClickedImg = (image: StaticImageData) => {
      setSelectedImg(image)
      setActiveImg(image)
    }


  return (
    <div className='px-4 md:px-16 lg:px-42 py-10 md:py-16 tracking-widest font-lato relative'>
      <div className='mt-20 lg:flex lg:w-full lg:px-16 md:px-30'>
        <>
          {
           product?.other_img.length === 3 && (
            <div className='md:flex block w-full gap-4'>
              <div className='flex justify-center items-center h-80'>
                <Image src={selectedImg!} alt={product.product_name} width={300}/>
              </div>
              <div className='flex items-center justify-center gap-10 md:flex-col'>
                {
                  product.other_img.map((img, index) => {
                    return (
                      <div className={`cursor-pointer p-2
                      ${activeImg===img && 'border-2 border-green'}`} key={index} onClick={()=>handleClickedImg(img)}>
                        <Image src={img} alt='img' width={50}/>
                      </div>
                    )
                  })
                }
              </div>
            </div> 
           )
          }
        </>
        <div className='w-full mt-6 lg:mt-0'>
          <h1 className='font-bold text-2xl'>{product?.product_name}</h1>
          <p>{product?.product_category}</p>
          <p><Naira/>{product?.price}</p>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default page