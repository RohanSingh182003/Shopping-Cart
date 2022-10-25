import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
<footer className="p-4 text-white shadow md:px-6 bg-secondary">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="block text-sm  sm:text-center"> <Link to="/" className="hover:underline text-lg font-semibold">Ecommerce</Link>© 2022. All Rights Reserved.
    </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm  hover: sm:mb-0">
            <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline md:mr-6">Contact</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline">Feedback</Link>
            </li>
        </ul>
    </div>
</footer>

  )
}

export default Footer