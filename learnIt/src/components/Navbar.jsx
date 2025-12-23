import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/idx.jsx'
import {Menu , X} from 'lucide-react';

const Navbar = () => {
    const [isMobileOpen , setIsMobileOpen] = useState(false);

    const toggleNav = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    return (
        <nav className='sticky top-0 z-50 backdrop-blur-lg py-3 border-b border-neutral-700/80'> 
            <div className='px-4 mx-auto text-md relative'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center shrink-0'>  
                        <img className="hover:cursor-pointer h-10 w-8 mr-2" src={logo} alt="logo" />
                        <span className='hover:cursor-pointer text-xl tracking-wide'>Project</span>
                    </div>

                    <ul className='nav-item hidden lg:flex ml-13 space-x-12 mr-6'>
                        {navItems.map((item , idx) => (
                            <li key={idx}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button className='hover:cursor-pointer' onClick={toggleNav}>
                            {isMobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {isMobileOpen && (
                    <div className='nav-item fixed right-0 z-20 bg-neutral-900 w-full p-13 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item , idx) => (
                                <li key={idx} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>  
    )
}

export default Navbar
