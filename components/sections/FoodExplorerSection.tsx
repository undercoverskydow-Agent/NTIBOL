'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const dishes = [
  {
    id: 1,
    name: 'Mine Bouille',
    description: 'Traditional minced meat with breadfruit and spices',
    price: 'Rs 180',
    ingredients: ['Minced meat', 'Breadfruit', 'Spices', 'Onions'],
    image: '🍲',
  },
  {
    id: 2,
    name: 'Panini Poulet',
    description: 'Grilled chicken with fresh herbs',
    price: 'Rs 150',
    ingredients: ['Chicken', 'Herbs', 'Garlic', 'Bread'],
    image: '🥪',
  },
  {
    id: 3,
    name: 'Panini Agneau',
    description: 'Tender lamb sandwich with sauce',
    price: 'Rs 180',
    ingredients: ['Lamb', 'Sauce', 'Bread', 'Vegetables'],
    image: '🥪',
  },
  {
    id: 4,
    name: 'Halim',
    description: 'Slow-cooked meat and lentils',
    price: 'Rs 200',
    ingredients: ['Meat', 'Lentils', 'Spices', 'Herbs'],
    image: '🍲',
  },
  {
    id: 5,
    name: 'Salmi Poulet',
    description: 'Chicken stew with aromatic spices',
    price: 'Rs 170',
    ingredients: ['Chicken', 'Spices', 'Herbs', 'Vegetables'],
    image: '🍲',
  },
  {
    id: 6,
    name: 'Boulettes',
    description: 'Meatballs with special sauce',
    price: 'Rs 140',
    ingredients: ['Ground meat', 'Sauce', 'Spices', 'Herbs'],
    image: '🍖',
  },
];

export default function FoodExplorerSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full bg-charcoal-800 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cream-50 mb-4">Explore Our Menu</h2>
          <p className="text-lg text-sand-300">Each dish crafted with passion</p>
        </motion.div>

        {/* Dishes grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(dish.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card */}
              <motion.div
                className="relative p-6 rounded-2xl bg-gradient-to-br from-charcoal-700 to-charcoal-800 border border-charcoal-600 hover:border-gold-400 transition-colors overflow-hidden"
              >
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Image */}
                  <motion.div
                    className="text-6xl text-center mb-4"
                    animate={hoveredId === dish.id ? { scale: 1.2, y: -10 } : { scale: 1, y: 0 }}
                  >
                    {dish.image}
                  </motion.div>

                  {/* Title and price */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-cream-50">{dish.name}</h3>
                      <p className="text-sand-300 text-sm mt-1">{dish.description}</p>
                    </div>
                    <span className="text-gold-400 font-bold whitespace-nowrap ml-2">{dish.price}</span>
                  </div>

                  {/* Ingredients */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredId === dish.id ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-charcoal-600 space-y-2">
                      <p className="text-xs uppercase tracking-widest text-sand-400">Ingredients</p>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ingredient) => (
                          <span
                            key={ingredient}
                            className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-300 text-xs"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Add to cart button */}
                  <motion.button
                    className="w-full py-2 rounded-lg bg-gold-500 text-charcoal-900 font-semibold hover:bg-gold-400 transition-colors mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Order
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
