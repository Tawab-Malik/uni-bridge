"use client"
// import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/images/mission/mission1.jpg', // Replace with actual paths to images
    '/images/mission/mission2.jpg',
    '/images/mission/mission3.jpg',
    '/images/mission/mission4.jpg',
];

const MissionSection = () => {
    return (
        <div className=" max-w-7xl mx-2.5 xl:mx-auto   py-12 md:py-16  bg-white">
            {/* Left Section: Text Content */}
            <div className=" flex flex-col xl:flex-row justify-between items-start mb-8 lg:mb-0 lg:pr-8 gap-x-10">
                <motion.h2
                 initial={{ y: 50 }}
                 whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                 viewport={{ once: true, amount: 0.1 }}
                className='text-3xl md:text-4xl xl:text-5xl flex-row font-bold flex gap-x-5 text-[#0D9488] items-center text-center w-full xl:w-2/6 justify-center'>
                    Our Mission
                    {/* <AnimatedGradientText > */}
                      
                    {/* </AnimatedGradientText> */}
                </motion.h2>

            
                <motion.p 
                 initial={{ y: 50 }}
                 whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                 viewport={{ once: true, amount: 0.1 }}
                className="text-[#4b5563] w-full xl:w-4/6 pt-5">
                    Empowering minds through continuous learning and personalized support is at the heart of our mission. We believe in building a strong foundation where each educator and learner feels supported at every step. Our team is dedicated to providing timely guidance and valuable insights, ensuring that each educational journey is enriched with knowledge and purpose. With a commitment to clarity and responsiveness, we are always ready to address questions and provide resources, fostering an environment where learning thrives without limits.
                </motion.p>
            </div>

            {/* Right Section: Image Grid */}
            <div className=" grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-6 pt-10">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl overflow-hidden shadow-[0_10px_18px_15px_rgba(7,148,190,0.2)]"
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image src={src} alt={`Mission Image ${index + 1}`} height={1100} width={800} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MissionSection;
