"use client";

import { motion, AnimatePresence, HTMLMotionProps, Variants } from "motion/react";
import React from "react";

type AnimationType = "fadeIn" | "scaleIn" | "slideInFromLeft" | "slideInFromRight" | "staggerContainer";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    as?: React.ElementType; // Allow rendering as other elements like 'section', 'ul', etc.
}

const variants: Record<AnimationType, Variants> = {
    fadeIn: {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
    slideInFromLeft: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    slideInFromRight: {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
};

export const MotionWrapper = ({
    children,
    animation = "fadeIn",
    delay = 0,
    duration = 0.4,
    className,
    as = "div",
    ...props
}: MotionWrapperProps) => {
    const Component = motion.create(as as any);

    return (
        <Component
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants[animation]}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }} // Apple-like ease
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
};

export const MotionItem = ({ children, className, ...props }: { children: React.ReactNode; className?: string } & HTMLMotionProps<"div">) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
