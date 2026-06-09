'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: 1,
    name: 'Mine Bouille',
    description: 'Traditional minced meat with spices and breadfruit',
    color: 'from-orange-600 to-orange-800',
  },
  {
    id: 2,
    name: 'Panini Poulet',
    description: 'Grilled chicken sandwich with fresh herbs',
    color: 'from-yellow-600 to-orange-700',
  },
  {
    id: 3,
    name: 'Panini Agneau',
    description: 'Tender lamb sandwich with special sauce',
    color: 'from-red-600 to-red-800',
  },
  {
    id: 4,
    name: 'Halim Quatre-Bornes',
    description: 'Slow-cooked meat with lentils',
    color: 'from-amber-700 to-amber-900',
  },
  {
    id: 5,
    name: 'Salmi Poulet',
    description: 'Chicken stew with aromatic spices',
    color: 'from-yellow-700 to-yellow-900',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const scrollWidth = containerRef.current!.scrollWidth - window.innerWidth;

      gsap.to(containerRef.current, {
        x: -scrollWidth,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-charcoal-900 overflow-hidden"
    >
      <div className="relative h-screen flex items-center">
        {/* Section heading */}
        <motion.div
          className="absolute top-20 left-8 md:left-12 z-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream-50">The Experience</h2>
          <p className="text-sand-300 mt-2">Scroll horizontally to explore</p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="overflow-hidden w-full">
          <motion.div
            ref={containerRef}
            className="flex gap-8 p-8 min-w-max"
            initial={{ x: 0 }}
          >
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                className="min-w-screen h-screen flex flex-col items-center justify-center p-8"
              >
                {/* Dish card */}
                <motion.div
                  className={`relative w-full max-w-2xl h-full rounded-3xl bg-gradient-to-br ${dish.color} p-8 shadow-2xl overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between text-white">
                    <div>
                      <h3 className="text-5xl md:text-6xl font-bold mb-4">{dish.name}</h3>
                      <p className="text-lg md:text-2xl opacity-90 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <motion.button
                        className="px-8 py-3 bg-white/20 backdrop-blur-md rounded-full font-semibold hover:bg-white/30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
