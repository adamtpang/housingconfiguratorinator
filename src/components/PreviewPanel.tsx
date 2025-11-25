"use client";

import React from "react";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Scene } from "@/components/preview/Scene";

interface PreviewPanelProps { }

export function PreviewPanel({ }: PreviewPanelProps) {
    return (
        <MotionWrapper
            as="section"
            animation="fadeIn"
            delay={0.2}
            className="relative hidden h-full flex-1 bg-secondary lg:block"
        >
            <div className="absolute inset-0 h-full w-full">
                <Scene />
            </div>
        </MotionWrapper>
    );
}
