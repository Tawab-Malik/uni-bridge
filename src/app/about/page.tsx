"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    return (
        <section className="bg-white pt-24">
            <div className="max-w-7xl mx-2.5 xl:mx-auto">
                <div className="py-16">
                    {/* Header Section */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0D9488] text-center">
                            About Us
                        </h1>
                        <p className="mt-4 text-black text-lg text-center">
                            Empowering Minds Through Education
                        </p>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        className="bg-white shadow-xl rounded-xl border-2 border-blue-chill-400 p-5 md:p-8 mb-12 mt-5"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-semibold text-[#F97316] mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our mission is to create a platform that fosters learning, growth, and innovation.
                            We aim to provide quality educational resources and opportunities to students of all
                            ages, empowering them to achieve their full potential.
                        </p>
                    </motion.div>

                    {/* Values Section */}
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
                    </motion.div>

                    {/* Team Section */}
                    <motion.div
                        className="bg-white shadow-lg rounded-xl border-2 border-blue-chill-400 p-5 md:p-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
                                className="bg-gray-50 rounded-lg text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                    src="https://via.placeholder.com/150"
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
                                className="bg-gray-50 rounded-lg text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member"
                                    height={200}
                                    width={200}
                                />
                                <h3 className="text-xl font-semibold text-[#F97316]">
                                    Maria Gomez
                                </h3>
                                <p className="text-gray-500">Director of Education</p>
                            </motion.div>
                            <motion.div
                                className="bg-gray-50 rounded-lg text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                    src="https://via.placeholder.com/150"
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
