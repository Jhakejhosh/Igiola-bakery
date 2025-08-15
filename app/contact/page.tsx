'use client'

import Banner from '@/components/Banner'
import React from 'react'
import dynamic from 'next/dynamic'
import ContactSection from '@/components/ContactSection'

const Map = dynamic(() => import ('@/components/Map'), {ssr: false})

const contact = () => {
  return (
    <div>
      <Banner heading='Contact Us' subHeading='You can reach out to us here'/>
      <ContactSection/>
      <Map/>
    </div>
  )
}

export default contact