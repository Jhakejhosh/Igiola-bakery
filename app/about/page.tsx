import AboutSection from '@/components/AboutSection'
import Banner from '@/components/Banner'
import Certificate from '@/components/Certificate'
import React from 'react'

const ABOUT = () => {
  return (
    <div> 
      <Banner heading='About Us' subHeading='Meet British Butter Bakery Here!'/>
      <AboutSection/>
      <Certificate/>
    </div>
  )
}

export default ABOUT