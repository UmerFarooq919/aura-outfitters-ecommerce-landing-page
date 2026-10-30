import React from 'react';
import { ShoppingBag, Search, User } from 'lucide-react';

export default function Navbar({ cartCount = 2 }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="text-2xl font-black tracking-widest uppercase text-neutral-900 hover:opacity-80 transition">
          AURA<span className="text-neutral-400 font-light ml-1">OUTFITTERS</span>
        </a>
        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <a href="#home" className="hover:text-neutral-900 transition">Home</a>
          <a href="#shop" className="text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-1">Shop</a>
          <a href="#collections" className="hover:text-neutral-900 transition">Collections</a>
          <a href="#about" className="hover:text-neutral-900 transition">About</a>
          <a href="#journal" className="hover:text-neutral-900 transition">Journal</a>
        </nav>
        {/* Right Icons / Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition" aria-label="Account">
            <User className="w-5 h-5" />
          </button>

          <button className="relative p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-neutral-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative bg-neutral-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 min-h-[420px] md:min-h-[480px] flex items-center p-8 md:p-16"></div>
        {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1600&auto=format&fit=crop" 
              alt="Aura Outfitters Premium Collection" 
              className="w-full h-full object-cover object-center opacity-90"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-neutral-900/40 to-transparent"></div>
          </div>
          {/* Hero Content */}
          <div className="relative z-10 max-w-xl text-white">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-neutral-300 mb-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              Men's & Urban Collection
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Premium Essentials <br className="hidden sm:block" />for Modern Style.
            </h1>
            <p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Discover timeless streetwear, tailored pants, custom caps, and shoes designed for comfort and everyday versatility.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#shop" className="inline-flex items-center gap-2 bg-white text-neutral-900 font-semibold px-6 py-3.5 rounded-lg text-sm hover:bg-neutral-200 transition-all shadow-md">
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </a>