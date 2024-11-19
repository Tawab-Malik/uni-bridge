"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AimSection from '../components/Aims';
import MissionSection from '../components/Mission';
import { Button } from '@nextui-org/react';
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from 'next/link';

const About = () => {
    // const words = [
    //     { text: "Creating a" },
    //     { text: "more" },
    //     { text: "sustainable," },
    //     { text: "peaceful," },
    //     { text: "and just" },
    //     { text: "world" },
    // ];
    return (
        <section className="bg-white pt-20 md:pt-28">
            <div className=' relative bg-[url(/images/about.jpg)] bg-cover bg-center py-16 md:py-[200px] xl:py-[400px]'>
            <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* <TypewriterEffectSmooth words={words} /> */}
                <h2 className=' relative text-3xl md:text-4xl xl:text-5xl text-center font-bold text-blue-chill '>About Us</h2>
                <p
                    className="text-sm md:text-xl pt-5 md:pt-8 text-white text-center relative px-5 md:px-0"
                    
                >
                    &quot;Empowering your journey with the right skills and knowledge.&quot;
                </p>


                <div
                    className="flex justify-center  mt-5 md:mt-10"
                   
                >
                    <Link  href="/">
                    <Button
                       
                        className=" px-5 md:!px-10  h-auto py-3 md:!py-4 text-sm  md:text-lg font-semibold rounded-xl bg-orange-600 text-white hover:bg-orange-800 duration-500"
                    >
                        Learn More
                    </Button>
                    </Link>
                    
                </div>

            </div>
            <div className="">
                {/* Header Section */}
                {/* <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0D9488] text-center">
                        About Us
                    </h1>
                    <p className="mt-6 text-black text-lg text-center px-0 md:px-16">
                        At the core of our mission is the belief that education is the foundation of growth and transformation. We are dedicated to fostering learning experiences that inspire curiosity, critical thinking, and innovation. By embracing diverse perspectives and leveraging cutting-edge resources, we strive to create an environment where knowledge thrives and individuals are empowered to reach their fullest potential.
                    </p>
                </motion.div> */}



                <AimSection />
                <MissionSection />
                <div className="py-16 px-2.5">



                    {/* Values Section
                    <motion.div
                        className="bg-gray-100 shadow-lg rounded-xl border-2 border-blue-chill-400 p-5 md:p-8 mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-[#F97316] mb-4">
                            Our Core Values
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
                            <li>Inclusivity: Education for everyone.</li>
                            <li>Innovation: Embracing technology to enhance learning.</li>
                            <li>Integrity: Honesty and transparency in everything we do.</li>
                            <li>Excellence: Striving for the highest standards in education.</li>
                        </ul>
                    </motion.div> */}

                    {/* Team Section */}
                    <motion.div
                        className="bg-white shadow-lg rounded-xl border-2 border-blue-chill-400 p-5 md:p-8 max-w-7xl mx-2.5 xl:mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-semibold text-[#0D9488] mb-4 text-center">
                            Meet Our Team
                        </h2>
                        <p className="text-black text-center text-lg mb-6">
                            Our team comprises educators, technologists, and innovators who are passionate about making a difference in the world of education.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Example Team Member */}
                            <motion.div
                                className="bg-gray-50 rounded-lg text-center py-5"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                    src="/images/aims/man1.jpg"
                                    alt="Team Member"
                                    height={200}
                                    width={200}
                                />
                                <h3 className="text-xl font-semibold text-[#F97316]">
                                    Alex Johnson
                                </h3>
                                <p className="text-gray-500">Founder & CEO</p>
                            </motion.div>
                            <motion.div
                                className="bg-gray-50 rounded-lg text-center py-5"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                    src="/images/aims/man2.jpg"
                                    alt="Team Member"
                                    height={200}
                                    width={200}
                                />
                                <h3 className="text-xl font-semibold text-[#F97316]">
                                    Jhon Richard
                                </h3>
                                <p className="text-gray-500">Director of Education</p>
                            </motion.div>
                            <motion.div
                                className="bg-gray-50 rounded-lg text-center py-5"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                    src="/images/aims/man3.jpg"
                                    alt="Team Member"
                                    height={200}
                                    width={200}
                                />
                                <h3 className="text-xl font-semibold text-[#F97316]">
                                    Kevin Brown
                                </h3>
                                <p className="text-gray-500">Lead Developer</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
