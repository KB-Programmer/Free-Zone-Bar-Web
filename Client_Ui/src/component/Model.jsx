import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuFood, menuDrink } from "../constants";

const Model = ({ isOpen, selectedItem, onClose }) => {
  if (!isOpen || selectedItem === null) return null;

  const allItems = [...menuFood, ...menuDrink];
  const item = allItems[selectedItem];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm 
                     flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-b from-gray-900 to-gray-950 
                       rounded-3xl max-w-lg w-full mx-4 relative
                       border border-white/10 shadow-2xl shadow-black/50
                       overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Close Button ── */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 
                         flex items-center justify-center
                         bg-black/40 backdrop-blur-md rounded-full 
                         border border-white/10
                         text-gray-400 hover:text-white 
                         hover:bg-white/10 hover:border-white/20
                         hover:rotate-90 hover:scale-110
                         transition-all duration-300 
                         active:scale-90"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" 
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="">
              {/* ── Image Section ── */}
              <div className="relative overflow-hidden group">
                <img
                  src={item.preview.image}
                  alt={item.preview.name}
                  className="w-full h-56 md:h-64 object-cover 
                             transition-transform duration-700 
                             group-hover:scale-105"
                />
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t 
                                from-gray-900 via-gray-900/40 to-transparent" />
                
                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-white 
                                 tracking-tight leading-tight">
                    {item.preview.name}
                  </h1>
                </div>
              </div>

              {/* ── Content Section ── */}
              <div className="p-6 pt-4">
                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed 
                              mb-6">
                  {item.preview.description}
                </p>

                {/* ── Divider ── */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent 
                                  via-white/10 to-transparent" />
                  <span className="text-[10px] font-bold tracking-[0.25em] 
                                   uppercase text-gray-600">
                    Menu Items
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent 
                                  via-white/10 to-transparent" />
                </div>

                {/* ── Menu Items List ── */}
                <ul className="space-y-3">
                  {item.items.map((menuItem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group/item flex justify-between items-center 
                                 p-3 md:p-4 rounded-2xl
                                 bg-white/[0.03] border border-white/5
                                 hover:bg-white/[0.07] hover:border-white/10
                                 transition-all duration-300"
                    >
                      {/* Item Info */}
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {/* Index Badge */}
                        <span className="flex-shrink-0 w-7 h-7 
                                         flex items-center justify-center 
                                         text-[10px] font-bold text-amber-400/70
                                         bg-amber-400/10 rounded-lg 
                                         border border-amber-400/10">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm md:text-base text-gray-200 
                                         font-medium truncate
                                         group-hover/item:text-white 
                                         transition-colors">
                          {menuItem.title}
                        </span>
                      </div>

                      {/* Price & Button */}
                      <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                        {/* Price Tag */}
                        <span className="text-sm md:text-base font-bold 
                                         text-amber-400 tabular-nums">
                          {menuItem.price}
                        </span>

                        {/* Order Button */}
                        <button className="group/btn relative px-4 py-2 text-xs 
                                           font-bold tracking-wider uppercase
                                           text-black bg-gradient-to-r 
                                           from-amber-400 to-yellow-300
                                           rounded-xl overflow-hidden
                                           shadow-lg shadow-amber-500/20
                                           transition-all duration-300 
                                           hover:shadow-xl hover:shadow-amber-500/30 
                                           hover:scale-105 hover:-translate-y-0.5
                                           active:scale-95">
                          {/* Shine Effect */}
                          <span className="absolute inset-0 -translate-x-full 
                                           bg-gradient-to-r from-transparent 
                                           via-white/30 to-transparent
                                           group-hover/btn:translate-x-full 
                                           transition-transform duration-700" />
                          <span className="relative">{menuItem.button}</span>
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* ── Bottom Action Bar ── */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    {/* Item Count */}
                    <span className="text-xs text-gray-600 font-medium">
                      {item.items.length} items available
                    </span>

                    {/* Close Text Button */}
                    <button
                      onClick={onClose}
                      className="text-xs font-semibold text-gray-500 
                                 hover:text-white tracking-wider uppercase
                                 transition-colors duration-300
                                 flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" 
                           stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                              strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back to menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;