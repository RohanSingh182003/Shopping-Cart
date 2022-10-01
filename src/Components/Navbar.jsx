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
    const props = useContext(AppContext)
  return (
    <div className='relative px-2 flex justify-between lg:justify-around items-center border-b h-[10vh]'>
        <div onClick={toggleSidebar} className='lg:hidden'>
            <GiHamburgerMenu className='text-2xl text-violet-500 cursor-pointer mx-2'/>
        </div>
        <Link to='/' className='text-center text-2xl text-violet-500 font-semibold mx-2'>Ecommerce</Link>
        {/* cart */}
        <Link to='/cart'><div className='border-2 p-1 rounded-full border-violet-500 mx-2 relative'>
            <AiOutlineShoppingCart className='text-2xl text-violet-500 cursor-pointer'/>
            <div className='absolute w-4 text-center bg-green-500 rounded-full text-xs -top-1 -right-1'>
            {props.state.cart.length>0 && <a className='text-xs text-white font-semibold '>{props.state.cart.length}</a>}
            </div>
        </div>
        </Link>
        {/* sidebar options */}
        <div ref={ref} className='absolute h-[100vh] lg:h-[90vh] w-56 bg-violet-500 top-0 lg:top-16 text-white left-0 transform transition-transform -translate-x-full lg:translate-x-0 z-10'>
            <ImCross onClick={toggleSidebar} className='text-xl text-white absolute right-4 top-6 cursor-pointer lg:hidden'/>
        </div>
    </div>
  )
}

export default Navbar