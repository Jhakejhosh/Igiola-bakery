import { special_products, productData } from '@/dummyData/data'
import React from 'react'
import SubHeading from './SubHeading'
import ProductCard from './ProductCard'

const PopularProducts = () => {

  const fourProducts = productData.slice(0, 4)

  return (
    <div className='px-4 md:px-16 lg:px-42 pb-10 md:pb-16 tracking-widest font-lato relative'>
        <div>
            <div>
                <SubHeading text='SHOP' classname='flex justify-center items-center text-[12px]'/>
                <h1 className='font-bold font-play text-2xl tracking-normal pb-4 text-center'>Shop Our Popular products</h1>
            </div>
            <ProductCard product={fourProducts}/>
        </div>
    </div>
  )
}

export default PopularProducts