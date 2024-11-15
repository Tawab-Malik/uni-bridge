import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";






export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-[#111827] pb-9 md:pb-12  overflow-hidden">
                <div className="max-w-7xl mx-5 xl:mx-auto">
                    <div className="flex justify-between py-14 md:py-20   md:flex-row flex-col gap-x-14">
                        <div className="w-auto xl:w-[60%] ">
                            <div className="flex justify-center md:justify-start">
                            <Link href="/" className="">
                                <Image src="/images/logo.png" alt="logo" width="243" height="48" className="h-[130px] xl:h-[150px] w-auto"></Image>
                            </Link>
                            </div>
                           
                            <div className="flex gap-x-2 mt-10 ">
                                <Link href="#"><FaFacebookF className=" h-10 w-10 p-1.5 bg-white rounded-xl hover:text-white duration-500 hover:bg-[#0866FF] text-[#0866FF]" /></Link>
                                <Link href="#"><BiLogoInstagramAlt className=" h-10 w-10 p-1.5 bg-white rounded-xl hover:text-white duration-500 hover:bg-[#FC0077] text-[#FC0077]" /></Link>
                                <Link href="#"><FaXTwitter className=" h-10 w-10 p-1.5 bg-white rounded-xl hover:text-white duration-500 hover:bg-black text-black" /></Link>
                                <Link href="#"><RiLinkedinFill className=" h-10 w-10 p-1.5 bg-white rounded-xl hover:text-white duration-500 hover:bg-[#0A66C2] text-[#0A66C2]" /></Link>
                            </div>
                        </div>
                        <div className="flex gap-5 md:flex-row flex-col justify-between w-full pt-5 md:pt-0">

                            <div>
                                <h2 className="text-base xl:text-lg text-orange-500 font-semibold">Menu</h2>
                                <ul className="pt-5 text-sm  space-y-4">
                                    <li><Link className="hover:text-[#0D9488] text-sm xl:text-base text-white duration-300" href="/">Home</Link></li>
                                    <li><Link className="hover:text-[#0D9488] text-sm xl:text-base text-white duration-300" href="#about">About</Link>
                                    </li>
                                    <li><Link className="hover:text-[#0D9488] text-sm xl:text-base text-white duration-300" href="">Courses</Link>
                                    </li>
                                    <li><Link className="hover:text-[#0D9488] text-sm xl:text-base text-white duration-300" href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-base xl:text-lg text-orange-500 font-semibold">Contact</h2>
                                <ul className="pt-5 text-sm  space-y-4">
                                    <li>
                                        <p className="hover:text-[#0D9488] flex gap-x-2 text-sm xl:text-base text-white duration-300" > <IoLocationSharp className="h-6 w-6 text-orange-500"/> 123 Street, New York, USA</p></li>
                                    <li>
                                        <Link className="hover:text-[#0D9488] flex gap-x-2 text-sm xl:text-base text-white duration-300" href="tel:+447774068884"><MdPhone className="h-6 w-6 text-orange-500"/> +447774068884</Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-[#0D9488] text-sm flex gap-x-2 xl:text-base text-white duration-300" href="mailto:zaintariq6780@icloudl.com" target="_blank"><MdEmail className="h-6 w-6 text-orange-500"/> zaintariq6780@icloudl.com
                                    </Link>
                                    </li>

                                </ul>


                            </div>

                            <div>
                                <h2 className="text-base xl:text-lg text-orange-500 font-semibold">Help</h2>
                                <ul className="pt-5 text-sm  space-y-4">

                                    <li><Link className="hover:text-[#0D9488] text-sm xl:text-base text-white duration-300" href="">Terms &amp; Conditions</Link>
                                    </li>
                                    <li><Link className="hover:text-[#0D9488] text-sm xl:text-base text-white duration-300" href="">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <p className=" text-center text-orange-500 text-sm border-t border-opacity-35 border-white pt-5">Uni-Bridge ©{currentYear} All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
};