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
              <ul className="space-y-1.5">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === cat.name
                          ? 'bg-neutral-900 text-white shadow-sm'
                          : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                      }`}>
                        <span>{cat.name}</span>
                      <span className={`text-xs ${selectedCategory === cat.name ? 'text-neutral-300' : 'text-neutral-400'}`}>
                        ({cat.count})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Secondary Left Promo Card (VELORA Style) */}
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900 text-white p-6 min-h-[320px] flex flex-col justify-end shadow-md">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                alt="Timeless Style Promo"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

              <div className="relative z-10 space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-300 bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-md inline-block">
                  Featured Look
                </span>
                <h4 className="text-xl font-bold leading-snug">
                  Timeless Style,<br />Modern Living.
                </h4>
                <p className="text-xs text-neutral-300">
                  Elevate your everyday outfit with modern luxury pieces.
                </p>
                <a
                  href="#explore"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-neutral-300 transition-colors pt-2"
                >
                  Explore Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </aside>
          {/* RIGHT MAIN AREA (Placeholder for Product Grid) */}
          <main className="lg:col-span-3">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200/80 min-h-[500px] flex items-center justify-center border-dashed">
              <p className="text-neutral-400 text-sm">
                Product Grid (Section 4) Yahan Active Selected Category: <strong className="text-neutral-800">{selectedCategory}</strong> ke mutabiq render hoga.
              </p>
            </div>
          </main>

        </div>
      </div>
    </section>
  );
}