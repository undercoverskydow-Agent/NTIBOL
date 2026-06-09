// Menu items and constants
export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Mine Bouille',
    slug: 'mine-bouille',
    price: 180,
    description: 'Traditional minced meat with breadfruit and spices',
    longDescription:
      'Mine Bouille is a classic Mauritian dish that combines minced meat, breadfruit, and traditional spices. This hearty meal is perfect for any occasion.',
    ingredients: ['Minced meat', 'Breadfruit', 'Spices', 'Onions'],
    category: 'main',
  },
  {
    id: 2,
    name: 'Panini Poulet',
    slug: 'panini-poulet',
    price: 150,
    description: 'Grilled chicken sandwich with fresh herbs',
    longDescription:
      'Panini Poulet features succulent grilled chicken on fresh bread with aromatic herbs and sauce. A light yet satisfying option.',
    ingredients: ['Chicken', 'Herbs', 'Garlic', 'Bread'],
    category: 'sandwich',
  },
  {
    id: 3,
    name: 'Panini Agneau',
    slug: 'panini-agneau',
    price: 180,
    description: 'Tender lamb sandwich with special sauce',
    longDescription:
      'Panini Agneau brings premium lamb, tender and flavorful, on fresh bread with our special sauce and fresh vegetables.',
    ingredients: ['Lamb', 'Sauce', 'Bread', 'Vegetables'],
    category: 'sandwich',
  },
  {
    id: 4,
    name: 'Halim',
    slug: 'halim-quatre-bornes',
    price: 200,
    description: 'Slow-cooked meat and lentils',
    longDescription:
      'Halim Quatre-Bornes is a signature dish slow-cooked with tender meat and lentils, infused with traditional spices.',
    ingredients: ['Meat', 'Lentils', 'Spices', 'Herbs'],
    category: 'main',
  },
  {
    id: 5,
    name: 'Salmi Poulet',
    slug: 'salmi-poulet',
    price: 170,
    description: 'Chicken stew with aromatic spices',
    longDescription:
      'Salmi Poulet is a rich and aromatic chicken stew prepared with traditional Mauritian spices and fresh herbs.',
    ingredients: ['Chicken', 'Spices', 'Herbs', 'Vegetables'],
    category: 'main',
  },
  {
    id: 6,
    name: 'Boulettes',
    slug: 'boulettes-quatre-bornes',
    price: 140,
    description: 'Meatballs with special sauce',
    longDescription:
      'Boulettes are homemade meatballs crafted with care, served with our special sauce and traditional Mauritian flavors.',
    ingredients: ['Ground meat', 'Sauce', 'Spices', 'Herbs'],
    category: 'main',
  },
];

export const RESTAURANT_INFO = {
  name: 'N TI BOL',
  tagline: 'Saveurs & Fraîcheur au Quotidien',
  address: 'Main Street, Quatre-Bornes 72000, Mauritius',
  phone: '+230 XXXX XXXX',
  email: 'info@ntibol.mu',
  hours: {
    monday_friday: '10:00 AM - 9:00 PM',
    saturday: '11:00 AM - 10:00 PM',
    sunday: '11:00 AM - 8:00 PM',
  },
  coordinates: {
    lat: -20.2662,
    lng: 57.4918,
  },
};

export const DELIVERY_ZONES = [
  {
    zone: 'Quatre-Bornes',
    time: '15-20 mins',
    coverage: 'Full',
  },
  {
    zone: 'Phoenix',
    time: '20-25 mins',
    coverage: 'Full',
  },
  {
    zone: 'Curepipe',
    time: '25-35 mins',
    coverage: 'Limited',
  },
];

export const SOCIAL_REVIEWS = [
  {
    id: 1,
    name: 'Raj',
    rating: 5,
    text: 'Best food in Quatre-Bornes!',
    image: '👨',
  },
  {
    id: 2,
    name: 'Sarah',
    rating: 5,
    text: 'Absolutely delicious',
    image: '👩',
  },
  {
    id: 3,
    name: 'Ahmed',
    rating: 5,
    text: 'Perfect for lunch',
    image: '👨',
  },
  {
    id: 4,
    name: 'Lisa',
    rating: 5,
    text: 'Amazing experience',
    image: '👩',
  },
  {
    id: 5,
    name: 'Kumar',
    rating: 5,
    text: 'Highly recommended',
    image: '👨',
  },
  {
    id: 6,
    name: 'Maya',
    rating: 5,
    text: 'Worth every rupee',
    image: '👩',
  },
];

export const STATISTICS = {
  customers: '5000+',
  rating: '4.9',
  orders: '50+',
};

export const INGREDIENTS_STORY = [
  {
    name: 'Chicken',
    emoji: '🍗',
  },
  {
    name: 'Lamb',
    emoji: '🐑',
  },
  {
    name: 'Ourite',
    emoji: '🦑',
  },
  {
    name: 'Fresh Herbs',
    emoji: '🌿',
  },
  {
    name: 'Traditional Spices',
    emoji: '🌶️',
  },
];
