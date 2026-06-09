'use client';

import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: 'Raj', rating: 5, text: 'Best food in Quatre-Bornes!', image: '👨' },
  { id: 2, name: 'Sarah', rating: 5, text: 'Absolutely delicious', image: '👩' },
  { id: 3, name: 'Ahmed', rating: 5, text: 'Perfect for lunch', image: '👨' },
  { id: 4, name: 'Lisa', rating: 5, text: 'Amazing experience', image: '👩' },
  { id: 5, name: 'Kumar', rating: 5, text: 'Highly recommended', image: '👨' },
  { id: 6, name: 'Maya', rating: 5, text: 'Worth every rupee', image: '👩' },
];

export default function SocialProofSection() {
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
          <h2 className="text-4xl md:text-6xl font-bold text-cream-50 mb-4">Loved by Our Customers</h2>
          <p className="text-lg text-sand-300">Join thousands who enjoy N TI BOL</p>
        </motion.div>

        {/* Reviews grid with scroll animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="p-6 rounded-xl bg-gradient-to-br from-charcoal-700 to-charcoal-800 border border-charcoal-600 hover:border-gold-400 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-gold-400 text-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-cream-50 text-lg font-light mb-4 italic">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{review.image}</span>
                <h4 className="text-cream-50 font-semibold">{review.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: '5000+', label: 'Happy Customers' },
            { number: '4.9★', label: 'Average Rating' },
            { number: '50+', label: 'Daily Orders' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-charcoal-600"
              whileHover={{ scale: 1.05, borderColor: '#f8b855' }}
            >
              <p className="text-4xl md:text-5xl font-bold text-gold-400">{stat.number}</p>
              <p className="text-sand-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
