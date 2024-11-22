import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const BecomeAPartner = () => {
    return (
        <section className='bg-[#f96618]'>
            <div className="">
                {/* Hero Section */}
                <section className=" relative bg-[url(/images/partnership/partner.jpg)] bg-cover bg-center py-16 md:py-[100px] xl:py-[300px] pt-20 ">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative max-w-7xl mx-2.5 xl:mx-auto px-8  md:py-24 text-center">
                        <h1 className=" relative text-3xl md:text-4xl xl:text-5xl text-center font-bold text-blue-chill">
                            Together, We Shape the Future of Education
                        </h1>
                        <p className="mt-6 text-lg text-gray-200">
                            Partner with us to innovate, inspire, and bring impactful learning opportunities to communities worldwide.
                        </p>
                        <Link href='/contact' >
                        <Button className="mt-8 shadow-[0_10px_18px_15px_rgba(0,0,0,0.2)]  px-10 h-auto py-3 text-sm  md:text-lg font-semibold rounded-xl bg-orange-600 text-white hover:bg-orange-800 duration-500">
                           Join Us
                        </Button>
                    </Link>
                    </div>
                   
                </section>

                {/* How We Make a Difference */}
                <section className="py-16 px-5 xl:px-8 ">
                    <h2 className=" text-2xl md:text-4xl font-bold text-center">
                        How We&apos;re Making a Difference
                    </h2>
                    <p className="mt-4 text-center text-white">
                        Explore the impact of our partnerships in driving transformative education initiatives.
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-8 max-w-7xl mx-auto">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <Image
                                src="/images/partnership/innovation.jpg"
                                alt="Innovation"
                                className="w-full h-48 object-cover rounded"
                                height={500}
                                width={500}
                            />
                            <h3 className="mt-4 text-xl font-bold">Innovative Solutions</h3>
                            <p className="mt-2 text-gray-600">
                                Partner with us to co-create revolutionary learning solutions tailored to the modern learner.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <Image
                                src="/images/partnership/empowering.jpg"
                                alt="Community Impact"
                                className="w-full h-48 object-cover rounded"
                                height={500}
                                width={500}
                            />
                            <h3 className="mt-4 text-xl font-bold">Empowering Communities</h3>
                            <p className="mt-2 text-gray-600">
                                Enable access to quality education for underserved communities, fostering global equity.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <Image
                                src="/images/partnership/global.jpg"
                                alt="Global Impact"
                                className="w-full h-48 object-cover rounded"
                                height={500}
                                width={500}
                            />
                            <h3 className="mt-4 text-xl font-bold">Global Network</h3>
                            <p className="mt-2 text-gray-600">
                                Be part of an expansive network of educators, innovators, and policymakers across the globe.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Partner With Us */}
                <section className="py-16 px-5 xl:px-8">
                    <div className="max-w-7xl mx-auto text-center" >
                        <h2 className="text-2xl md:text-4xl font-bold">Why Partner with Us?</h2>
                        <p className="mt-4 text-white">
                            We believe partnerships are the key to unlocking new possibilities in education.
                        </p>
                    </div>
                    <div className="mt-12 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
                        <div className="max-w-md text-white  shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] p-4 rounded-xl">
                            <h3 className="text-xl font-semibold">Joint Research Opportunities</h3>
                            <p className="mt-2 ">
                                Collaborate on impactful research projects that drive innovation in learning methodologies.
                            </p>
                        </div>
                        <div className="max-w-md text-white  shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] p-4 rounded-xl">
                            <h3 className="text-xl font-semibold">Brand Recognition</h3>
                            <p className="mt-2 text-white ">
                                Gain visibility through co-branded initiatives, conferences, and global campaigns.
                            </p>
                        </div>
                        <div className="max-w-md shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] p-4 rounded-xl">
                            <h3 className="text-xl text-white font-semibold">Sustainable Development</h3>
                            <p className="mt-2 text-white ">
                                Contribute to the global goal of inclusive and equitable quality education.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 px-5 xl:px-8  text-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-2xl md:text-4xl text-black font-bold">Start Your Partnership Journey</h2>
                        <p className="mt-4 text-white">
                            Ready to make a meaningful impact in education? Let&apos;s work together to inspire and empower the next generation.
                        </p>
                        <Link href='/contact' >
                        <Button className="mt-8 shadow-[0_10px_18px_15px_rgba(0,0,0,0.2)]  px-6 h-auto py-3 text-sm  md:text-lg font-semibold rounded-xl bg-orange-600 text-white hover:bg-orange-800 duration-500">
                            Get Started
                        </Button>
                    </Link>
                    </div>
                </section>

                {/* Contact Section */}
                {/* <section className="py-16 px-8 ">
                    <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
                    <p className="mt-4 text-center text-gray-600">
                        Let us know how you&apos;d like to collaborate. We&apos;re excited to hear from you.
                    </p>
                    <form className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </section> */}
            </div>
        </section>

    );
};

export default BecomeAPartner;
