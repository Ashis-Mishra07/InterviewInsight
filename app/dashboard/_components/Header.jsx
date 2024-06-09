"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

  const path = usePathname();
  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
      <ul className='hidden md:flex gap-6'>
        <Link href={"/dashboard"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer 
            ${path == '/dashboard' && 'text-primary font-bold'}
            `}>DASHBOARD
          </li>
        </Link>
        <Link href={"/dashboard/questions"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer  
            ${path == '/dashboard/questions' && 'text-primary font-bold'}
            `}>LEARN CONCEPTS
          </li>
        </Link>
        <Link href={"/dashboard/upgrade"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer  
            ${path == '/dashboard/upgrade' && 'text-primary font-bold'}
            `}>UPGRADE
          </li>
        </Link>
        <Link href={"/dashboard/how"}>
          <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer  
            ${path == '/dashboard/how' && 'text-primary font-bold'}
            `}>REVIEWS
          </li>
        </Link>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header