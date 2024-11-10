"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesSection() {
    return (
        <>
        <section className="bg-white max-w-7xl mx-2.5 xl:mx-auto py-16 xl:py-24">
            <h2 className="text-4xl font-bold text-center text-black underline">Featured In</h2>
            <div className="grid grid-cols-1 gap-y-4 md:gap-x-6 md:grid-cols-3 pt-10">
            
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0, transition: { duration: 0.6, ease: "linear" } }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex flex-col items-center text-center bg-[#111827] p-4 xl:p-6 rounded-lg shadow-2xl hover:-translate-y-3 duration-700 h-full"
                >
                    <Image 
                        src="/images/features/onlinetest.svg" 
                        height={100} 
                        width={100} 
                        alt="img" 
                        className="p-5 py-5 bg-white rounded-2xl w-20 h-20 bg-opacity-10 font-semibold text-white mb-2" 
                    />
                    <div className="text-lg mb-4 text-[#4ADE80] font-semibold pt-3">Learn The Latest Skills</div>
                    <p className="text-sm text-gray-300">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                </motion.div>
                
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0, transition: { duration:  0.6, ease: "linear", delay: 0.2 } }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex flex-col items-center text-center bg-[#111827] p-4 xl:p-6 rounded-lg shadow-2xl hover:-translate-y-3 duration-700 h-full"
                >
                    <Image 
                        src="/images/features/exam.svg" 
                        height={100} 
                        width={100} 
                        alt="img" 
                        className="p-5 bg-white rounded-2xl w-20 h-20 bg-opacity-10 font-semibold text-white mb-2" 
                    />
                    <div className="text-lg mb-4 text-[#4ADE80] font-semibold pt-3">Learn The Latest Skills</div>
                    <p className="text-sm text-gray-300">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                </motion.div>
                
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{ y: 0, transition: { duration: 0.6, ease: "linear", delay: 0.3 } }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex flex-col items-center text-center bg-[#111827] p-4 xl:p-6 rounded-lg shadow-2xl hover:-translate-y-3 duration-700 h-full"
                >
                    <Image 
                        src="/images/features/certification.svg" 
                        height={100} 
                        width={100} 
                        alt="img" 
                        className="p-5 bg-white rounded-2xl w-20 h-20 bg-opacity-10 font-semibold text-white mb-2" 
                    />
                    <div className="text-lg mb-4 text-[#4ADE80] font-semibold pt-3">Earn a Certificate</div>
                    <p className="text-sm text-gray-300">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                </motion.div>
            </div>
        </section>
        </>
    );
}
