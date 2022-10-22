import React from 'react'

const Footer = () => {
  return (
    
<footer className="p-4 text-white shadow md:px-6 bg-secondary">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="block text-sm  sm:text-center"> <a href="/" className="hover:underline text-lg font-semibold">Ecommerce</a>© 2022. All Rights Reserved.
    </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm  hover: sm:mb-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline md:mr-6">Contact</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Feedback</a>
            </li>
        </ul>
    </div>
</footer>

  )
}

export default Footer