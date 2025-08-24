import Banner from '@/components/Banner'
import ProductSection from '@/components/ProductSection'
import React from 'react'

const product = () => {
  return (
    <div>
      <Banner heading='Bakery Products' subHeading='Explore All Our Bakery Products'/>
      <ProductSection/>
    </div>
  )
}

export default product