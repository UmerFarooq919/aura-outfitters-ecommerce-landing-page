import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6"></div>
      {/* Top Newsletter & Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-2xl font-black tracking-widest uppercase text-white hover:opacity-80 transition">
              AURA<span className="text-neutral-500 font-light ml-1">OUTFITTERS</span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Crafting premium streetwear, tailored essentials, and modern footwear designed for everyday comfort and timeless style.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/umerfarooq919" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home Store</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop Collection</a></li>
              <li><a href="#collections" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Brand</a></li>
              <li><a href="#journal" className="hover:text-white transition-colors">Style Journal</a></li>
            </ul>
          </div>
          {/* Customer Care (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Customer Care</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ's</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          {/* Newsletter Box (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Join The Club</h4>
            <p className="text-xs text-neutral-400">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-neutral-800 border border-neutral-700 text-xs text-white px-4 py-3 rounded-xl focus:outline-none focus:border-white transition-all flex-grow"
              />
              <button 
                type="submit" 
                className="bg-white text-neutral-900 font-semibold px-4 py-3 rounded-xl text-xs hover:bg-neutral-200 transition-all flex items-center justify-center shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Aura Outfitters. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}