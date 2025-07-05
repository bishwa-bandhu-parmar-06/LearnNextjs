import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-indigo-600 flex justify-between px-4 md:px-8 items-center text-white sticky top-0 z-50 shadow-md'>
      <div className='logo font-bold text-lg md:text-xl cursor-pointer'>
        <Link href="/">BitLinks</Link>
      </div>
      
      {/* Mobile Menu Button (Hamburger) */}
      <button className='md:hidden focus:outline-none cursor-pointer'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Desktop Navigation */}
      <ul className='hidden md:flex justify-center gap-6 items-center'>
        <li className='hover:text-indigo-200 transition-colors cursor-pointer'>
          <Link href="/">Home</Link>
        </li>
        <li className='hover:text-indigo-200 transition-colors cursor-pointer'>
          <Link href="/about">About</Link>
        </li>
        <li className='hover:text-indigo-200 transition-colors cursor-pointer'>
          <Link href="/shorten">Shorten</Link>
        </li>
        <li className='hover:text-indigo-200 transition-colors cursor-pointer'>
          <Link href="/contact">Contact</Link>
        </li>
        <li className='flex gap-3 ml-4'>
          <Link href="/shorten">
            <button className='bg-white text-indigo-600 hover:bg-indigo-50 shadow-md px-4 py-2 rounded-md font-semibold transition-colors cursor-pointer'>
              Try Now
            </button>
          </Link>

          <Link href="/github">
            <button className='bg-white text-indigo-600 hover:bg-indigo-50 shadow-md px-4 py-2 rounded-md font-semibold transition-colors cursor-pointer'>
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar