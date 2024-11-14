"use client"
import { motion } from "framer-motion";
import Image from "next/image";
// import ShineBorder from "@/components/ui/shine-border";
export default function VisionSection() {
    // const themeColor = "dark";

    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 xl:py-24" id="about">
            <div className="max-w-6xl mx-auto px-2.5 lg:px-8 text-center">
          
                <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#0D9488] mb-6">
                    Our Vision for a Brighter Future
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay:0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-[#4b5563] max-w-2xl mx-auto mb-12">
                    Empowering learners around the world with accessible, high-quality education that fosters curiosity, creativity, and innovation for a sustainable tomorrow.
                </motion.p>
           
          
                <div className="grid gap-5 xl:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {/* <ShineBorder color={themeColor === "dark" ? "#063C87" : "#063C87"}> */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-white  shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] rounded-lg"
                    >
                        <Image src="/images/features/vision.jpg" width={500} height={300} alt="Quality Education" className="mx-auto  rounded-t-lg" />
                        <div className="px-5 py-5">
                            <h3 className="text-xl font-semibold text-black mb-2">Quality Education</h3>
                            <p className="text-[#4b5563]">
                                Providing students with world-class resources to gain in-depth knowledge and skills.
                            </p>
                        </div>

                    </motion.div>
                    {/* </ShineBorder> */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white  shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] rounded-lg"
                    >
                        <Image src="/images/features/vision.jpg" width={500} height={300} alt="Quality Education" className="mx-auto  rounded-t-lg" />
                        <div className=" px-5 py-5">
                        <h3 className="text-xl font-semibold text-black mb-2">Accessibility for All</h3>
                        <p className="text-[#4b5563]">
                            Making education accessible to everyone, everywhere, regardless of background.
                        </p>
                        </div>
                    
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white  shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] rounded-lg"
                    >
                        <Image src="/images/features/vision.jpg" width={500} height={300} alt="Quality Education" className="mx-auto  rounded-t-lg" />
                        <div className="px-5 py-5">
                        <h3 className="text-xl font-semibold text-black mb-2">Fostering Innovation</h3>
                        <p className="text-[#4b5563]">
                            Inspiring the next generation of thinkers and creators through cutting-edge learning.
                        </p>
                        </div>
                     
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] rounded-lg"
                    >
                        <Image src="/images/features/vision.jpg" width={500} height={300} alt="Quality Education" className="mx-auto rounded-t-lg" />
                        <div className="px-5 py-5">
                        <h3 className="text-xl font-semibold text-black mb-2">Global Community</h3>
                        <p className="text-[#4b5563]">
                            Building a connected and supportive global network of learners and educators.
                        </p>
                        </div>
                       
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] rounded-lg"
                    >
                        <Image src="/images/features/vision.jpg" width={500} height={300} alt="Quality Education" className="mx-auto rounded-t-lg" />
                        <div className=" px-5 py-5">
                            <h3 className="text-xl font-semibold text-black mb-2">Advanced Technology</h3>
                            <p className="text-[#4b5563]">
                                Utilizing modern technology to enhance the learning experience and make it more engaging.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
                        viewport={{ once: true }}
                        className="bg-white  shadow-[0_10px_18px_15px_rgba(0,0,0,0.1)] rounded-lg"
                    >
                        <Image src="/images/features/vision.jpg" width={500} height={300} alt="Quality Education" className="mx-auto  rounded-t-lg" />
                        <div className=" px-5 py-5">
                            <h3 className="text-xl font-semibold text-black mb-2">Sustainable Future</h3>
                            <p className="text-[#4b5563]">
                                Encouraging sustainable practices for an environmentally friendly future.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
