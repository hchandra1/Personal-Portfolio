import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Preload } from "@react-three/drei";
import * as THREE from "three";

const Ball = ({ imgUrl, outlineColor }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = React.useRef();

  // Continuous rotation animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.4;  // Faster rotation
    meshRef.current.rotation.x = Math.sin(t * 0.6) * 0.25;  // Subtle rocking effect
  });

  return (
    <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
      {/* Cube Geometry */}
      <boxGeometry args={[1, 1, 1]} />

      {/* Apply tech icon to all faces */}
      {[...Array(6)].map((_, index) => (
        <meshBasicMaterial key={index} attachArray="material" map={decal} />
      ))}

      {/* Outline with customizable color */}
      <mesh>
        <boxGeometry args={[1.07, 1.07, 1.07]} />
        <meshBasicMaterial color={outlineColor || "#ffffff"} wireframe />
      </mesh>
    </mesh>
  );
};

const BallCanvas = ({ icon, outlineColor }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} outlineColor={outlineColor} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
