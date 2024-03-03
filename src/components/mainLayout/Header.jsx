import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between items-center px-10 py-[17px] bg-blue '>
      <div className="logo">
        <h4 className='font-bold text-2xl text-white'>didpool</h4>
      </div>
      <nav>
        <ul className='flex gap-8'>
          <li><Link to={"/about"} className='text-white font-normal text-base'>About us</Link></li>
          <li><Link to={"/products"} className='text-white font-normal text-base'>Products</Link></li>
          <li><Link to={"/features"} className='text-white font-normal text-base'>Features</Link></li>
          <li><Link to={"/our-blog"} className='text-white font-normal text-base'>Our blog</Link></li>
          <li><Link to={"/pricing"} className='text-white font-normal text-base'>Pricing</Link></li>
        </ul>
      </nav>
      <div className="btns">
        <Link to={"/signin"} className='px-4 py-2.5 me-3 border border-white inline-block bg-white text-blue font-normal text-[14px] rounded-lg'>Sign up</Link>
        <Link to={"/signup"} className='px-4 py-2.5 border border-indigo inline-block bg-indigo text-white font-normal text-[14px] rounded-lg'>Log in</Link>
      </div>
    </header>
  )
}

export default Header