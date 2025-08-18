import hotdog1 from '@/public/product1.png'
import hotdog2 from '@/public/product2.png'
import hotdog3 from '@/public/product3.png'
import cake1 from '@/public/product13.png'
import cake2 from '@/public/product14.png'
import cake3 from '@/public/product15.png'
import { StaticImageData } from 'next/image'

export interface ProductType {
    id: number,
    product_name: string,
    product_category: string,
    price: number,
    description: string,
    product_img: StaticImageData,
    other_img: StaticImageData[],
}

export const productData: ProductType[]= [
    {
        id: 1,
        product_name: "Hotdog",
        product_category: "Pastry",
        price: 500,
        description: "",
        product_img: hotdog1,
        other_img: [hotdog1, hotdog2, hotdog3]
    },
    {
        id: 2,
        product_name: "Chocolate Cake",
        product_category: "Cakes and cup cakes",
        price: 10000,
        description: "",
        product_img: cake1,
        other_img: [cake1, cake2, cake3]
    }
]