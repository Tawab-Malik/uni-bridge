"use client"
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
// import Image from "next/image";
// import Link from "next/link";

import React from "react";


export default function Contactus() {

    return (
        <>
            <section className=" text-zuccini bg-white pt-24">
                <div className=" flex flex-col-reverse md:flex-row max-w-7xl mx-auto ">
                    {/* left div */}
                    <div className=" pb-10 pt-16  md:py-10 lg:!py-20 px-5 md:px-8 lg:!pr-20 w-full">
                        <h3 className=" text-2xl md:text-3xl lg:text-5xl text-blue-chill font-bold text-center">Contact Us</h3>
                        <p className=" text-sm md:text-base lg:text-xl text-zuccini pt-3 lg:pt-6  text-center lg:px-0">
                            Send us a message if you have any questions about working with ScalePass.
                        </p>


                        {/* form */}
                        <form action="" className=" mt-20 border-2  border-blue-chill rounded-2xl p-5 ">


                            {/* input div */}
                            <div className="flex flex-col md:flex-row  gap-4 w-full">
                                {/*First Name */}
                                <div className=" bg-none   rounded-xl  w-full">
                                    <label htmlFor="first name" className=" text-base md:text-sm xl:text-xl font-semibold">First Name <span className=" text-blue-chill ">*</span></label>
                                    <Input size='lg' isRequired type="text" placeholder="Ex: John" className=" !hover:bg-opacity-0 mt-2    !py-0  !w-full "
                                        classNames={{
                                            inputWrapper: '!rounded-lg !shadow-none border border-blue-chill rounded-2xl group-data-[focus=true]:bg-[#d3d3d3] bg-white w-full !py-2 h-auto data-[hover=true]:bg-white data-[hover=true]:bg-opacity-100',
                                            input: '  group-data-[has-value=true]:text-black text-sm  hover:bg-opacity-0 !bg-white '
                                        }
                                        } />

                                </div>
                                {/*Last Name */}
                                <div className=" bg-none   rounded-xl w-full ">
                                    <label htmlFor="last name" className=" text-base md:text-sm xl:text-xl font-semibold">Last Name <span className=" text-blue-chill ">*</span></label>
                                    <Input size='lg' isRequired type="text" placeholder="Ex: Wick" className=" !hover:bg-opacity-0 mt-2    !py-0  !w-full "
                                        classNames={{
                                            inputWrapper: '!rounded-lg !shadow-none border border-blue-chill rounded-2xl group-data-[focus=true]:bg-[#d3d3d3] bg-white w-full !py-2 h-auto data-[hover=true]:bg-white data-[hover=true]:bg-opacity-100',
                                            input: '  group-data-[has-value=true]:text-black text-sm  hover:bg-opacity-0 !bg-white '
                                        }
                                        } />

                                </div>

                            </div>
                            <div className=" flex gap-4 xl:flex-row flex-col mt-3 w-full">
                                {/*Phone number */}
                                <div className=" bg-none   rounded-xl w-full ">
                                    <label htmlFor="number" className=" text-base md:text-sm xl:text-xl font-semibold">Phone Number <span className=" text-blue-chill ">*</span></label>
                                    <Input size='lg' isRequired type="number" placeholder="Ex: 123 4567 891" className=" !hover:bg-opacity-0 mt-2    !py-0  !w-full "
                                        classNames={{
                                            inputWrapper: '!rounded-lg !shadow-none border border-blue-chill rounded-2xl group-data-[focus=true]:bg-[#d3d3d3] bg-white w-full !py-2 h-auto data-[hover=true]:bg-white data-[hover=true]:bg-opacity-100',
                                            input: '  group-data-[has-value=true]:text-black text-sm  hover:bg-opacity-0 !bg-white '
                                        }
                                        } />

                                </div>
                                {/*Last Name */}
                                <div className=" bg-none   rounded-xl w-full ">
                                    <label htmlFor="email" className=" text-base md:text-sm xl:text-xl font-semibold">Email Address <span className=" text-blue-chill ">*</span></label>
                                    <Input size='lg' isRequired type="email" placeholder="Ex: johnwick@gmail.com" className=" !hover:bg-opacity-0 mt-2    !py-0  !w-full "
                                        classNames={{
                                            inputWrapper: '!rounded-lg !shadow-none border border-blue-chill rounded-2xl group-data-[focus=true]:bg-[#d3d3d3] bg-white w-full !py-2 h-auto data-[hover=true]:bg-white data-[hover=true]:bg-opacity-100',
                                            input: '  group-data-[has-value=true]:text-black text-sm  hover:bg-opacity-0 !bg-white '
                                        }
                                        } />

                                </div>
                            </div>
                            {/* text area */}

                            <div className=" bg-none   rounded-xl mt-4  ">
                                <label htmlFor="name" className=" text-base md:text-sm xl:text-xl font-semibold">Message</label>
                                <Textarea minRows={5} isRequired type="text" placeholder="Please describe your message here..." className=" !hover:bg-opacity-0 mt-2 !text-sm    !py-0  !w-full "
                                    classNames={{
                                        inputWrapper: '!rounded-lg !shadow-none border border-blue-chill rounded-2xl group-data-[focus=true]:bg-[#d3d3d3] bg-white w-full !py-2 h-auto data-[hover=true]:bg-white data-[hover=true]:bg-opacity-100',
                                        input: '  group-data-[has-value=true]:text-black !text-sm  hover:bg-opacity-0 !bg-white '
                                    }
                                    } />

                            </div>

                            {/* checkbox */}
                            <div>
                                <Checkbox size="sm" className=" gap-x-3 md:gap-x-2 pt-4 text-black  text-xs xl:!text-sm " classNames={{ wrapper: " !bg-[#d3d3d3]", label: " text-xs xl:!text-base" }}  >
                                    By submitting this form, you agree to allow us to store and process your personal data in accordance with our Privacy Policy.
                                </Checkbox>
                            </div>

                            {/* button */}
                            <Button className=" w-full bg-[#0D9488] text-white text-base hover:!bg-blue-chill-600 !py-3 mt-10">Submit</Button>


                        </form>
                    </div>
                    {/* right div
                    <div className="w-full">
                        <Image src="/images/contact/contactus.png" alt="img" className=" h-full w-full hidden xl:block" height={800} width={710} />
                        <Image src="/images/contact/contactus2.png" alt="img" className=" h-full w-full hidden md:block xl:hidden" height={410} width={680} />
                        <Image src="/images/contact/contactus3.png" alt="img" className=" h-full w-full block md:hidden" height={260} width={390} />
                    </div> */}
                </div>


            </section>
        </>
    )
}