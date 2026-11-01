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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* ================= LEFT SIDEBAR ================= */}
          <aside className="lg:col-span-1 space-y-8">
            
            {/* Categories Menu */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                <h3 className="font-bold text-neutral-900 uppercase text-xs tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-neutral-500" />
                  Categories
                </h3>
              </div>
              