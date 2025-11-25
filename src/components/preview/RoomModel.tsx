"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useConfigurator } from "@/lib/store";
import { Box, Cylinder, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

// Materials
const wallMaterial = new THREE.MeshStandardMaterial({
    color: "#f5f5f7",
    roughness: 0.1,
    metalness: 0.1,
});

const floorMaterial = new THREE.MeshStandardMaterial({
    color: "#e5e5e5",
    roughness: 0.8,
});

const accentMaterial = new THREE.MeshStandardMaterial({
    color: "#0071E3",
    roughness: 0.2,
    metalness: 0.5,
});

const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: "#ffffff",
    transmission: 0.9,
    opacity: 0.5,
    transparent: true,
    roughness: 0,
    ior: 1.5,
});

export function RoomModel() {
    const { tier, loadout } = useConfigurator();
    const groupRef = useRef<THREE.Group>(null);

    // Smooth rotation or animation could go here
    useFrame((state) => {
        if (groupRef.current) {
            // groupRef.current.rotation.y += 0.001;
        }
    });

    const getRoomGeometry = () => {
        switch (tier) {
            case "pod":
                return (
                    <group>
                        {/* Pod Structure - Compact Box */}
                        <mesh position={[0, 1, 0]} castShadow receiveShadow material={wallMaterial}>
                            <boxGeometry args={[2, 2, 2]} />
                        </mesh>
                        {/* Open front */}
                        <mesh position={[0, 1, 0.9]} material={glassMaterial}>
                            <planeGeometry args={[1.8, 1.8]} />
                        </mesh>
                        <Html position={[0, 2.2, 0]} center>
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-xs backdrop-blur-md">
                                The Pod
                            </div>
                        </Html>
                    </group>
                );
            case "private":
                return (
                    <group>
                        {/* Private Room - Larger Box */}
                        <mesh position={[0, 1.25, 0]} castShadow receiveShadow material={wallMaterial}>
                            <boxGeometry args={[3, 2.5, 3]} />
                        </mesh>
                        {/* Window */}
                        <mesh position={[0, 1.5, 1.51]} material={glassMaterial}>
                            <planeGeometry args={[1, 1]} />
                        </mesh>
                        <Html position={[0, 2.8, 0]} center>
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-xs backdrop-blur-md">
                                Private Room
                            </div>
                        </Html>
                    </group>
                );
            case "suite":
                return (
                    <group>
                        {/* Suite - Complex Shape */}
                        <mesh position={[-1, 1.25, 0]} castShadow receiveShadow material={wallMaterial}>
                            <boxGeometry args={[2.5, 2.5, 3]} />
                        </mesh>
                        <mesh position={[1, 1, 0]} castShadow receiveShadow material={wallMaterial}>
                            <boxGeometry args={[1.5, 2, 3]} />
                        </mesh>
                        <Html position={[0, 2.8, 0]} center>
                            <div className="bg-black/80 text-white px-2 py-1 rounded text-xs backdrop-blur-md">
                                Executive Suite
                            </div>
                        </Html>
                    </group>
                );
        }
    };

    return (
        <group ref={groupRef}>
            {/* Base Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow material={floorMaterial}>
                <circleGeometry args={[4, 64]} />
            </mesh>

            {/* Dynamic Room Geometry */}
            <motion.group
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
            >
                {getRoomGeometry()}
            </motion.group>

            {/* Loadout Items */}
            {loadout.starlink && (
                <group position={[1.2, 2.5, 1.2]}>
                    <mesh material={accentMaterial} castShadow>
                        <cylinderGeometry args={[0.1, 0.1, 0.5]} />
                    </mesh>
                    <mesh position={[0, 0.3, 0]} rotation={[0.5, 0, 0]} material={wallMaterial}>
                        <boxGeometry args={[0.4, 0.05, 0.6]} />
                    </mesh>
                    <Html position={[0, 0.5, 0]} center>
                        <div className="bg-blue-500/80 text-white px-1.5 py-0.5 rounded-[4px] text-[10px] backdrop-blur-md">
                            Starlink
                        </div>
                    </Html>
                </group>
            )}

            {loadout.standingDesk && (
                <group position={[-0.8, 0.5, 0.8]}>
                    <mesh material={wallMaterial} castShadow>
                        <boxGeometry args={[1, 0.05, 0.5]} />
                    </mesh>
                    <mesh position={[-0.4, -0.25, 0]} material={accentMaterial}>
                        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
                    </mesh>
                    <mesh position={[0.4, -0.25, 0]} material={accentMaterial}>
                        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
                    </mesh>
                </group>
            )}

            {loadout.monitor && (
                <group position={[-0.8, 0.8, 0.8]}>
                    <mesh material={new THREE.MeshStandardMaterial({ color: "#111" })} castShadow>
                        <boxGeometry args={[0.6, 0.35, 0.02]} />
                    </mesh>
                    <mesh position={[0, -0.2, 0]} material={accentMaterial}>
                        <cylinderGeometry args={[0.02, 0.02, 0.2]} />
                    </mesh>
                </group>
            )}
        </group>
    );
}
