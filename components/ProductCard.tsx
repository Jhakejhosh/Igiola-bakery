import { ProductType } from '@/dummyData/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Naira } from '@/utils/nairaSymbol'
import Button from './Button'

interface ProductCardType {
    product: ProductType[]
}

const ProductCard = ({product}:ProductCardType) => {
  return (
    <div className='md:grid md:grid-cols-4 grid grid-cols-2 gap-3 md:gap-10 pt-4'>
        {
                    product.map(p => {
                        return (
                            <div key={p.id} className='bg-gray-50 shadow-md p-2 text-center'>
                                <span></span>
                                <figure className='h-35 relative flex justify-center items-center'>
                                    <Image src={p.product_img} alt={p.product_name} width={100}/>
                                </figure>
                                <Link href={`/product/${p.id}`} className='text-center'>
                                    <h2 className='font-medium py-3'>{p.product_name}</h2>
                                    <p className='font-bold pb-3'><Naira/>{p.price}</p>
                                </Link>
                                <Link href='tel:=2348064204567'><Button label='CALL TO ORDER' classname='bg-green
                                text-white text-[10px]'/></Link>
                            </div>
                        )
                    })
                }
    </div>
  )
}

export default ProductCard