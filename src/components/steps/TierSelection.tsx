"use client";

import React from "react";
import { useConfigurator, PRICES, Tier } from "@/lib/store";
import { MotionWrapper, MotionItem } from "@/components/motion-wrapper";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const TIERS: { id: Tier; label: string; price: number; description: string }[] = [
    {
        id: "pod",
        label: "The Pod",
        price: PRICES.pod,
        description: "Essential privacy in a shared community space.",
    },
    {
        id: "private",
        label: "Private Room",
        price: PRICES.private,
        description: "Your own sanctuary with ample space and light.",
    },
    {
        id: "suite",
        label: "Executive Suite",
        price: PRICES.suite,
        description: "Premium living with ensuite bathroom and workspace.",
    },
];

export function TierSelection() {
    const { tier, setTier } = useConfigurator();

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl font-medium tracking-tight">Select Your Space</h2>
                <p className="text-muted-foreground">Choose the accommodation that fits your lifestyle.</p>
            </div>

            <MotionWrapper animation="staggerContainer" className="grid gap-4">
                {TIERS.map((item) => {
                    const isSelected = tier === item.id;
                    return (
                        <MotionItem key={item.id}>
                            <div
                                onClick={() => setTier(item.id)}
                                className={cn(
                                    "group relative cursor-pointer rounded-xl border p-6 transition-all duration-300 ease-out",
                                    isSelected
                                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                                        : "border-border bg-card hover:border-primary/50 hover:bg-secondary/50"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <h3 className="font-medium text-foreground">{item.label}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium text-foreground">
                                            ${item.price}
                                            <span className="text-muted-foreground">/mo</span>
                                        </span>
                                        <div
                                            className={cn(
                                                "flex h-5 w-5 items-center justify-center rounded-full border transition-colors",
                                                isSelected
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "border-muted-foreground/30 group-hover:border-primary/50"
                                            )}
                                        >
                                            {isSelected && <Check className="h-3 w-3" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MotionItem>
                    );
                })}
            </MotionWrapper>
        </div>
    );
}
