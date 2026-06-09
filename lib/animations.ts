// Animation utilities and helpers

import gsap from 'gsap';

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// GSAP utility functions
export const createScrollAnimation = (
  element: string | HTMLElement,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  trigger?: string
) => {
  return gsap.fromTo(element, fromVars, {
    ...toVars,
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
      markers: false,
    },
  });
};

export const createParallaxAnimation = (
  element: string | HTMLElement,
  distance: number = 50
) => {
  return gsap.to(element, {
    y: distance,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      markers: false,
    },
  });
};

export const staggerElements = (
  selector: string,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  stagger: number = 0.1
) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((element, index) => {
    gsap.fromTo(element, fromVars, {
      ...toVars,
      delay: index * stagger,
    });
  });
};

// Easing functions
export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
export const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

// Smooth easing for Lenis
export const lenisEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
