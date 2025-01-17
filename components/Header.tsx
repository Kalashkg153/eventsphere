import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/images/EventSphere..png'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <div className='border-b'>
    <div className='flex flex-col lg:flex-row items-center gap-4 p-4'>
        {/* Logo Section */}
        <div className='flex items-center justify-between w-full lg:w-auto'>
            <Link href="/" className='font-bold shrink-0'>
                <Image src={logo} alt='logo' width={100} height={100} className='w-24 lg:w-28' />
            </Link>

            {/* Mobile User Actions */}
            <div className='lg:hidden'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>

        {/* Search Bar Section */}
        <div className="w-full lg:w-full 2xl:w-4/5 order-none lg:order-none">
            <Searchbar />
        </div>

        {/* Desktop User Actions */}
        <div className="hidden lg:flex items-center gap-3 ml-3">
            <SignedIn>
                <div className="flex items-center gap-3">
                    <Link href="/seller">
                        <button className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                            Sell Tickets
                        </button>
                    </Link>
                    <Link href="/tickets">
                        <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                            My Tickets
                        </button>
                    </Link>
                    <UserButton />
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
        </div>

        {/* Mobile/Tablet Sell & My Tickets Buttons */}
        <div className="lg:hidden flex justify-center gap-3 w-full">
            <SignedIn>
                <Link href="/seller" className="flex-1">
                    <button className="w-full bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition">
                        Sell Tickets
                    </button>
                </Link>
                <Link href="/tickets" className="flex-1">
                    <button className="w-full bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                        My Tickets
                    </button>
                </Link>
            </SignedIn>
        </div>
    </div>
</div>

  )
}

export default Header