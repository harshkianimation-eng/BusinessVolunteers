import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import StartProjectPopup from "../components/StartProjectPopup";

const Hero = () => {
    const [showPopup, setShowPopup] = useState(false);

    const scrollToNext = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Main Hero Content */}
            <div className="container mx-auto text-center relative z-10">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-display font-bold mb-6 leading-tight sm:leading-snug break-words"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="text-primary block">BUSINESS</span>
                    <motion.span
                        className="text-light block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        VOLUNTEERS
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-light/80 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    We create stunning digital experiences that blend creativity with
                    technology. Transforming ideas into visual masterpieces.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <motion.button
                        onClick={() => setShowPopup(true)}
                        className="bg-primary text-dark px-8 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center gap-3 group"
                        whileHover={{ scale: 1.05, backgroundColor: "#ff5252" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Project
                        <motion.span
                            className="group-hover:translate-x-1 transition-transform"
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Play size={20} />
                        </motion.span>
                    </motion.button>

                    <a href="#portfolio">
                        <motion.button
                            className="border-2 border-light text-light px-8 py-4 rounded-full font-semibold text-base sm:text-lg"
                            whileHover={{ scale: 1.05, backgroundColor: "#ffffff10" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Portfolio
                        </motion.button>
                    </a>
                </motion.div>

                {/* Scroll Down */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        onClick={scrollToNext}
                        className="cursor-pointer"
                    >
                        <ChevronDown size={32} className="text-light/60" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 right-4 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full"
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-32 left-4 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-lg"
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, -180, -360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Start Project Popup */}
            <StartProjectPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </section>
    );
};

export default Hero;

