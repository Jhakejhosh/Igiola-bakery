'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/bbb-logo.png'
import { usePathname } from 'next/navigation'
import { SlBag } from 'react-icons/sl'
import { GoPerson } from 'react-icons/go'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    interface NavMenuType {
        id: number,
        menu: string,
        href: string
    }

    const navMenu: NavMenuType[] = [
        {
            id: 1,
            menu: "ABOUT US",
            href: '/about'
        },
        {
            id: 2,
            menu: "PRODUCTS",
            href: '/product'
        },
        {
            id: 3,
            menu: "CONTACT",
            href: '/contact'
        }
    ]

    const pathname = usePathname()

    const [openNavBar, setOpenNavBar] = useState(false)

  return (
    <div className='font-lato fixed z-50 min-w-full shadow-md'>
        <div className='bg-white md:px-16 lg:px-42 py-3 flex flex-col border-b-1 border-gray-300
        md:justify-between md:items-center md:flex-row text-center'>
            <p className='text-sm font-light'><b className='font-bold'>FREE DELIVERY</b> ON ALL PRODUCTS</p>
            <div className='hidden md:flex gap-4 text-sm'>
                <p className='border-r-3 border-brown px-4'>08064204567</p>
                <p>demo@gmail.com</p>
            </div>
        </div>
        <div className='bg-white md:px-16 lg:px-42 py-3 flex justify-between items-center px-3'>
            <Link href="/">
                <Image src={Logo} alt='Logo' width={70}/>
            </Link>
            <nav>
                <ul className='hidden md:flex justify-between items-center md:gap-6 lg:gap-12'>
                    {
                        navMenu.map(nav => {
                            const {id, href, menu} = nav
                            return (
                                <li key={id} className='tracking-widest'>
                                    <Link href={href} className={`${pathname === href && 'border-b-2 border-brown text-brown'}
                                        hover:text-brown py-3 md:text-md`}>
                                        {menu}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className='flex justify-between items-center text-2xl gap-4'>
               <SlBag className='cursor-pointer hover:text-brown'/> 
               <GoPerson className='cursor-pointer hover:text-brown'/>
               <span onClick={() => setOpenNavBar(!openNavBar)}>
                {openNavBar ? <AiOutlineClose className='cursor-pointer md:hidden'/> :
                <HiOutlineBars3 className='cursor-pointer md:hidden'/>}
               </span>
            </div>

            {/******MOBILE NAVIGATION BAR */}
            <div className={`md:hidden fixed bg-white right-0 top-[10%] z-50 w-full
            p-6 h-full ${openNavBar ? 'block' : "hidden"}`}>
                <ul>
                    {
                        navMenu.map(nav => {
                            const {menu, id, href} = nav
                            return(
                                <li key={id} className='font-lato tracking-widest text-[18px] border-b-1
                                border-gray-300 py-4 last:border-0' onClick={() => setOpenNavBar(false)}>
                                    <Link href={href}>{menu}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar