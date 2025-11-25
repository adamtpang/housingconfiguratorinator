"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MotionWrapper } from "@/components/motion-wrapper";

interface ConfigurationPanelProps {
    children: React.ReactNode;
}

export function ConfigurationPanel({ children }: ConfigurationPanelProps) {
    return (
        <MotionWrapper
            as="section"
            animation="slideInFromLeft"
            className="relative z-10 flex h-full w-full flex-col bg-background lg:w-[45%] lg:min-w-[500px] lg:border-r lg:border-border/50 lg:shadow-xl"
        >
            <div className="flex-1 overflow-y-auto px-6 py-12 md:px-12 lg:px-16">
                <div className="mx-auto max-w-xl space-y-12">
                    <header className="space-y-4">
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                            Design Your Stay.
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Customize your living experience at Network School.
                        </p>
                    </header>

                    <div className="space-y-16">
                        {children}
                    </div>
                </div>
            </div>
        </MotionWrapper>
    );
}
