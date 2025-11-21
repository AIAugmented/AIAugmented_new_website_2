import React from 'react';

export enum BrandColors {
  DeepBlack = '#050505',
  ElectricBlue = '#00f0ff',
  NeuralYellow = '#ffd700',
  Platinum = '#e0e0e0',
  GlassBorder = 'rgba(255, 255, 255, 0.1)',
  GlassBg = 'rgba(255, 255, 255, 0.03)',
}

export interface ScrollState {
  progress: number; // 0 to 1 overall
  scrollY: number;
}

export interface AgentData {
  id: number;
  title: string;
  role: string;
  icon: string;
}

// Augment global JSX namespace to include Three.js elements used by React Three Fiber.
// Using declare global ensures these merge with React's standard intrinsic elements.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Primitives
      group: any;
      mesh: any;
      points: any;
      primitive: any;
      
      // Geometries
      bufferGeometry: any;
      octahedronGeometry: any;
      torusGeometry: any;
      sphereGeometry: any;
      planeGeometry: any;
      
      // Attributes & Helpers
      bufferAttribute: any;
      color: any;
      fog: any;
      
      // Materials
      pointsMaterial: any;
      meshStandardMaterial: any;
      meshPhysicalMaterial: any;
      meshBasicMaterial: any;
      
      // Lights
      pointLight: any;
      spotLight: any;
      ambientLight: any;
    }
  }
}
