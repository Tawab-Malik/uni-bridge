// components/AimSection.js
"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const AimSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const aims = [
        {
            image: "/images/aims/image1.jpg",
            title: "Inspiring Curiosity",
            description:
                "Foster a love for learning by offering engaging, interactive, and diverse educational content.",
        },
        {
            image: "/images/aims/image2.jpg",
            title: "Enhancing Skills",
            description:
                "Equip learners with practical skills and knowledge that prepare them for real-world challenges in their academic and professional journeys.",
        },
        {
            image: "/images/aims/images3.jpg",
            title: "Personalized Learning",
            description:
                "Recognize the unique needs of every learner by providing customized learning paths that cater to individual strengths and areas of improvement.",
        },
        {
            image: "/images/aims/images4.jpg",
            title: "Building a Global Community",
            description:
                "Cultivate a supportive and inclusive community where learners, educators, and experts can connect, collaborate, and grow together.",
        },
    ];

    return (
        <section className="bg-[#111827] py-12 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ y: 50 }}
                    whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="text-3xl font-bold text-center text-[#0D9488] mb-5"
                >
                    Our Aim
                </motion.h2>
                <motion.p
                    initial={{ y: 50 }}
                    whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="text-lg  text-center text-white mb-10"
                >
                    Our Aims to fostering a transformative learning experience.
                </motion.p>
                <Slider {...settings}>
                    {aims.map((aim, index) => (
                        <div key={index} className="px-6 h-full">
                            <div className="grid grid-cols-1 bg-white rounded-lg  shadow-lg h-[440px] md:h-[470px]  xl:h-auto">
                                <Image
                                    src={aim.image}
                                    alt="Aim Image"
                                    height={500}
                                    width={1000}
                                    className="rounded-t-lg object-cover"
                                />
                                <div className="flex flex-col justify-between flex-grow p-6">
                                    <motion.h3
                                        initial={{ y: 50 }}
                                        whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        className="text-2xl font-semibold text-gray-700 my-4"
                                    >
                                        {aim.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ y: 50 }}
                                        whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        className="text-gray-600"
                                    >
                                        {aim.description}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default AimSection;
