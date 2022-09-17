import React, { useContext, useRef, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';


const Navbar = () => {
    const [toggleCart, setToggleCart] = useState(false)
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
        <h2 className='text-center text-2xl text-violet-500 font-semibold mx-2'>Ecommerce</h2>
        {/* cart */}
        <div className='border-2 p-1 rounded-full border-violet-500 mx-2 relative'>
            <AiOutlineShoppingCart  onClick={()=>setToggleCart(!toggleCart)} className='text-2xl text-violet-500 cursor-pointer'/>
            <div className='absolute w-4 text-center bg-green-500 rounded-full text-xs -top-1 -right-1'>
            <p className='text-xs text-white font-semibold '>{props.state.length}</p>
            </div>
            {/* cart overflow  */}
            {toggleCart && <div className='absolute w-64 right-0 top-0 bg-violet-500 rounded-md py-8 px-2 max-h-[90vh] overflow-y-scroll scrollbar-hide'>
            <ImCross onClick={()=>setToggleCart(!toggleCart)} className='text-xl text-white absolute right-2 top-2 cursor-pointer'/>
            <p className='text-center pb-2 text-3xl font-semibold text-cyan-50 border-b'>Cart</p>
            {/* cart items */}
            {props.state.map((item)=>{ 
                return   <div className='border p-2 rounded-md my-2'>
                <p className='text-gray-200 font-semibold'>{item.title}</p>
                <p className='text-gray-300 font-bold text-xl'>${item.price}</p>
                <div className='w-full h-14 flex items-center justify-center p-2'>
                <div className='h-full w-32  flex items-center justify-evenly'>
                    <div className='w-8 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer'><p className='text-2xl text-center text-white font-bold'>+</p></div>
                    <p className='text-2xl text-cyan-50'>{item.qty}</p>
                    <div className='bg-red-500 w-8 rounded-full hover:bg-red-600 cursor-pointer'><p className='text-2xl text-center text-white font-bold'>-</p></div>
                </div>
                </div>
                <p className='text-center w-full p-2 text-white bg-red-500 rounded-md hover:bg-red-600 cursor-pointer'>Remove</p>
            </div>})}
            </div>}
        </div>
        {/* sidebar options */}
        <div ref={ref} className='absolute h-[100vh] w-56 bg-violet-500 top-0 lg:top-16 text-white left-0 transform transition-transform -translate-x-full lg:translate-x-0 z-10'>
            <ImCross onClick={toggleSidebar} className='text-xl text-white absolute right-4 top-6 cursor-pointer lg:hidden'/>
        </div>
    </div>
  )
}

export default Navbar