"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when clicking outside (optional for better UX)
    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (!event.target.closest('#mobileMenu') && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [isOpen]);

    return (
        <header className="    p-4 border-b-2 border-[#1f2937] ">
            <div className='flex  items-center justify-between max-w-7xl mx-auto'>
                {/* Logo */}
                <div className="text-black text-xl md:text-3xl font-bold">
                    <Link href="/" className=" text-black font-bold" >
                        UniBridge Learning
                    </Link>

                </div>

                {/* Desktop Navigation Links */}
                <div className=' flex gap-x-4'>

                    <div className="hidden md:flex text-[#1f2937] items-center space-x-8 text-base font-medium ">
                        <Link href="/" className="text-[#1f2937]">
                            Home
                        </Link>
                        <Link href="#about" className="text-[#1f2937]">
                            About
                        </Link>
                        <Link href="#courses" className="text-[#1f2937]">
                            Courses
                        </Link>
                        <Link href="#contact" className="text-[#1f2937]">
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
                    className={`absolute top-16 pb-5 px-5 left-0 w-full z-50 bg-white dark:bg-black-pearl md:hidden transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                        }`}
                >
                    <div className="flex md:hidden flex-col text-[#1f2937] items-center space-y-4 py-5 text-lg font-medium ">
                        <Link href="#about" className="text-[#1f2937]">
                            Home
                        </Link>
                        <Link href="#work" className="text-[#1f2937]">
                            About
                        </Link>
                        <Link href="#testimonials" className="text-[#1f2937]">
                            Courses
                        </Link>
                        <Link href="#contact" className="text-[#1f2937]">
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>


        </header>
    );
};

export default Header;
