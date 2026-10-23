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