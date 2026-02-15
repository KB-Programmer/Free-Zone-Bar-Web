import React from "react";
import { motion } from "framer-motion";

const Card = ({ image, desc, btn, Action }) => {
  return (
    <motion.div
      className="relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden w-full max-w-xs mx-auto group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-purple-500/0 group-hover:from-amber-500/50 group-hover:via-amber-400/30 group-hover:to-purple-500/50 rounded-2xl blur-sm transition-all duration-700 opacity-0 group-hover:opacity-100 z-0" />

      {/* Card inner wrapper */}
      <div className="relative bg-neutral-900 rounded-2xl z-10 overflow-hidden">
        {/* Image container */}
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={desc}
            className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Floating badge */}
          <motion.div
            className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-amber-500/20"
            initial={{ scale: 0, rotate: -12 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            ★ Featured
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Decorative line */}
          <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mb-4 group-hover:w-16 transition-all duration-500" />

          <h3 className="text-lg font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300 tracking-wide leading-tight line-clamp-2">
            {desc}
          </h3>

          {/* Button */}
          <motion.button
            onClick={Action}
            className="relative w-full py-3 px-6 bg-neutral-800 border border-neutral-700 text-gray-300 font-semibold rounded-xl overflow-hidden group/btn hover:border-amber-500/50 transition-all duration-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Button hover fill */}
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />

            {/* Button text */}
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-black transition-colors duration-500">
              {btn}
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </motion.button>
        </div>

        {/* Bottom accent line */}
        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-500 via-amber-400 to-purple-500 transition-all duration-700 ease-out" />
      </div>
    </motion.div>
  );
};

export default Card;