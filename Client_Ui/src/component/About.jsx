import React from "react";
import { motion } from "framer-motion";
import { call } from "../constants";
import Footer from "./footer";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="bg-neutral-950 text-gray-100 font-sans min-h-screen overflow-hidden">
      {/* Hero Banner */}
      <motion.div
        className="relative py-32 px-4 bg-neutral-950 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.span
            className="inline-block px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
          >
            Contact Us
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-amber-200 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {call.head.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {call.head.paragraph}
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-neutral-900 to-transparent" />
      </motion.div>

      {/* Main Contact Section */}
      <motion.section
        className="py-20 px-4 bg-neutral-900 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="container mx-auto max-w-6xl">
          {/* Contact Info + Map Row */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Contact Information Card */}
            <motion.div
              className="w-full lg:w-1/2 relative group"
              variants={slideInLeft}
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/0 to-purple-500/0 group-hover:from-amber-500/30 group-hover:to-purple-500/30 rounded-3xl blur-sm transition-all duration-700 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-3xl shadow-2xl shadow-black/20 p-8 md:p-10 hover:border-amber-500/20 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-10">
                  <span className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    Contact Information
                  </h3>
                </div>

                <motion.ul className="space-y-6" variants={staggerContainer}>
                  {call.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-5 group/item cursor-default"
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl bg-amber-500/10 text-amber-400 w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-black transition-all duration-500 shadow-lg shadow-amber-500/0 group-hover/item:shadow-amber-500/25 group-hover/item:scale-110">
                        {item.icon}
                      </span>
                      <div className="pt-3">
                        <p className="text-gray-400 text-lg group-hover/item:text-gray-200 transition-colors duration-300 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Decorative corner accents */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500/10 rounded-tr-2xl group-hover:border-amber-500/30 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-500/10 rounded-bl-2xl group-hover:border-amber-500/30 transition-colors duration-500" />
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div className="w-full lg:w-1/2" variants={slideInRight}>
              <div className="relative bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-3xl shadow-2xl shadow-black/20 h-full min-h-[400px] overflow-hidden hover:border-amber-500/20 transition-all duration-500 group">
                {/* Map placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated grid background */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(245, 158, 11, 0.5) 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />

                  <motion.div
                    className="flex flex-col items-center gap-5 relative z-10"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Location pin with pulse */}
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative bg-neutral-700/50 p-5 rounded-2xl border border-neutral-600/50 group-hover:border-amber-500/30 transition-all duration-500">
                        <svg
                          className="w-14 h-14 text-amber-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-500 font-medium tracking-wide text-lg">
                      Google Map Location
                    </span>
                    <span className="text-gray-600 text-sm">
                      Interactive map coming soon
                    </span>
                  </motion.div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-neutral-700/50 rounded-tl-xl group-hover:border-amber-500/30 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neutral-700/50 rounded-br-xl group-hover:border-amber-500/30 transition-colors duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Email Form Section */}
          <motion.div
            className="relative max-w-3xl mx-auto group"
            variants={fadeInUp}
          >
            {/* Glow effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-purple-500/0 group-hover:from-amber-500/20 group-hover:via-amber-400/10 group-hover:to-purple-500/20 rounded-3xl blur-md transition-all duration-700 opacity-0 group-hover:opacity-100" />

            <div className="relative bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-3xl shadow-2xl shadow-black/30 p-8 md:p-12 hover:border-amber-500/20 transition-all duration-500">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-6"
                  variants={scaleIn}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                >
                  <svg
                    className="w-8 h-8 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Email us
                </h2>
                <p className="text-gray-500 text-lg">
                  We'd love to hear from you. Drop us a message below.
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-4 rounded-full" />
              </div>

              <form action="" className="space-y-8">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.span
                    className="block"
                    variants={fadeInUp}
                    custom={0}
                  >
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-amber-400/80 mb-3 uppercase tracking-[0.2em]"
                    >
                      name
                    </label>
                    <div className="relative group/input">
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name, Please..."
                        className="w-full px-6 py-4 bg-neutral-900/80 border-2 border-neutral-700 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all duration-500 text-white placeholder-gray-600 hover:border-neutral-600 peer"
                      />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 peer-focus:w-full transition-all duration-500 rounded-full" />
                    </div>
                  </motion.span>
                  <motion.span
                    className="block"
                    variants={fadeInUp}
                    custom={1}
                  >
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-amber-400/80 mb-3 uppercase tracking-[0.2em]"
                    >
                      Email
                    </label>
                    <div className="relative group/input">
                      <input
                        type="text"
                        id="email"
                        placeholder="Your Email, Please..."
                        className="w-full px-6 py-4 bg-neutral-900/80 border-2 border-neutral-700 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all duration-500 text-white placeholder-gray-600 hover:border-neutral-600 peer"
                      />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 peer-focus:w-full transition-all duration-500 rounded-full" />
                    </div>
                  </motion.span>
                </div>

                {/* Message */}
                <motion.span className="block" variants={fadeInUp} custom={2}>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-amber-400/80 mb-3 uppercase tracking-[0.2em]"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name=""
                      id="message"
                      rows="6"
                      placeholder="Your Message, Please...."
                      className="w-full px-6 py-4 bg-neutral-900/80 border-2 border-neutral-700 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all duration-500 text-white placeholder-gray-600 resize-none hover:border-neutral-600 peer"
                    ></textarea>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 peer-focus:w-full transition-all duration-500 rounded-full" />
                  </div>
                </motion.span>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-center pt-4"
                  variants={fadeInUp}
                  custom={3}
                >
                  <motion.button
                    type="submit"
                    className="relative w-full md:w-auto px-14 py-4.5 bg-amber-500 text-black font-bold rounded-xl overflow-hidden group/btn shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 transition-shadow duration-500"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Button shine effect */}
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide uppercase text-sm">
                      <p>Send</p>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </motion.span>
                    </span>
                  </motion.button>
                </motion.div>
              </form>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500/5 rounded-tr-2xl group-hover:border-amber-500/20 transition-colors duration-700" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-500/5 rounded-bl-2xl group-hover:border-amber-500/20 transition-colors duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </motion.section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;