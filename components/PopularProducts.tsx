import { productData } from '@/dummyData/data'
import Image from 'next/image'
import React from 'react'

const PopularProducts = () => {
  return (
    <div>
        {
            productData.map(p => {
                return (
                    <div key={p.id}>
                        hello
                    </div>
                )
            })
        }
    </div>
  )
}

export default PopularProducts