'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.fromTo(
        particle,
        {
          x: 0,
          y: 0,
          opacity: 0,
        },
        {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          opacity: Math.random() * 0.5 + 0.2,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          delay: index * 0.05,
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-charcoal-900 to-charcoal-800 overflow-hidden flex items-center justify-center"
    >
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-gold-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto section-padding">
        {/* Large bowl animation */}
        <motion.div
          className="flex justify-center mb-12"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-9xl md:text-10xl">🍲</div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream-50 leading-tight mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl md:text-2xl text-sand-300 font-light">
            Experience the taste of authentic Mauritian cuisine
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-4 rounded-full bg-gold-500 text-charcoal-900 font-bold text-lg hover:bg-gold-400 transition-all shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(248, 184, 85, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Commander Maintenant
          </motion.button>

          <motion.button
            className="px-12 py-4 rounded-full border-2 border-gold-400 text-gold-400 font-bold text-lg hover:bg-gold-400/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Menu
          </motion.button>
        </motion.div>

        {/* Secondary text */}
        <motion.p
          className="text-sand-300 text-sm mt-8 pt-8 border-t border-charcoal-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Available for pickup and delivery. Open daily from 10:00 AM. Order via WhatsApp for fastest service.
        </motion.p>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand-400/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
