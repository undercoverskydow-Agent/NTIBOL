// Type definitions for the N TI BOL application

export interface MenuItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  longDescription: string;
  ingredients: string[];
  category: 'main' | 'sandwich' | 'drink';
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  orderType: 'pickup' | 'delivery';
  date: string;
  time: string;
  items: CartItem[];
  total: number;
  createdAt: Date;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
}

export interface ReviewCard {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface DeliveryZone {
  zone: string;
  time: string;
  coverage: 'Full' | 'Limited';
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    monday_friday: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Ingredient {
  name: string;
  emoji: string;
}

export type OrderStep = 'type' | 'date' | 'time' | 'dishes' | 'review';

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}
