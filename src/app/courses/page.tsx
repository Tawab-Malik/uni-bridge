"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const courses = [
    {
        id: 1,
        title: "Web Development",
        description: "Learn the fundamentals of HTML, CSS, and JavaScript.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        title: "Data Science",
        description: "Dive into data analysis, visualization, and machine learning.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        title: "Graphic Design",
        description: "Master tools like Photoshop and Illustrator.",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        title: "Mobile Development",
        description: "Build mobile apps using React Native and Flutter.",
        image: "https://via.placeholder.com/150",
    },
];

const CourseSection = () => {
    return (
        <section className=" bg-white pt-32 pb-20">
            <div className=" max-w-7xl mx-2.5 xl:mx-auto">
                <motion.h2
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.5 }}
                 viewport={{ once: true }}  
                className="text-3xl md:text-4xl xl:text-5xl  font-bold  text-[#0D9488] text-center mb-6">Our Courses</motion.h2>
                <motion.p
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.5, delay:0.2 }}
                 viewport={{ once: true }}  
                className=" text-lg md:text-2xl leading-9  font-semibold text-black text-center">Courses we Provide</motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 mt-16">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            className="bg-white p-4 rounded-lg shadow-xl  hover:shadow-xl"
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
                            <h3 className="text-xl text-[#0D9488] font-semibold mt-4">{course.title}</h3>
                            <p className="text-gray-600 mt-2">{course.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default CourseSection;
