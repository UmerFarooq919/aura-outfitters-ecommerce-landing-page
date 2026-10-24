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