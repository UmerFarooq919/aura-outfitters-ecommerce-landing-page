import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

export default function ProductGrid() {
  // Sample products data representing multi-category inventory
  const products = [
    {
      id: 1,
      name: 'Minimalist Oxford Shirt',
      category: 'Shirts',
      price: '$85.00',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
      tag: 'New'
    },
    {
      id: 2,
      name: 'Tailored Pleated Chinos',
      category: 'Pants',
      price: '$110.00',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
      tag: 'Best Seller'
    },
    {
      id: 3,
      name: 'Urban Streetwear Runner',
      category: 'Shoes',
      price: '$145.00',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
      tag: 'Sale'
    },