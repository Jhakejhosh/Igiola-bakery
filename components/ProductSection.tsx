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
    const [activeCategory, setActiveCategory] = useState<string>(categories[0])

    const filterCategory = (category:string) => {
        if (category === "All") {
            return setProducts(productData)
        }
        const productCategorised = productData.filter(p => p.product_category === category)
        setProducts(productCategorised)
        setActiveCategory(category)
    }

    


  return (
    <div className='px-4 md:px-16 lg:px-42 pb-10 md:pb-16 tracking-widest font-lato relative'>
        <div>
            <div className='text-center'>
                <SubHeading text='OUR SHOP' classname='flex justify-center items-center text-[12px]'/>
                <h1 className='font-play font-bold tracking-normal mb-5 text-[22px]
                    md:text-3xl'>Explore Everything Here</h1>
            </div>
            <div className='lg:flex justify-between'>

                 {/****** category for large screen *****/}
                <div className='hidden lg:block'>
                    <h2 className='font-play font-bold tracking-normal text-[20px]
                    my-3'>Categories</h2>
                    <div>
                        {
                            categories.map((c, index) => {return(
                                <p key={index} className={`${activeCategory===c&&"text-[16px] font-extrabold"}
                                    flex items-center gap-3 py-3 duration-300
                                font-medium cursor-pointer
                                hover:text-[16px] ease-in-out hover:font-bold`} onClick={()=>filterCategory(c)}>
                                    <span className='text-green'><HiArrowLongRight/></span>
                                    {c}
                                </p>
                            )})
                        }
                    </div>
                </div>

                {/****** category for small and tablet screen ****/}
                <div className='block lg:hidden'>
                    <div className='flex justify-between items-center mb-4'>
                        {categories.map((c, index) => {
                            return (
                                <p key={index} className={`${activeCategory===c&&'font-bold text-green border-b-2 border-green'}
                                     p-2 font-normal`} onClick={()=>filterCategory(c)}>{c}</p>
                            )
                        })}
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