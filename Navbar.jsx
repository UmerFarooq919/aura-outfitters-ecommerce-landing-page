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

