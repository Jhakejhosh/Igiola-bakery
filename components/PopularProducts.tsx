import { special_products } from '@/dummyData/data'
import React from 'react'
import SubHeading from './SubHeading'
import ProductCard from './ProductCard'

const PopularProducts = () => {
  return (
    <div className='px-4 md:px-16 lg:px-42 pb-10 md:pb-16 tracking-widest font-lato relative'>
        <div>
            <div>
                <SubHeading text='SHOP' classname='flex justify-center items-center text-[12px]'/>
                <h1 className='font-bold font-play text-2xl tracking-normal pb-4 text-center'>Shop Our Popular products</h1>
            </div>
            <ProductCard product={special_products}/>
        </div>
    </div>
  )
}

export default PopularProducts