"use client";

import React from "react";
import { useConfigurator } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";

export function SummaryFooter() {
    const { totalPrice, tier, loadout } = useConfigurator();

    const handleReserve = () => {
        const reservation = {
            user: "adam", // Placeholder user
            room: tier,
            addons: Object.entries(loadout)
                .filter(([_, value]) => value)
                .map(([key]) => key),
            totalPrice,
        };

        console.log("Reservation Request:", reservation);
        alert(JSON.stringify(reservation, null, 2));
    };

    return (
        <MotionWrapper
            animation="fadeIn"
            delay={0.4}
            className="sticky bottom-0 z-20 mt-auto border-t border-border bg-background/80 px-6 py-6 backdrop-blur-lg md:px-12 lg:px-16"
        >
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Monthly</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-semibold tracking-tight text-foreground">
                            ${totalPrice}
                        </span>
                        <span className="text-muted-foreground">/mo</span>
                    </div>
                </div>
                <Button size="lg" onClick={handleReserve} className="px-8 text-base">
                    Reserve Now
                </Button>
            </div>
        </MotionWrapper>
    );
}
