'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.story-ingredient').forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: -100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ingredients = [
    { name: 'Chicken', emoji: '🍗' },
    { name: 'Lamb', emoji: '🐑' },
    { name: 'Ourite', emoji: '🦑' },
    { name: 'Fresh Herbs', emoji: '🌿' },
    { name: 'Traditional Spices', emoji: '🌶️' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-charcoal-800 section-padding overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-4">The Story</h2>
          <p className="text-lg text-sand-300">Every ingredient tells a story</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-16">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              className="story-ingredient flex items-center gap-8 md:gap-12"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center min-w-fit">
                <motion.div
                  className="w-6 h-6 rounded-full bg-gold-400 shadow-lg"
                  whileHover={{ scale: 1.3 }}
                />
                {index !== ingredients.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-gold-400 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <motion.div
                className="flex-1 p-6 rounded-lg glass backdrop-blur-xl"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl">{ingredient.emoji}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-cream-50">{ingredient.name}</h3>
                </div>
                <p className="text-sand-300 leading-relaxed">
                  Sourced with care and tradition, {ingredient.name.toLowerCase()} brings authentic flavor to every N TI BOL experience.
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
