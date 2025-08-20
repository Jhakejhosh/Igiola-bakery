import hotdog1 from '@/public/product1.png'
import hotdog2 from '@/public/product2.png'
import hotdog3 from '@/public/product3.png'
import sausage1 from '@/public/product4.png'
import sausage2 from '@/public/product5.png'
import sausage3 from '@/public/product6.png'
import donut1 from '@/public/product7.png'
import donut2 from '@/public/product8.png'
import donut3 from '@/public/product9.png'
import jam_donut1 from '@/public/product10.png'
import jam_donut2 from '@/public/product11.png'
import jam_donut3 from '@/public/product12.png'
import cake1 from '@/public/product13.png'
import cake2 from '@/public/product14.png'
import cake3 from '@/public/product15.png'
import meat1 from '@/public/product16.png'
import meat2 from '@/public/product17.png'
import meat3 from '@/public/product18.png'
import family1 from '@/public/familyLoaf.png'
import { StaticImageData } from 'next/image'

export interface ProductType {
    id: number,
    product_name: string,
    product_category: string,
    price: number,
    weight?: number,
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
    },
    {
        id: 3,
        product_name: "Family Loaf",
        product_category: "Bread",
        price: 1500,
        weight: 800,
        description: "",
        product_img: hotdog1,
        other_img: [hotdog1, hotdog2, hotdog3]
    },
    {
        id: 4,
        product_name: "Sausage roll",
        product_category: "Pastry",
        price: 500,
        description: "",
        product_img: sausage1,
        other_img: [sausage1, sausage2, sausage3]
    },
    {
        id: 5,
        product_name: "Jumbo pack",
        product_category: "Bread",
        price: 2000,
        weight: 1,
        description: "",
        product_img: sausage1,
        other_img: [sausage1, sausage2, sausage3]
    },
    {
        id: 6,
        product_name: "Doughnut",
        product_category: "Pastry",
        price: 300,
        description: "",
        product_img: donut1,
        other_img: [donut1, donut2, donut3]
    },
    {
        id: 7,
        product_name: "Meat & Chicken pie",
        product_category: "Pastry",
        price: 700,
        description: "",
        product_img: meat1,
        other_img: [meat1, meat2, meat3]
    },
    {
        id: 8,
        product_name: "Jam Doughnut",
        product_category: "Pastry",
        price: 400,
        description: "",
        product_img: jam_donut1,
        other_img: [jam_donut1, jam_donut2, jam_donut3]
    }
]


export const special_products: ProductType[] = [
    {
        id: 1,
        product_name: "Family Loaf",
        product_category: "Bread",
        price: 1500,
        weight: 800,
        description: "",
        product_img: family1,
        other_img: [hotdog1, hotdog2, hotdog3]
    },
    {
        id: 2,
        product_name: "Doughnut",
        product_category: "Pastry",
        price: 300,
        description: "",
        product_img: donut1,
        other_img: [donut1, donut2, donut3]
    },
    {
        id: 3,
        product_name: "Hotdog",
        product_category: "Pastry",
        price: 500,
        description: "",
        product_img: hotdog1,
        other_img: [hotdog1, hotdog2, hotdog3]
    }
]