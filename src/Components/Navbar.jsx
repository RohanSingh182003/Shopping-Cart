import React, { useContext, useRef, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const ref = useRef()
    const toggleSidebar = () => {
        if(ref.current.classList.contains('-translate-x-full')){
            ref.current.classList.remove('-translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if(ref.current.classList.contains('translate-x-0')){
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('-translate-x-full')
        }
    }
    const {state , dispatch} = useContext(AppContext)
  return (
    <div className='sticky top-0 bg-white'>
        <div className='px-2 flex justify-between lg:justify-around items-center  h-[10vh]'>
        <Link to='/' className='text-center text-2xl text-violet-500 font-semibold mx-2'>Ecommerce</Link>
        {/* cart */}
        <Link to='/cart'><div className='border-2 p-1 rounded-full border-violet-500 mx-2 relative'>
            <AiOutlineShoppingCart className='text-2xl text-violet-500 cursor-pointer'/>
            <div className='absolute w-4 text-center bg-green-500 rounded-full text-xs -top-1 -right-1'>
            {state.cart.length>0 && <p className='text-xs text-white font-semibold '>{state.cart.length}</p>}
            </div>
        </div>
        </Link>
        </div>
        <div className='min-w-96'>
            <ul className='w-full flex flex-wrap justify-evenly items-center border py-2 text-violet-500'>
                <Link to={'/'} className='hover:text-violet-700 cursor-pointer m-2 md:m-0'>Home</Link>
                <Link to={`/men's clothing`} className='hover:text-violet-700 cursor-pointer m-2 md:m-0'>Men's Fashion</Link>
                <Link to={`/women's clothing`} className='hover:text-violet-700 cursor-pointer m-2 md:m-0'>Women's Fashion</Link>
                <Link to={'/electronics'} className='hover:text-violet-700 cursor-pointer m-2 md:m-0'>Electronics</Link>
                <Link to={'/jewelery'} className='hover:text-violet-700 cursor-pointer m-2 md:m-0'>Jewelery</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar