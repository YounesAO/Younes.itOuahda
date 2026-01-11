import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pocs } from '../data/pocs';

const Pocs: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-24 pb-16 px-6">
            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                            Proof of Concepts
                        </h1>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                        Explore my deployed end-to-end project ideas. These are fully functional applications
                        showcasing various technologies and concepts.
                    </p>
                </motion.div>

                {/* POC Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {pocs.map((poc, index) => (
                        <motion.a
                            key={poc.id}
                            href={poc.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-500/30">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${poc.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Sparkle decoration */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Sparkles className="w-6 h-6 text-yellow-500" />
                                </div>

                                {/* Icon and Title */}
                                <div className="flex items-start gap-5 mb-6 relative z-10">
                                    <div className={`text-5xl p-4 bg-gradient-to-br ${poc.gradient} rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="filter drop-shadow-sm">{poc.icon}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {poc.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {poc.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Link indicator */}
                                <div className="flex items-center justify-between relative z-10">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-mono truncate max-w-[60%]">
                                        {poc.liveUrl.replace('https://', '')}
                                    </span>
                                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                                        <span className="text-sm group-hover:underline">Visit Live</span>
                                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>

                                {/* Bottom gradient line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${poc.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        More projects coming soon! 🚀
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Pocs;
