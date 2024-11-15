"use client"
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const PartnershipProgram = () => {
    return (
        <section className="bg-white py-16 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-2.5 xl:mx-auto">
                <div className=" text-center">
                    {/* Header Section */}
                    <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}  
                    className="text-3xl md:text-4xl xl:text-5xl  font-bold  text-[#0D9488] text-center">
                        Partnership Program
                    </motion.h2>
                    <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    viewport={{ once: true }}  
                    className="mt-2 text-lg md:text-2xl leading-9 pt-5 font-semibold text-black ">
                        Empowering Education Together
                    </motion.p>
                    <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}  
                    className="mt-4 max-w-2xl text-lg text-[#4b5563] mx-auto">
                        Join us in shaping the future of education by collaborating on
                        innovative learning solutions, resources, and programs.
                    </motion.p>
                </div>

                {/* Benefits Section */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-10 items-start ">
                    {/* Benefit 1 */}
                    <motion.div
                     initial={{ opacity: 0, x: -100 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1.5 }}
                     viewport={{ once: true }}
                    className="bg-indigo-50 rounded-lg p-6 text-center hover:shadow-[0_10px_18px_15px_rgba(13,148,136,0.3)] duration-500 shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] h-full">
                        <div className=" flex justify-center items-center pb-2">
                            <Image src="/images/partnership/partnership1.jpg" className='h-[100px] w-[100px]' alt='icon' height={100} width={100} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#0D9488]">
                            Access to Educational Resources
                        </h3>
                        <p className="mt-4 text-base text-[#4b5563]">
                            Partners gain access to a wealth of curated educational materials,
                            research data, and teaching aids.
                        </p>
                    </motion.div>

                    {/* Benefit 2 */}
                    <motion.div
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1.5 }}
                     viewport={{ once: true }}
                    className="bg-indigo-50 rounded-lg p-6 text-center hover:shadow-[0_10px_18px_15px_rgba(13,148,136,0.3)] duration-500 shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] h-full">
                        <div className=" flex justify-center items-center pb-2">
                            <Image src="/images/partnership/partnership2.jpg" className='h-[100px] w-[100px]' alt='icon' height={100} width={100} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#0D9488]">
                            Collaborative Workshops
                        </h3>
                        <p className="mt-4 text-base text-[#4b5563]">
                            Participate in workshops, conferences, and training sessions led by
                            industry experts.
                        </p>
                    </motion.div>

                    {/* Benefit 3 */}
                    <motion.div
                     initial={{ opacity: 0, x: 100 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1.5 }}
                     viewport={{ once: true }}
                    className="bg-indigo-50 rounded-lg p-6 text-center hover:shadow-[0_10px_18px_15px_rgba(13,148,136,0.3)] duration-500 shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] h-full">
                        <div className=" flex justify-center items-center pb-2">
                            <Image src="/images/partnership/partnership3.jpg" className='h-[100px] w-[100px]' alt='icon' height={100} width={100} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#0D9488]">
                            Networking Opportunities
                        </h3>
                        <p className="mt-4 text-base text-[#4b5563]">
                            Connect with other institutions, educators, and innovators to build
                            valuable relationships.
                        </p>
                    </motion.div>
                </div>

                {/* Call to Action Section */}
                <motion.div
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.5 }}
                 viewport={{ once: true }}
                className="mt-16 max-w-3xl mx-auto text-center">
                    <h4 className="text-2xl font-bold text-[#0D9488]">
                        Ready to Make a Difference?
                    </h4>
                    <p className="mt-4 text-lg text-[#4b5563]">
                        Join our partnership program and help us create impactful educational
                        experiences for learners everywhere.
                    </p>
                    <Link href='/contact' >
                        <Button className="mt-8  px-6 h-auto py-3 text-sm  md:text-lg font-semibold rounded-xl bg-orange-600 text-white hover:bg-orange-800 duration-500">
                            Become a Partner
                        </Button>
                    </Link>

                </motion.div>
            </div>
        </section>

    );
};

export default PartnershipProgram;
