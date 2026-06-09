'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Menu', href: '#menu' },
    { label: 'History', href: '#story' },
    { label: 'Location', href: '#location' },
    { label: 'Order', href: '#order' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-700' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="text-xl md:text-2xl font-bold text-gold-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              N TI BOL
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm text-cream-50 hover:text-gold-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden md:block px-6 py-2 bg-gold-500 text-charcoal-900 font-semibold rounded-full hover:bg-gold-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="space-y-1">
              <motion.div
                className="w-6 h-0.5 bg-gold-400"
                animate={isOpen ? { rotate: 45, y: 8 } : {}}
              />
              <motion.div
                className="w-6 h-0.5 bg-gold-400"
                animate={isOpen ? { opacity: 0 } : {}}
              />
              <motion.div
                className="w-6 h-0.5 bg-gold-400"
                animate={isOpen ? { rotate: -45, y: -8 } : {}}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          animate={isOpen ? { height: 'auto' } : { height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2 border-t border-charcoal-700">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block py-2 text-cream-50 hover:text-gold-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button className="w-full mt-4 py-2 bg-gold-500 text-charcoal-900 font-semibold rounded-full">
              Order Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
