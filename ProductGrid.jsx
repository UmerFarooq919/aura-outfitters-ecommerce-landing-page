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
  return (
    <div className="space-y-6">
      
      {/* Grid Header & Sorting Options */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200/80">
        <div>
          <h2 className="text-lg font-bold text-neutral-900">Featured Products</h2>
          <p className="text-xs text-neutral-500">Showing 6 of 48 items</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-500 font-medium">Sort by:</span>
          <select className="bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs rounded-lg px-3 py-2 outline-none focus:border-neutral-900 transition-all">
            <option>Latest Collection</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>
      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Tag Badge */}
              {product.tag && (
                <span className="absolute top-3 left-3 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
              {/* Wishlist Button */}
              <button 
                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-white transition-all shadow-sm"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
              {/* Quick Add Overlay Button on Hover */}
              <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-neutral-900/90 backdrop-blur-md text-white font-medium text-xs py-3 rounded-xl hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 shadow-lg">
                  <ShoppingBag className="w-4 h-4" />
                  Quick Add
                </button>
              </div>
            </div>