import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative bg-neutral-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 min-h-[420px] md:min-h-[480px] flex items-center p-8 md:p-16">
          
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

              <a href="#new-arrivals" className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white font-medium px-6 py-3.5 rounded-lg text-sm backdrop-blur-sm border border-white/20 transition-all">
                New Arrivals
              </a>
            </div>
          </div>

          {/* Slider Controls Indicator */}
          <div className="absolute bottom-6 right-8 hidden sm:flex items-center gap-2 z-10">
            <span className="w-8 h-1 bg-white rounded-full"></span>
            <span className="w-2 h-1 bg-white/40 rounded-full"></span>
            <span className="w-2 h-1 bg-white/40 rounded-full"></span>
          </div>

        </div>
      </div>
    </section>
  );
}