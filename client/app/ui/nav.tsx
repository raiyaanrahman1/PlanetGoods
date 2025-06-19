import Image from 'next/image'
import React from 'react'
import { playfair } from './fonts'
import Link from 'next/link'
import SearchBar from './search-bar'

function Nav() {
    return (
        <nav className="bg-[#5d870e] h-16 flex">
            <div className="flex w-14 md:w-auto p-4 pl-6 justify-center" >
                <Link className='flex justify-center items-center gap-2' href='/'>
                    <div className='relative h-full aspect-[638/844]'>
                        <Image
                            src='/logo.png'
                            alt='PlanetGoods logo of a white leaf'
                            fill={true}
                        />
                    </div>
                    <div className={`${playfair.className} antialiased text-white text-2xl hidden md:block`}>PlanetGoods</div>
                </Link>
            </div>
            <SearchBar />
            <div className='flex flex-grow justify-evenly font-bold'>
                <Link href='/' className='flex items-center justify-center w-full h-full border-white hover:border'> Login </Link>
                <Link href='/' className='flex items-center justify-center w-full h-full border-white hover:border'> Orders </Link>
                <Link href='/' className='flex items-center justify-center w-full h-full border-white hover:border p-3'> 
                    <div className='relative h-full aspect-[100/100]'>
                        <Image
                            src='/shopping-cart-icon.png'
                            alt='Shopping Cart Icon'
                            fill={true}
                        />
                    </div>
                </Link>
            </div>
            {/* <div className='bg-green-700 h-8'>
                hello
            </div> */}
        </nav>
    )
}

export default Nav