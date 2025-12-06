import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if it's a touch device
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();

        if (isTouchDevice) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Add hover detection for interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer');

            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        // Add listeners after a delay to ensure DOM is ready
        const timeout = setTimeout(addHoverListeners, 500);

        // Re-add listeners when DOM changes
        const observer = new MutationObserver(() => {
            addHoverListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, [cursorX, cursorY, isTouchDevice]);

    // Don't render on touch devices
    if (isTouchDevice) {
        return null;
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed pointer-events-none z-[9999]"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    x: '-50%',
                    y: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 2 : 1,
                        opacity: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.15 }}
                >
                    <div
                        className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"
                        style={{ mixBlendMode: 'difference' }}
                    />
                </motion.div>
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed pointer-events-none z-[9998]"
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    x: '-50%',
                    y: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        opacity: isVisible ? 0.4 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="w-8 h-8 rounded-full border-2 border-blue-600 dark:border-blue-400" />
                </motion.div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
