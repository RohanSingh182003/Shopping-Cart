import React from 'react'

const Footer = () => {
  return (
    
<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 text-violet-700 border-t">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="block text-sm text-violet-500 sm:text-center"> <a href="/" className="hover:underline text-lg font-semibold">Ecommerce</a>© 2022. All Rights Reserved.
    </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-violet-500 hover:text-violet-700 sm:mb-0">
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
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
</footer>

  )
}

export default Footer