import { useState } from 'react';
import logo from '../assets/logo_car.svg'

export const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-900 bg-opacity-20 fixed w-full z-20 top-0 start-0 border-b border-gray-600 backdrop-blur-md backdrop-filter">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-white">Ritik Portfolio</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setOpen(!open)}>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
        </div>
        <div className={`${open? null : "hidden" } w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:px-10">
            {/* <li>
              <a href="#" className="block py-2 px-3 text-blue-500 rounded md:p-0" aria-current="page">Travel</a>
            </li> */}
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-blue-500 md:p-0">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-blue-500 md:p-0">Projects</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-blue-500 md:p-0">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}