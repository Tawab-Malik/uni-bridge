"use client"
// import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Objectives() {
    const objectives = [
        "Open a field to attract channels for visual and electronic broadcasting.",
        "Attract the innovative in making the content and definition of the value.",
        "Gathering experienced people in the industry of making the content to create a professional environment for work in the field of media and television production, technology, social media and software.",
        "Selection of unusual and innovative works and makes them accessible to everyone in a distinctive and high-quality technology.",
        "Helping geniuses in technology and software to convert their distinctive ideas into reality.",
        "Upgrading the artistic reality through the production of annual works that differ in form and content from other productions and meet with them in terms of topics, image and value, so as to leave space for the viewer to put their touch on each work.",
        "Upgrading the social thought and reality to imagine what's beyond the reality.",
    ];

    return (
        <section className='bg-white py-12 md:py-24 overflow-hidden'>
             <div className='mb-10 block md:hidden mx-2.5'>
                        <motion.h2
                            initial={{ y: 50 }}
                            whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                            viewport={{ once: true, amount: 0.1 }}
                            className='text-3xl md:text-4xl xl:text-5xl  font-bold  text-[#0D9488] text-center'>
                            The Objectives
                            {/* <AnimatedGradientText > */}

                            {/* </AnimatedGradientText> */}
                        </motion.h2>
                    </div>
            <div className="flex flex-col xl:flex-row items-center gap-20  py-12   lg:px-24 max-w-7xl mx-2.5 xl:mx-auto">

                {/* Image Section */}
                <motion.div
                    className="relative w-full xl:w-1/2 flex items-center justify-center xl:justify-between mb-8 md:mb-0"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.0 }}
                    viewport={{ once: true }}  >
                    <div className=" rounded-full  flex justify-center items-center">
                        <Image
                            src="/images/objective/objective.jpg"
                            alt="Superhero"
                            className="object-cover xl:h-full md:h-[500px] md:w-[500px] xl:w-full  rounded-full"
                            height={1000}
                            width={1000}
                        />
                    </div>
                </motion.div>

                {/* Objectives Content */}
                <div className="w-full xl:w-1/2">
                    <div className='mb-16 hidden md:block'>
                        <motion.h2
                            initial={{ y: 50 }}
                            whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                            viewport={{ once: true, amount: 0.1 }}
                            className='text-3xl md:text-4xl xl:text-5xl  font-bold  text-[#0D9488] text-center'>
                            The Objectives
                            {/* <AnimatedGradientText > */}

                            {/* </AnimatedGradientText> */}
                        </motion.h2>
                    </div>

                    {/* Objectives List */}
                    <div>
                        {objectives.map((text, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-6 mb-6"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="flex items-center justify-center bg-[#0D9488] text-white rounded-full w-10 min-w-10 h-10 font-semibold text-center">
                                    {index + 1}
                                </span>
                                <p className="text-[#4b5563] text-lg">{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
