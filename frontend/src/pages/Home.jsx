import React, { useEffect, useState } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Sparkles } from 'lucide-react';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const categories = [
        { name: 'All', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' },
        { name: 'Electronics', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
        { name: 'Fashion', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100' },
        { name: 'Home', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100' },
        { name: 'Beauty', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' },
        { name: 'Toys', icon: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100' },
    ];

    // Stagger container for grid
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    if (loading) return <div className="flex justify-center items-center h-screen bg-brand-light">
        <div className="relative">
            <div className="w-16 h-16 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-brand-yellow rounded-full animate-pulse"></div>
            </div>
        </div>
    </div>;

    return (
        <div className="min-h-screen bg-brand-light font-sans text-brand-darkBlue">

            {/* Infinite Marquee */}
            <Marquee />

            {/* Category Navigation */}
            <div className="bg-white shadow-sm mb-1 overflow-x-auto sticky top-16 z-30">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between min-w-max gap-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col items-center cursor-pointer group hover:opacity-100 opacity-80 transition-opacity">
                            <div className="h-14 w-14 mb-1 overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                                <img src={cat.icon} alt={cat.name} className="h-full w-full object-contain" />
                            </div>
                            <span className="text-xs font-bold text-gray-800 group-hover:text-brand-blue">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Hero />

            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">

                {/* Visual Header for Section */}
                <div className="bg-white p-5 mb-4 shadow-sm rounded-sm flex items-center justify-between border-b-2 border-brand-blue/10 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="text-brand-yellow" size={24} fill="currentColor" />
                            <h2 className="text-2xl font-extrabold text-brand-darkBlue tracking-tight">Deals of the Day</h2>
                        </div>
                        <p className="text-gray-500 text-sm font-medium ml-8">Based on your infinite interest</p>
                    </div>
                    {/* Background decor */}
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-blue/5 to-transparent skew-x-12"></div>

                    <button className="relative z-10 bg-brand-blue text-white px-6 py-2 rounded-sm text-sm font-bold shadow-md hover:bg-blue-700 transition-all active:scale-95">
                        VIEW ALL
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">

                    {/* Sidebar Filters */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden lg:block w-64 flex-shrink-0"
                    >
                        <div className="bg-white shadow-sm rounded-sm p-5 sticky top-36">
                            <div className="flex items-center justify-between border-b pb-4 mb-4">
                                <h3 className="font-extrabold text-lg flex items-center gap-2">
                                    <Filter size={18} /> Filters
                                </h3>
                            </div>

                            {/* Filter Section */}
                            <div className="mb-6">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Price Range</h4>
                                <div className="h-1 bg-gray-200 rounded-full mb-4 relative">
                                    <div className="absolute left-0 top-0 h-full w-2/3 bg-brand-blue rounded-full"></div>
                                    <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-white border-2 border-brand-blue rounded-full shadow cursor-grab hover:scale-110 transition-transform"></div>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-gray-700">
                                    <span>min</span>
                                    <span>max</span>
                                </div>
                            </div>

                            {/* Animated Checkboxes */}
                            <div className="space-y-4">
                                {['Brand', 'Rating', 'Discount'].map((filter) => (
                                    <div key={filter}>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex justify-between cursor-pointer group">
                                            {filter} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                                        </h4>
                                        <div className="space-y-2 pl-1">
                                            {[1, 2, 3].map(i => (
                                                <label key={i} className="flex items-center gap-3 cursor-pointer group/item">
                                                    <div className="w-4 h-4 border-2 border-gray-300 rounded-sm group-hover/item:border-brand-blue transition-colors relative"></div>
                                                    <span className="text-sm text-gray-600 group-hover/item:text-brand-darkBlue transition-colors">Option {i}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Product Grid with Staggered Animation */}
                    <div className="flex-1">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
                        >
                            {products.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
export default Home;
