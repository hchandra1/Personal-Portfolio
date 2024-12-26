import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const CoolModel = () => {
  const coolModel = useGLTF('/cool/scene.gltf'); // Load the fighting model from the 'cool' folder

  return (
    <primitive
      object={coolModel.scene}
      scale={0.1} // Use the original scale
      position={[-0.3, -3, -0.5]} // Position based on your original configuration
      rotation={[0, Math.PI / -1.75, 0]} // Adjust the rotation to set the model's orientation
    />
  );
};

const CoolModelCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 15], fov: 50 }} // Keep the original camera settings
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: '100vh', width: '100vw' }}
    >
      {/* Lighting to enhance the model's appearance */}
      <hemisphereLight intensity={0.5} groundColor="black" />
      <ambientLight intensity={0.7} />
      <directionalLight intensity={1.5} position={[10, 10, 10]} />

      {/* Render the fighting model */}
      <CoolModel />

      {/* OrbitControls: Restrict to rotation only */}
      <OrbitControls
        enableZoom={false} // Disable zooming
        enablePan={false} // Disable panning
        maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
        minPolarAngle={Math.PI / 2} // Restrict vertical rotation
      />
    </Canvas>
  );
};

export default CoolModelCanvas;
