'use client'

import React, { useState } from 'react'
import SubHeading from './SubHeading'
import { productData, ProductType } from '@/dummyData/data'
import ProductCard from './ProductCard'
import { HiArrowLongRight } from 'react-icons/hi2'

const ProductSection = () => {

    const [products, setProducts] = useState<ProductType[]>(productData)

    const product_categories = new Set(productData.map(p => p.product_category))
    const categories = ["All", ...product_categories]

    


  return (
    <div className='px-4 md:px-16 lg:px-42 pb-10 md:pb-16 tracking-widest font-lato relative'>
        <div>
            <div className='text-center'>
                <SubHeading text='OUR SHOP' classname='flex justify-center items-center'/>
                <h1 className='font-play font-bold tracking-normal mb-5 text-[22px]
                    md:text-3xl'>Explore Everything Here</h1>
            </div>
            <div className='lg:flex justify-between'>
                <div className='hidden lg:block'>
                    <h2 className='font-play font-bold tracking-normal text-[20px]
                    my-3'>Categories</h2>
                    <div>
                        {
                            categories.map((c, index) => {return(
                                <p key={index} className='flex items-center gap-3 py-3 duration-300
                                font-medium cursor-pointer hover:text-[16px] ease-in-out hover:font-bold'>
                                    <span className='text-green'><HiArrowLongRight/></span>
                                    {c}
                                </p>
                            )})
                        }
                    </div>
                </div>
                <div className=''>
                    <ProductCard product={products}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductSection