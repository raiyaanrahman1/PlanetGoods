'use client'
import React from 'react'
import Image from 'next/image'

export default function SearchBar() {
    return (
        <div className='w-[70%] md:w-[60%] p-4'>
            <div className='bg-white h-full w-full rounded-full flex'>
                <input
                    type="text"
                    className='w-full pl-4 rounded-l-full focus:outline-gray-400 text-black'
                    placeholder='Search PlanetGoods...'
                />
                <div className="w-[0%] border-gray-400 border"></div>
                <button className='w-12 rounded-r-full p-[4px] pl-[0px] flex justify-center' onClick={() => console.log('click')}>
                    <div className='relative h-full aspect-[227/222]'>
                        <Image src='/search-icon.png' alt='search icon' fill={true}/>
                    </div>
                </button>
            </div>
        </div>
    )
}
