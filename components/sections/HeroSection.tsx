'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animations
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
      });

      // Bowl expansion animation
      timeline
        .fromTo(
          '.hero-bowl',
          {
            scale: 0.3,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
          },
          0
        )
        .fromTo(
          '.hero-title',
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          },
          1
        )
        .fromTo(
          '.hero-subtitle',
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          },
          1.5
        )
        .fromTo(
          '.hero-scroll-cta',
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            repeat: -1,
            yoyo: true,
          },
          2
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-charcoal-900 overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-900" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sand-400/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div ref={containerRef} className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Main content */}
        <div className="text-center space-y-8 md:space-y-12">
          {/* Bowl */}
          <motion.div
            className="hero-bowl"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              {/* Bowl container with 3D perspective */}
              <div className="relative w-full h-full perspective">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-sand-400 to-sand-600 shadow-2xl" />
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-charcoal-900/20 to-cream-50/10" />

                {/* Steam animation */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, -40, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 blur-xl" />
                </motion.div>
              </div>

              {/* Floating ingredients */}
              {['Chicken', 'Lamb', 'Ourite', 'Herbs', 'Spices'].map((ingredient, i) => (
                <motion.div
                  key={ingredient}
                  className="absolute text-xs md:text-sm font-semibold text-gold-300"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.cos(i * (Math.PI * 2) / 5) * 30, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    top: `${50 + Math.sin(i * (Math.PI * 2) / 5) * 40}%`,
                    left: `${50 + Math.cos(i * (Math.PI * 2) / 5) * 40}%`,
                  }}
                >
                  {ingredient}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            className="hero-title space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream-50">N TI BOL</h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle text-lg md:text-2xl text-sand-300 font-light tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Saveurs & Fraîcheur au Quotidien
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="hero-scroll-cta pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-cream-400">Scroll to explore</p>
              <svg className="w-6 h-6 text-gold-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
