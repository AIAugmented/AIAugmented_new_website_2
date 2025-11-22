import React from 'react';
import { ThreeElements } from '@react-three/fiber';

// Augment the global JSX namespace to include Three.js elements (mesh, group, etc.)
// This resolves "Property ... does not exist on type 'JSX.IntrinsicElements'" errors.
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

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