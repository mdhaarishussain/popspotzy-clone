// Custom wrapper to avoid export * issues
"use client";

// Try importing from the main module but re-export specifically
import * as FramerMotion from 'framer-motion';

// Re-export only what we need
export const motion = FramerMotion.motion;
export const AnimatePresence = FramerMotion.AnimatePresence;
export const useAnimation = FramerMotion.useAnimation;
export const useMotionValue = FramerMotion.useMotionValue;
export const useTransform = FramerMotion.useTransform;
export const useSpring = FramerMotion.useSpring;
