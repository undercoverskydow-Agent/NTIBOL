'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialDishes = [
  { id: 1, name: 'Mine Bouille', price: 180 },
  { id: 2, name: 'Panini Poulet', price: 150 },
  { id: 3, name: 'Panini Agneau', price: 180 },
  { id: 4, name: 'Halim', price: 200 },
  { id: 5, name: 'Salmi Poulet', price: 170 },
  { id: 6, name: 'Boulettes', price: 140 },
];

type OrderStep = 'type' | 'date' | 'time' | 'dishes' | 'review';

export default function OrderingSection() {
  const [currentStep, setCurrentStep] = useState<OrderStep>('type');
  const [orderType, setOrderType] = useState<'pickup' | 'delivery' | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = (dish: typeof initialDishes[0]) => {
    const existingItem = cart.find((item) => item.id === dish.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const handleNext = () => {
    const steps: OrderStep[] = ['type', 'date', 'time', 'dishes', 'review'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const steps: OrderStep[] = ['type', 'date', 'time', 'dishes', 'review'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const generateWhatsAppMessage = () => {
    const items = cart.map((item) => `${item.name} x${item.quantity}`).join('\n');
    return `Bonjour n ti Bol 👋\n\nNouvelle commande\n\nNom: ${customerName}\nTéléphone: ${customerPhone}\nType: ${orderType?.toUpperCase()}\nDate: ${selectedDate}\nHeure: ${selectedTime}\n\nCommande:\n${items}\n\nTotal: Rs ${totalPrice}`;
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section id="order" className="relative w-full bg-charcoal-900 section-padding overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-cream-50 mb-4">Build Your Order</h2>
          <p className="text-sand-300">Step {['type', 'date', 'time', 'dishes', 'review'].indexOf(currentStep) + 1} of 5</p>
        </motion.div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {['type', 'date', 'time', 'dishes', 'review'].map((step, index) => (
            <motion.div
              key={step}
              className={`h-2 flex-1 rounded-full transition-all ${
                currentStep === step ? 'bg-gold-400' : ['type', 'date', 'time', 'dishes', 'review'].indexOf(currentStep) > index ? 'bg-gold-600' : 'bg-charcoal-700'
              }`}
            />
          ))}
        </div>

        {/* Main container */}
        <motion.div
          className="rounded-2xl border border-charcoal-700 p-8 md:p-12 bg-charcoal-800/50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Order Type */}
            {currentStep === 'type' && (
              <motion.div
                key="type"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-cream-50">Choose your order type</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { type: 'pickup', label: 'Pickup', description: 'Collect at our location' },
                    { type: 'delivery', label: 'Delivery', description: 'We deliver to you' },
                  ].map((option) => (
                    <motion.button
                      key={option.type}
                      onClick={() => setOrderType(option.type as 'pickup' | 'delivery')}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        orderType === option.type
                          ? 'border-gold-400 bg-gold-400/10'
                          : 'border-charcoal-600 hover:border-gold-400'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h4 className="text-xl font-semibold text-cream-50">{option.label}</h4>
                      <p className="text-sand-300 text-sm mt-1">{option.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date */}
            {currentStep === 'date' && (
              <motion.div
                key="date"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-cream-50">Select a date</h3>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-charcoal-700 border border-charcoal-600 text-cream-50 focus:border-gold-400 focus:outline-none"
                />
              </motion.div>
            )}

            {/* Step 3: Time */}
            {currentStep === 'time' && (
              <motion.div
                key="time"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-cream-50">Select a time</h3>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-charcoal-700 border border-charcoal-600 text-cream-50 focus:border-gold-400 focus:outline-none"
                >
                  <option value="">Choose a time</option>
                  {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((hour) => (
                    <option key={hour} value={`${hour}:00`}>
                      {hour < 12 ? `${hour}:00 AM` : hour === 12 ? '12:00 PM' : `${hour - 12}:00 PM`}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Step 4: Dishes */}
            {currentStep === 'dishes' && (
              <motion.div
                key="dishes"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-cream-50">Add dishes to your order</h3>

                {/* Dishes grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {initialDishes.map((dish) => (
                    <motion.button
                      key={dish.id}
                      onClick={() => addToCart(dish)}
                      className="p-4 rounded-lg border border-charcoal-600 hover:border-gold-400 text-left transition-all hover:bg-charcoal-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-cream-50">{dish.name}</h4>
                          <p className="text-gold-400">Rs {dish.price}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gold-400" />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Cart summary */}
                {cart.length > 0 && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg bg-gold-400/10 border border-gold-400/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h4 className="font-semibold text-cream-50 mb-2">Cart ({cart.length} items)</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                          <span className="text-sand-300">{item.name}</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-gold-400 hover:text-gold-300"
                            >
                              −
                            </button>
                            <span className="w-4 text-center text-cream-50">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-gold-400 hover:text-gold-300"
                            >
                              +
                            </button>
                            <span className="text-gold-400 ml-2">Rs {item.price * item.quantity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gold-400/20 font-semibold text-cream-50 flex justify-between">
                      <span>Total:</span>
                      <span>Rs {totalPrice}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Step 5: Review */}
            {currentStep === 'review' && (
              <motion.div
                key="review"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-cream-50">Review your order</h3>

                {/* Customer info */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-charcoal-700 border border-charcoal-600 text-cream-50 placeholder-charcoal-400 focus:border-gold-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Your phone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-charcoal-700 border border-charcoal-600 text-cream-50 placeholder-charcoal-400 focus:border-gold-400 focus:outline-none"
                  />
                </div>

                {/* Order summary */}
                <motion.div className="p-6 rounded-lg bg-charcoal-700 border border-charcoal-600 space-y-4">
                  <div className="space-y-3">
                    <p><span className="text-sand-300">Type:</span> <span className="text-cream-50 font-semibold">{orderType?.toUpperCase()}</span></p>
                    <p><span className="text-sand-300">Date:</span> <span className="text-cream-50 font-semibold">{selectedDate}</span></p>
                    <p><span className="text-sand-300">Time:</span> <span className="text-cream-50 font-semibold">{selectedTime}</span></p>
                  </div>

                  <div className="border-t border-charcoal-600 pt-4 space-y-2">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-sand-300">{item.name} x{item.quantity}</span>
                        <span className="text-gold-400">Rs {item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-charcoal-600 pt-4 flex justify-between font-bold text-lg">
                    <span className="text-cream-50">Total:</span>
                    <span className="text-gold-400">Rs {totalPrice}</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-8 pt-8 border-t border-charcoal-700">
            {currentStep !== 'type' && (
              <motion.button
                onClick={handlePrevious}
                className="flex-1 px-6 py-3 rounded-lg border border-charcoal-600 text-cream-50 font-semibold hover:border-gold-400 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back
              </motion.button>
            )}

            {currentStep !== 'review' && (
              <motion.button
                onClick={handleNext}
                disabled={
                  (currentStep === 'type' && !orderType) ||
                  (currentStep === 'date' && !selectedDate) ||
                  (currentStep === 'time' && !selectedTime) ||
                  (currentStep === 'dishes' && cart.length === 0)
                }
                className="flex-1 px-6 py-3 rounded-lg bg-gold-500 text-charcoal-900 font-semibold hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Next
              </motion.button>
            )}

            {currentStep === 'review' && (
              <motion.button
                onClick={handleWhatsAppOrder}
                disabled={!customerName || !customerPhone}
                className="flex-1 px-6 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Order via WhatsApp
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
