"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when clicking outside (optional for better UX)
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isOpen && target && !target.closest('#mobileMenu')) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isOpen]);

    return (
        <header className=" fixed w-full  bg-white  px-4 py-1 md:p-2 z-20  ">
            <div className='flex  items-center justify-between max-w-7xl mx-auto'>
                {/* Logo */}
                <div className="text-black text-xl md:text-3xl font-bold">
                    <Link href="/" className=" text-[#0d9488] font-bold" >
                        {/* UniBridge Learning */}
                        <Image src="/images/logo.png" alt="logo" height={500} className=' h-[50px] xl:h-[60px] w-[60px] xl:w-[70px]' width={500} />
                    </Link>

                </div>

                {/* Desktop Navigation Links */}
                <div className=' flex gap-x-4'>

                    <div className="hidden md:flex text-lg text-[#1f2937] items-center space-x-8  font-medium">
                        <Link href="/" className="text-[#1f2937] hover:text-[#0d9488] duration-500 ">
                            Home
                        </Link>
                        <Link href="/about" className="text-[#1f2937] hover:text-[#0d9488] duration-500 ">
                            About
                        </Link>
                        <Link href="/courses" className="text-[#1f2937]  hover:text-[#0d9488] duration-500  ">
                            Courses
                        </Link>
                        <Link href="/contact" className="text-[#1f2937]  hover:text-[#0d9488] duration-500 ">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden text-[#1f2937] "
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent click event from closing immediately
                            toggleMenu();
                        }}
                    >
                        {isOpen ? '✖' : '☰'}
                    </button>



                </div>


                {/* Mobile Navigation Dropdown with Smooth Transition */}
                <nav
                    id="mobileMenu"
                    className={`absolute top-14 pb-5 px-5 left-0 w-full z-50 bg-white dark:bg-black-pearl md:hidden transform  rounded-b-2xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                        }`}
                >
                    <div className="flex md:hidden flex-col text-[#1f2937] items-center space-y-4 py-5 text-lg font-medium ">
                        <Link href="/" className="text-[#1f2937]  hover:text-[#0d9488] duration-500 ">
                            Home
                        </Link>
                        <Link href="/about" className="text-[#1f2937]  hover:text-[#0d9488] duration-500 ">
                            About
                        </Link>
                        <Link href="/courses" className="text-[#1f2937]  hover:text-[#0d9488] duration-500 ">
                            Courses
                        </Link>
                        <Link href="/contact" className="text-[#1f2937]  hover:text-[#0d9488] duration-500 ">
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>


        </header>
    );
};

export default Header;
