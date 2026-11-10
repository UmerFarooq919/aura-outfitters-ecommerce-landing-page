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