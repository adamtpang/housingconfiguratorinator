"use client";

import React from "react";
import { MotionWrapper } from "@/components/motion-wrapper";

interface ConfiguratorLayoutProps {
    children: React.ReactNode;
}

export function ConfiguratorLayout({ children }: ConfiguratorLayoutProps) {
    return (
        <div className="min-h-screen w-full bg-background text-foreground lg:flex lg:h-screen lg:overflow-hidden">
            {children}
        </div>
    );
}
