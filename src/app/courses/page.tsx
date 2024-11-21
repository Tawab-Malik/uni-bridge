"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
const courses = [
    {
        id: 1,
        title: "Web Development",
        description: "Learn the fundamentals of HTML, CSS, and JavaScript.",
        image: "/images/courses/web.jpg",
        price: "00",
        rating: 4.5,
        ratingCount: 120,
    },
    {
        id: 2,
        title: "Data Science",
        description: "Dive into data analysis, visualization, and machine learning.",
        image: "/images/courses/data.jpg",
        price: "00",
        rating: 4.8,
        ratingCount: 95,
    },
    {
        id: 3,
        title: "Graphic Design",
        description: "Master tools like Photoshop and Illustrator.",
        image: "/images/courses/design1.jpg",
        price: "00",
        rating: 4.5,
        ratingCount: 120,
        
    },
    {
        id: 4,
        title: "Mobile Development",
        description: "Build mobile apps using React Native and Flutter.",
        image: "/images/courses/app.jpg",
        price: "00",
        rating: 4.8,
        ratingCount: 95,
    },
    {
        id: 5,
        title: "Graphic Design",
        description: "Master tools like Photoshop and Illustrator.",
        image: "/images/courses/design2.jpg",
        price: "00",
        rating: 4.5,
        ratingCount: 120,
        
    },
];

const CourseSection = () => {
    return (
        <section className=" bg-white pt-16 md:pt-20 pb-20">
            <div className=' relative bg-[url(/images/courses.jpg)] bg-cover bg-center py-16 md:py-[200px] xl:py-[400px]'>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* <TypewriterEffectSmooth words={words} /> */}
                <h2 className=' relative text-3xl md:text-4xl xl:text-5xl text-center font-bold text-blue-chill '>Courses</h2>
                <p
                    className="text-sm md:text-xl pt-5 md:pt-8 text-white text-center relative px-5 md:px-0"
                >
                    &quot;Empowering your journey with the right skills and knowledge.&quot;</p>
                <div
                    className="flex justify-center  mt-5 md:mt-10"

                >
                    <Link href="#AllCourses">
                        <Button

                            className=" px-5 md:!px-10  h-auto py-3 md:!py-4 text-sm  md:text-lg font-semibold rounded-xl bg-orange-600 text-white hover:bg-orange-800 duration-500"
                        >
                            View All
                        </Button>
                    </Link>

                </div>

            </div>
            <div className="max-w-7xl mx-2.5 xl:mx-auto pt-12 md:pt-24" id="AllCourses">
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0D9488] text-center mb-6"
                >
                    Here are Our All Courses
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-2xl leading-9 font-semibold text-black text-center"
                >
                    Please have a Look at this
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 mt-16">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            className="bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Image
                                src={course.image}
                                alt={course.title}
                                className="w-full h-40 object-cover rounded-t-md"
                                height="150"
                                width="500"
                            />
                            <h3 className="text-xl text-[#0D9488] font-semibold mt-4">
                                {course.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{course.description}</p>
                            <p className="text-lg font-bold text-[#ea580c] mt-4">
                                Price: £{course.price}
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-lg font-semibold">
                                    {course.rating}★
                                </span>
                                <span className="text-gray-500 text-sm ml-2">
                                    ({course.ratingCount} ratings)
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>

    );
};

export default CourseSection;
