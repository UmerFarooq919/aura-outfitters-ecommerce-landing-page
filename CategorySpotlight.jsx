import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategorySpotlight() {
  return (
    <section className="bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-6"></div>
      {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 bg-neutral-200/60 px-3 py-1 rounded-full">
            Curated Spaces
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-3">
            Category Spotlights
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 mt-2">
            Explore our signature lines crafted with precision and designed for the modern wardrobe.
          </p>
        </div>
        {/* Two-Column Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Spotlight Banner 1: Outerwear */}
          <div className="relative overflow-hidden rounded-2xl min-h-[400px] flex items-end p-8 md:p-10 group shadow-sm">
            {/* Background Image with Zoom on Hover */}
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop" 
              alt="Tailored Outerwear" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
            