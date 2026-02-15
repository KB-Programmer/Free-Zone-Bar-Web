import React from 'react';
import { menuTitle, menuFood, menuDrink } from '../constants';
import Card from './Card';
import Footer from './footer';

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black
                    overflow-hidden">

      {/* ── Hero Banner (NEW) ── */}
      <div className="relative bg-gradient-to-r from-gray-950 via-black 
                      to-gray-950 py-20 md:py-28 border-b border-white/5">
        {/* Decorative Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 
                          rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-500/5 
                          rounded-full blur-3xl animate-pulse 
                          [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                          -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] 
                          rounded-full blur-3xl" />
        </div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
               backgroundSize: '30px 30px'
             }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-5 py-2 mb-6 text-xs font-bold 
                           tracking-[0.25em] uppercase text-white/70 
                           bg-white/5 backdrop-blur-sm rounded-full 
                           border border-white/10 shadow-lg shadow-black/50
                           animate-[fadeInDown_0.6s_ease-out]">
            🍽️ Explore Our Selection
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold 
                         text-white mb-6 tracking-tight leading-[1.1]
                         animate-[fadeInUp_0.8s_ease-out]">
            Our <span className="bg-gradient-to-r from-amber-200 via-yellow-100 
                                  to-amber-300 bg-clip-text text-transparent">
              Menu
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto 
                        leading-relaxed animate-[fadeInUp_1s_ease-out]">
            Carefully crafted dishes & refreshing beverages for every taste
          </p>
          {/* Scroll Indicator */}
          <div className="mt-10 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-600" fill="none" 
                 stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Food Section ── */}
      <section className="py-16 md:py-24 relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 
                        rounded-full blur-3xl opacity-50 -translate-y-1/2 
                        translate-x-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-amber-400 rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase 
                               text-amber-400">
                Food
              </span>
              <span className="w-8 h-[2px] bg-amber-400 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold 
                           mb-4 tracking-tight leading-tight
                           bg-gradient-to-r from-white via-gray-100 
                           to-gray-300 bg-clip-text text-transparent">
              {menuTitle.Food.title}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto 
                          leading-relaxed">
              {menuTitle.Food.description}
            </p>
            {/* Decorative underline */}
            <div className="mt-6 flex justify-center gap-1.5">
              <span className="w-3 h-1 bg-amber-400 rounded-full" />
              <span className="w-8 h-1 bg-amber-600 rounded-full" />
              <span className="w-3 h-1 bg-amber-400 rounded-full" />
            </div>
          </div>

          {/* Food Content */}
          <div className="">

            {/* Food Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                            xl:grid-cols-4 gap-6 md:gap-8">
              {menuFood.map((item, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500 
                             hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card
                    image={item.preview.image}
                    desc={item.preview.name}
                    btn={item.preview.button}
                  />
                </div>
              ))}
            </div>

            {/* More Button */}
            <div className="flex justify-center mt-12">
              <button className="group relative px-8 py-3.5 text-sm font-semibold 
                                 text-amber-400 bg-amber-400/10 rounded-2xl 
                                 border-2 border-amber-400/20
                                 overflow-hidden transition-all duration-500
                                 hover:text-black hover:border-amber-400 
                                 hover:shadow-xl hover:shadow-amber-400/10 
                                 hover:-translate-y-1 active:scale-95">
                <span className="absolute inset-0 bg-gradient-to-r 
                                 from-amber-400 to-yellow-300 
                                 translate-y-full group-hover:translate-y-0 
                                 transition-transform duration-500" />
                <span className="relative flex items-center gap-2">
                  more
                  <svg className="w-4 h-4 transition-transform duration-300 
                                  group-hover:translate-x-1"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Decorative Divider (ENHANCED) ── */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative py-4">
          <div className="h-px bg-gradient-to-r from-transparent 
                          via-gray-700 to-transparent" />
          {/* Center diamond decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                          -translate-y-1/2 bg-black px-4">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-amber-400 
                            to-orange-400 rounded-sm rotate-45" />
          </div>
        </div>
      </div>

      {/* ── Drink Section ── */}
      <section className="py-16 md:py-24 relative">
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 
                        rounded-full blur-3xl opacity-50 translate-y-1/2 
                        -translate-x-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-emerald-400 rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase 
                               text-emerald-400">
                Drinks
              </span>
              <span className="w-8 h-[2px] bg-emerald-400 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold 
                           mb-4 tracking-tight leading-tight
                           bg-gradient-to-r from-white via-gray-100 
                           to-gray-300 bg-clip-text text-transparent">
              {menuTitle.Drink.title}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto 
                          leading-relaxed">
              {menuTitle.Drink.description}
            </p>
            {/* Decorative underline */}
            <div className="mt-6 flex justify-center gap-1.5">
              <span className="w-3 h-1 bg-emerald-400 rounded-full" />
              <span className="w-8 h-1 bg-emerald-600 rounded-full" />
              <span className="w-3 h-1 bg-emerald-400 rounded-full" />
            </div>
          </div>

          {/* Drink Content */}
          <div className="">

            {/* Drink Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                            xl:grid-cols-4 gap-6 md:gap-8">
              {menuDrink.map((item, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500 
                             hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card
                    image={item.preview.image}
                    desc={item.preview.name}
                    btn={item.preview.button}
                  />
                </div>
              ))}
            </div>

            {/* More Button */}
            <div className="flex justify-center mt-12">
              <button className="group relative px-8 py-3.5 text-sm font-semibold 
                                 text-emerald-400 bg-emerald-400/10 rounded-2xl 
                                 border-2 border-emerald-400/20
                                 overflow-hidden transition-all duration-500
                                 hover:text-black hover:border-emerald-400 
                                 hover:shadow-xl hover:shadow-emerald-400/10 
                                 hover:-translate-y-1 active:scale-95">
                <span className="absolute inset-0 bg-gradient-to-r 
                                 from-emerald-400 to-green-300 
                                 translate-y-full group-hover:translate-y-0 
                                 transition-transform duration-500" />
                <span className="relative flex items-center gap-2">
                  more
                  <svg className="w-4 h-4 transition-transform duration-300 
                                  group-hover:translate-x-1"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                          strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Back to Top (NEW) ── */}
      <div className="flex justify-center py-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 px-6 py-3 text-xs 
                     font-semibold tracking-wider uppercase text-gray-600 
                     hover:text-amber-400 transition-all duration-300
                     hover:-translate-y-1"
        >
          <svg className="w-4 h-4 transition-transform duration-300 
                          group-hover:-translate-y-1"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to top
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;