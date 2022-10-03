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
        <div ref={ref} className='absolute h-[100vh] lg:h-[90vh] w-56 bg-violet-500 top-0 lg:top-16 text-white left-0 transform transition-transform -translate-x-full lg:translate-x-0 z-10 flex flex-col items-center'>
            <ImCross onClick={toggleSidebar} className='text-xl text-white absolute right-4 top-6 cursor-pointer lg:hidden'/>
            
<h3 className="mb-4 font-semibold text-gray-900 dark:text-white text-3xl mt-14">Catagory</h3>
<ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-violet-200 dark:bg-violet-700 dark:border-violet-600 dark:text-white mt-8">
    <li className="w-full rounded-t-lg border-b border-violet-200 dark:border-violet-600">
        <div className="flex items-center pl-3">
            <input id="list-radio-license" type="radio" name="list-radio" className="w-4 h-4 text-purple-600 bg-violet-100 border-violet-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-violet-600 dark:border-violet-500"/>
            <label htmlFor="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">All Products</label>
        </div>
    </li>
    <li className="w-full rounded-t-lg border-b border-violet-200 dark:border-violet-600">
        <div className="flex items-center pl-3">
            <input id="list-radio-id" type="radio" name="list-radio" className="w-4 h-4 text-purple-600 bg-violet-100 border-violet-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-violet-600 dark:border-violet-500"/>
            <label htmlFor="list-radio-id" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Men's Clothing</label>
        </div>
    </li>   
    <li className="w-full rounded-t-lg border-b border-violet-200 dark:border-violet-600">
        <div className="flex items-center pl-3">
            <input id="list-radio-id-2" type="radio" name="list-radio" className="w-4 h-4 text-purple-600 bg-violet-100 border-violet-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-violet-600 dark:border-violet-500"/>
            <label htmlFor="list-radio-id-2" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Jewelery</label>
        </div>
    </li>
    <li className="w-full rounded-t-lg border-b border-violet-200 dark:border-violet-600">
        <div className="flex items-center pl-3">
            <input id="list-radio-millitary" type="radio" name="list-radio" className="w-4 h-4 text-purple-600 bg-violet-100 border-violet-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-violet-600 dark:border-violet-500"/>
            <label htmlFor="list-radio-millitary" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Electronics</label>
        </div>
    </li>
    <li className="w-full rounded-t-lg border-b border-violet-200 dark:border-violet-600">
        <div className="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" name="list-radio" className="w-4 h-4 text-purple-600 bg-violet-100 border-violet-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-violet-600 dark:border-violet-500"/>
            <label htmlFor="list-radio-passport" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Women's Clothing</label>
        </div>
    </li>
</ul>

        </div>
    </div>
  )
}

export default Navbar