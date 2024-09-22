"use client"
import Link from 'next/link';
import { Router } from 'next/router';
import React from 'react'
import { usePathname } from 'next/navigation';

  const NavBar = ({firstPage, secondPage, firstLink, secondLink}) => {
    const pathname = usePathname()
  return (
    <div className='flex justify-center'>
        <ul className='flex gap-12 justify-center w-[500px] bg-gray-600 text-white p-6 rounded-full mt-7 font-bold'>
            <Link  href="/"><li>Home</li></Link>
            <Link className={pathname === firstLink ? "underline underline-offset-auto decoration-black text-black":""} href={firstLink}><li>{firstPage}</li></Link>
            <Link className={pathname === secondLink ? "underline underline-offset-auto decoration-black text-black":""} href={secondLink}><li>{secondPage}</li></Link>
        </ul>
    </div>   
  )
}

export default NavBar;