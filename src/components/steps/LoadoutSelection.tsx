"use client";

import React from "react";
import { useConfigurator, PRICES, Loadout } from "@/lib/store";
import { MotionWrapper, MotionItem } from "@/components/motion-wrapper";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Wifi, Monitor, Armchair } from "lucide-react";

const LOADOUTS: { id: keyof Loadout; label: string; price: number; icon: React.ElementType }[] = [
    {
        id: "starlink",
        label: "Starlink Priority",
        price: PRICES.starlink,
        icon: Wifi,
    },
    {
        id: "standingDesk",
        label: "Standing Desk",
        price: PRICES.standingDesk,
        icon: Armchair,
    },
    {
        id: "monitor",
        label: "4K Monitor Rental",
        price: PRICES.monitor,
        icon: Monitor,
    },
];

export function LoadoutSelection() {
    const { loadout, toggleLoadout } = useConfigurator();

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-2xl font-medium tracking-tight">Customize Loadout</h2>
                <p className="text-muted-foreground">Enhance your productivity with premium add-ons.</p>
            </div>

            <MotionWrapper animation="staggerContainer" className="space-y-4">
                {LOADOUTS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <MotionItem key={item.id}>
                            <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/50">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <Label htmlFor={item.id} className="text-base font-medium cursor-pointer">
                                            {item.label}
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            +${item.price}/mo
                                        </p>
                                    </div>
                                </div>
                                <Switch
                                    id={item.id}
                                    checked={loadout[item.id]}
                                    onCheckedChange={() => toggleLoadout(item.id)}
                                />
                            </div>
                        </MotionItem>
                    );
                })}
            </MotionWrapper>
        </div>
    );
}
