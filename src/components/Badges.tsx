import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { credlyBadges } from '../data/badges';
import { Award, ExternalLink } from 'lucide-react';

const Badges: React.FC = () => {
    const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Duplicate badges for infinite scroll effect
    const duplicatedBadges = [...credlyBadges, ...credlyBadges, ...credlyBadges];

    // Auto-scroll effect
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel || isPaused) return;

        const scrollSpeed = 1;
        let animationId: number;

        const autoScroll = () => {
            if (carousel) {
                carousel.scrollLeft += scrollSpeed;

                // Reset scroll position for infinite loop
                const maxScroll = carousel.scrollWidth / 3;
                if (carousel.scrollLeft >= maxScroll * 2) {
                    carousel.scrollLeft = maxScroll;
                } else if (carousel.scrollLeft <= 0) {
                    carousel.scrollLeft = maxScroll;
                }
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        // Start with scroll position in the middle section
        carousel.scrollLeft = carousel.scrollWidth / 3;
        animationId = requestAnimationFrame(autoScroll);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const handleBadgeClick = (credlyUrl: string) => {
        window.open(credlyUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="badges" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/[0.05] rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/[0.05] rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-sm font-medium text-yellow-600 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-800 mb-4"
                    >
                        <Award size={16} />
                        Certifications & Badges
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">My </span>
                        <span className="text-yellow-600 dark:text-yellow-400">Credentials</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        Professional certifications and badges earned from industry-leading cloud platforms.
                    </p>

                    <div className="w-24 h-1 mx-auto rounded-full bg-yellow-600 dark:bg-yellow-400" />
                </motion.div>

                {/* Badges Carousel */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="flex gap-6 overflow-x-hidden py-8 px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {duplicatedBadges.map((badge, index) => (
                            <motion.div
                                key={`${badge.id}-${index}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHoveredBadge(`${badge.id}-${index}`)}
                                onMouseLeave={() => setHoveredBadge(null)}
                                onClick={() => handleBadgeClick(badge.credlyUrl)}
                                className="group flex-shrink-0 cursor-pointer"
                            >
                                <motion.div
                                    className="relative w-40 h-40 bg-white dark:bg-gray-800 rounded-2xl p-3 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Badge Image */}
                                    <img
                                        src={badge.imageUrl}
                                        alt={badge.name}
                                        className="w-full h-full object-contain rounded-xl"
                                        loading="lazy"
                                    />

                                    {/* Hover Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-3 rounded-2xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredBadge === `${badge.id}-${index}` ? 1 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h4 className="text-white text-xs font-semibold leading-tight line-clamp-2 mb-1">
                                            {badge.name}
                                        </h4>
                                        <p className="text-gray-300 text-[10px]">
                                            {badge.issuer}
                                        </p>
                                        <div className="flex items-center gap-1 mt-2 text-yellow-400 text-[10px]">
                                            <ExternalLink size={10} />
                                            <span>View on Credly</span>
                                        </div>
                                    </motion.div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            boxShadow: '0 0 30px rgba(234, 179, 8, 0.3), 0 0 60px rgba(234, 179, 8, 0.1)'
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex justify-center gap-8 flex-wrap"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{credlyBadges.length}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Badges Earned</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {credlyBadges.filter(b => b.issuer.includes('Amazon')).length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">AWS Certifications</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            {credlyBadges.filter(b => b.issuer.includes('Google')).length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Google Cloud Badges</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Badges;
