import React from "react";
import {Link, NavLink} from 'react-router-dom'

function Header () {


    return ( 
    <header className="shadow sticky top-0 z-50">
        <nav className="bg-white  px-4 lg:px-6 py-2.5 ">
            {/* main wrapper logo and links */}
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl" >
                <Link to="/" >
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulg_VmvJwBAjkjzVRTEgFNUQp-21_OXnV8hYm2XuFSPOmapSAwGm-mmTpQRfHO1zabKk&usqp=CAU" 
                     className="mr-3 h-10 hover:scale-125 transition-transform duration-300 ease-in-out "
                     alt="logo" />
                </Link>
                <div>
                    <ul className="flex md:gap-6 gap-3 text-sm item-center font-medium ">
                        <li>
                            <NavLink to="/"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200  ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out" :"text-gray-700"} hover:text-indigo-600`}>
                               Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out":"text-gray-700"} hover:text-indigo-600`}>
                               About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out":"text-gray-700"} hover:text-indigo-600`}>
                               Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                            className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-indigo-600 border-b-2 border-indigo-600 hover:scale-110 transition-transform duration-300 ease-in-out":"text-gray-700"} hover:text-indigo-600`}>
                               Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
                  
        </nav>
    
    </header>
     )
}

export default  Header;