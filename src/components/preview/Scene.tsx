"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import { RoomModel } from "./RoomModel";
import { useConfigurator } from "@/lib/store";

export function Scene() {
    return (
        <div className="h-full w-full">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[4, 4, 4]} fov={50} near={0.1} far={100} />

                {/* Lighting - Technical/Studio Setup */}
                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-bias={-0.0001}
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* The Dynamic Room */}
                <group position={[0, -1, 0]}>
                    <RoomModel />
                    <ContactShadows
                        position={[0, 0, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2.5}
                        far={4}
                        resolution={512}
                    />
                </group>

                {/* Controls */}
                <OrbitControls
                    makeDefault
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                    enableZoom={true}
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
}
