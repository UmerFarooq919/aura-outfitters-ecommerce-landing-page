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
    {
      id: 4,
      name: 'Classic Minimalist Cap',
      category: 'Accessories',
      price: '$40.00',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
      tag: ''
    },
    {
      id: 5,
      name: 'Oversized Heavyweight Tee',
      category: 'Shirts',
      price: '$65.00',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
      tag: 'Popular'
    },
    {
      id: 6,
      name: 'Silk Blend Necktie',
      category: 'Accessories',
      price: '$50.00',
      image: 'https://images.unsplash.com/photo-1589756823695-cb13bc92e4c4?q=80&w=800&auto=format&fit=crop',
      tag: ''
    }
  ];