"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button} from "@nextui-org/react";  // Import useTheme here
import ShineBorder from "@/components/ui/shine-border";
export default function Herosection() {

    const words = [
        { text: "Creating a" },
        { text: "more" },
        { text: "sustainable," },
        { text: "peaceful," },
        { text: "and just" },
        { text: "world" },
    ];

    return (
        <>
            <section className="bg-[url(/images/herosection/herobg.jpg)] bg-cover bg-center py-20 xl:py-80">
                <div className="max-w-7xl mx-2.5 xl:mx-auto text-center">
                    <TypewriterEffectSmooth words={words} />
                    
                    <motion.p
                        className="text-sm md:text-base text-white"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { type: "linear", duration: 1.0 } }}
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        through education, development, and exchange since 1932.
                    </motion.p>
                    
                   
                    <motion.div
                        className="flex justify-center pt-5"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { duration: 1.0, ease: "easeOut" } }}
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Button
                            href="#"
                            className=" px-5 md:!px-10  h-auto py-3 md:!py-4 text-sm  md:text-lg font-semibold rounded-xl bg-gray-600 text-white hover:bg-gray-800 duration-500"
                        >
                            Explore More About Us
                        </Button>
                    </motion.div>
                   
                    
                </div>
            </section>
        </>
    );
}
function useTheme() {
    throw new Error("Function not implemented.");
}

