import React from 'react'
import Button from './Button'
import Link from 'next/link'

const ContactSection = () => {
  return (
    <div className='px-4 md:px-16 lg:px-42 pb-10 md:pb-16 tracking-widest font-lato relative'>
        <div className='text-center lg:flex lg:text-start'>
            <div className='lg:w-full pb-12'>
                <h1 className='font-bold font-play text-2xl tracking-normal pb-4'>Connect With us</h1>
                <p className='font-normal'>We&apos;re here to help</p>
            </div>
            <div className='lg:w-full pb-12'>
                <h1 className='font-play font-bold text-xl tracking-normal pb-4'>Get In Touch</h1>
                <p className='font-normal pb-4'>Need to place an order? Want an advice on a particular Product?
                    Call on us, we can help
                </p>
                <Link href='https://wa.me/2348064204567'>
                    <Button label='CHAT' classname='bg-green text-white text-[12px]'/>
                </Link>
            </div>
            <div className='lg:w-full'>
                <p className='pb-3'><b className='font-bold'>Address:</b> 14 Taiwo Street, Off Ago Palace Way, Okota, Lagos</p>
                <p className='pb-3'><b className='font-bold'>Tel:</b><Link href='tel:=2348064204567' className='border-b-1
                border-black'> 08064204567</Link></p>
                <p className='pb-3'><b className='font-bold'>Email:</b><Link href='mailto:demo@gmail.com' className='border-b-1
                border-black'> demo@gmail.com</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ContactSection