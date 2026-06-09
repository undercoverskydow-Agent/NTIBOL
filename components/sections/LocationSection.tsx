'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="relative w-full bg-charcoal-900 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cream-50 mb-4">Find Us</h2>
          <p className="text-lg text-sand-300">Visit us in Quatre-Bornes or order for delivery</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Address card */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-charcoal-700 hover:border-gold-400 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cream-50 mb-2">Location</h3>
                  <p className="text-sand-300 leading-relaxed">
                    N TI BOL Restaurant<br />
                    Main Street<br />
                    Quatre-Bornes 72000<br />
                    Mauritius
                  </p>
                  <motion.button
                    className="mt-4 px-4 py-2 rounded-lg bg-gold-500 text-charcoal-900 font-semibold hover:bg-gold-400 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Directions
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Phone card */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-charcoal-700 hover:border-gold-400 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cream-50 mb-2">Contact</h3>
                  <p className="text-sand-300">+230 XXXX XXXX</p>
                  <motion.a
                    href="https://wa.me/230"
                    className="mt-4 inline-block px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    WhatsApp Us
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Hours card */}
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border border-charcoal-700 hover:border-gold-400 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-cream-50 mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-sand-300 text-sm">
                    <p>Monday - Friday: 10:00 AM - 9:00 PM</p>
                    <p>Saturday: 11:00 AM - 10:00 PM</p>
                    <p>Sunday: 11:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-charcoal-700 h-96 lg:h-auto min-h-96"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-sand-300 mb-4">Google Maps Integration</p>
                <motion.button
                  className="px-6 py-2 rounded-lg bg-gold-500 text-charcoal-900 font-semibold hover:bg-gold-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on Map
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Delivery zones */}
        <motion.div
          className="mt-20 p-8 rounded-2xl border border-charcoal-700 bg-charcoal-800/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cream-50 mb-6">Delivery Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { zone: 'Quatre-Bornes', time: '15-20 mins', coverage: '✓ Full' },
              { zone: 'Phoenix', time: '20-25 mins', coverage: '✓ Full' },
              { zone: 'Curepipe', time: '25-35 mins', coverage: '✓ Limited' },
            ].map((delivery) => (
              <motion.div
                key={delivery.zone}
                className="p-4 rounded-lg bg-charcoal-700 border border-charcoal-600"
                whileHover={{ scale: 1.05, borderColor: '#f8b855' }}
              >
                <h4 className="font-semibold text-cream-50 mb-2">{delivery.zone}</h4>
                <p className="text-sm text-sand-300">~{delivery.time}</p>
                <p className="text-sm text-gold-400 mt-1">{delivery.coverage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
