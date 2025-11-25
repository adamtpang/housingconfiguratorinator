"use client";

import React, { createContext, useContext, useState } from "react";

export type Tier = "pod" | "private" | "suite";

export interface Loadout {
    starlink: boolean;
    standingDesk: boolean;
    monitor: boolean;
}

interface ConfiguratorState {
    tier: Tier;
    loadout: Loadout;
    setTier: (tier: Tier) => void;
    toggleLoadout: (key: keyof Loadout) => void;
    totalPrice: number;
}

const ConfiguratorContext = createContext<ConfiguratorState | undefined>(undefined);

export const PRICES = {
    pod: 800,
    private: 1500,
    suite: 2200,
    starlink: 100,
    standingDesk: 50,
    monitor: 150,
};

export function ConfiguratorProvider({ children }: { children: React.ReactNode }) {
    const [tier, setTier] = useState<Tier>("pod");
    const [loadout, setLoadout] = useState<Loadout>({
        starlink: false,
        standingDesk: false,
        monitor: false,
    });

    const totalPrice =
        PRICES[tier] +
        (loadout.starlink ? PRICES.starlink : 0) +
        (loadout.standingDesk ? PRICES.standingDesk : 0) +
        (loadout.monitor ? PRICES.monitor : 0);

    const toggleLoadout = (key: keyof Loadout) => {
        setLoadout((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <ConfiguratorContext.Provider value={{ tier, loadout, setTier, toggleLoadout, totalPrice }}>
            {children}
        </ConfiguratorContext.Provider>
    );
}

export function useConfigurator() {
    const context = useContext(ConfiguratorContext);
    if (!context) {
        throw new Error("useConfigurator must be used within a ConfiguratorProvider");
    }
    return context;
}
