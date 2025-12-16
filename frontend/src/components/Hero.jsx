import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden bg-brand-light mb-4 shadow-sm group">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-blue-400 opacity-10"></div>

            {/* Animated Blobs (Infinity Animation context) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left max-w-xl"
                >
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-brand-darkBlue uppercase bg-brand-yellow rounded-sm"
                    >
                        Summer Exclusive
                    </motion.span>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-brand-darkBlue mb-6 leading-tight">
                        Level Up Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">Lifestyle</span>
                    </h1>

                    <p className="text-gray-600 mb-8 text-lg font-medium">
                        Experience the future of shopping. <br className="hidden md:block" />
                        Unlimited choices, infinite possibilities.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-blue text-white px-8 py-3.5 rounded-sm font-bold shadow-lg shadow-blue-200/50 hover:bg-brand-darkBlue transition-all flex items-center gap-2"
                    >
                        Explore Collection
                    </motion.button>
                </motion.div>

                {/* Image/Graphic with Float Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="hidden md:block relative perspective-1000"
                >
                    {/* Floating wrapper */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src="https://pngimg.com/uploads/headphones/headphones_PNG7645.png"
                            alt="Hero Product"
                            className="h-[350px] object-contain drop-shadow-2xl z-10 relative"
                        />
                    </motion.div>

                    {/* Background Circle Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white rounded-full -z-10 shadow-inner opacity-50"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
