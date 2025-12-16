import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate network delay for effect
        await new Promise(r => setTimeout(r, 800));

        const success = await login(username, password);
        if (success) {
            navigate('/');
        } else {
            setError('Invalid username or password');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row min-h-[500px]"
            >
                {/* Left Side - Brand Features */}
                <div className="md:w-2/5 bg-brand-blue p-8 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Login</h2>
                        <p className="text-blue-100 text-lg mb-8">Get access to your Orders, Wishlist and Recommendations</p>

                        <div className="space-y-6 hidden md:block">
                            <div className="flex items-center gap-3 opacity-90">
                                <span className="bg-white/20 p-2 rounded-full"><ShieldCheck size={20} /></span>
                                <div>
                                    <h4 className="font-bold">100% Secure</h4>
                                    <p className="text-sm text-blue-100">Safe payments & data protection</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Shapes */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <div className="mb-4">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="bg-red-50 text-red-600 p-3 rounded-md text-center text-sm mb-4 border border-red-100 flex items-center justify-center gap-2"
                            >
                                <Lock size={14} /> {error}
                            </motion.div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group relative">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="peer w-full border-b-2 border-gray-300 py-3 text-gray-900 focus:border-brand-blue focus:outline-none placeholder-transparent bg-transparent transition-colors"
                                id="username"
                                placeholder="Username"
                                required
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-blue flex items-center gap-1"
                            >
                                Enter Username
                            </label>
                        </div>

                        <div className="group relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="peer w-full border-b-2 border-gray-300 py-3 text-gray-900 focus:border-brand-blue focus:outline-none placeholder-transparent bg-transparent transition-colors"
                                id="password"
                                placeholder="Password"
                                required
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-blue"
                            >
                                Enter Password
                            </label>
                        </div>

                        <div className="text-xs text-gray-500 text-right">
                            By continuing, you agree to ShopVibe's <a href="#" className="text-brand-blue font-semibold">Terms of Use</a> and <a href="#" className="text-brand-blue font-semibold">Privacy Policy</a>.
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-[#fb641b] text-white py-4 rounded-sm font-bold text-lg shadow-md hover:bg-orange-600 transition-all relative overflow-hidden group ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <span className={`flex items-center justify-center gap-2 ${isLoading ? 'invisible' : ''}`}>
                                Login <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-brand-blue font-semibold cursor-pointer hover:underline text-sm mb-4">New to ShopVibe? Create an account</p>

                        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 bg-gray-50 p-3 rounded">
                            <User size={12} />
                            <span>Demo Credentials: <b>admin</b> / <b>admin</b></span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
