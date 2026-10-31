import React, { useState } from 'react';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

export default function StoreLayout() {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');

  const categories = [
    { name: 'All Collections', count: 48 },
    { name: 'Shirts', count: 24 },
    { name: 'Pants', count: 18 },
    { name: 'Shoes', count: 12 },
    { name: 'Accessories', count: 16 },
    { name: 'Outerwear', count: 10 },
    { name: 'New Arrivals', count: 8 },
    { name: 'Best Sellers', count: 12 },
  ];

  return (
    <section className="bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
    {/* Main Grid: Left Sidebar (1/4 width) + Right Main Area (3/4 width) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8"></div>