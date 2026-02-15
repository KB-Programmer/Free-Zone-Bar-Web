import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import logo from "../assets/bg/event-bg.png";
import heroBg from "../assets/bg/hero-bg.jpg";
import {
  menuTitle,
  Herosection,
  about,
  menuFood,
  menuDrink,
  events,
  call,
} from "../constants";
import Footer from "./footer";
import Model from "./Model";

const Home = () => {
  const [item, setItem] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (index) => {
    setSelectedItem(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Modern animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

  return (
    <div className="bg-neutral-950 text-gray-100 font-sans overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative text-white py-20 px-4 min-h-[100vh] flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-neutral-950 z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Decorative animated particles */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl z-[1]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl z-[1]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="container mx-auto text-center relative z-[2]">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <span className="px-5 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium tracking-widest uppercase backdrop-blur-sm">
              Welcome
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 drop-shadow-lg bg-gradient-to-r from-white via-gray-100 to-amber-200 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {Herosection.head}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            {Herosection.paragraph}
          </motion.p>
          <motion.span
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {Herosection.button.map((btn, index) => (
              <motion.button
                key={index}
                className={`px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                  index === 0
                    ? "bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40"
                    : "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/40"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={btn.icon} alt="" className="w-5 h-5" />
                <p>{btn.name}</p>
              </motion.button>
            ))}
          </motion.span>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2]"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-amber-400 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        className="py-24 px-4 bg-neutral-900 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-around items-center gap-16">
          <motion.div
            className="w-full md:w-1/3 text-center md:text-left"
            variants={slideInLeft}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4"
              variants={fadeInUp}
            >
              About Us
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
              {about.part1.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              {about.part1.paragraph}
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            variants={slideInRight}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left text-white">
              {about.part2.title}
            </h2>
            <motion.ul className="space-y-4" variants={staggerContainer}>
              {about.part2.items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-5 bg-neutral-800/80 border border-neutral-700/50 p-5 rounded-2xl hover:bg-neutral-800 hover:border-amber-500/30 transition-all duration-500 cursor-default group"
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <div className="text-2xl bg-amber-500/15 group-hover:bg-amber-500/25 p-3.5 rounded-xl flex-shrink-0 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.par}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Food Menu Section */}
      <motion.section
        className="py-24 px-4 bg-neutral-950 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-40 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Our Menu
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {menuTitle.Food.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              {menuTitle.Food.description}
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <div>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={staggerContainer}
            >
              {menuFood.map(
                (item, index) =>
                  index < 4 && (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ y: -8, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        image={item.preview.image}
                        desc={item.preview.name}
                        btn={item.preview.button}
                        Action={() => openModal(index)}
                      />
                    </motion.div>
                  ),
              )}
            </motion.div>
            <motion.div
              className="flex justify-center mt-12"
              variants={fadeInUp}
            >
              <motion.button
                className="px-10 py-3.5 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 tracking-wide uppercase text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                more
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Drink Menu Section */}
      <motion.section
        className="py-24 px-4 bg-neutral-900 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.div
          className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Beverages
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {menuTitle.Drink.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              {menuTitle.Drink.description}
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <div>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={staggerContainer}
            >
              {menuDrink.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    image={item.preview.image}
                    desc={item.preview.name}
                    btn={item.preview.button}
                    Action={() => openModal(index + menuFood.length)}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center mt-12"
              variants={fadeInUp}
            >
              <motion.button
                className="px-10 py-3.5 bg-purple-500 text-white font-bold rounded-full hover:bg-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-400/40 tracking-wide uppercase text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                more
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Event Section */}
      <motion.section
        className="py-24 px-4 bg-neutral-950 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={slideInLeft}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={logo}
                alt="Events"
                className="relative rounded-2xl shadow-2xl shadow-black/50 max-w-full h-auto max-h-[450px] object-cover border border-neutral-800"
              />
            </motion.div>
          </motion.div>
          <motion.div className="w-full md:w-1/2" variants={slideInRight}>
            <div className="mb-10">
              <motion.span
                className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4"
                variants={fadeInUp}
              >
                Events
              </motion.span>
              <h1 className="text-3xl md:text-5xl font-black mb-4 text-white leading-tight">
                {events.head.title}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                {events.head.content}
              </p>
            </div>
            <motion.div variants={staggerContainer}>
              <ul className="space-y-4">
                {events.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-4 bg-neutral-800/60 backdrop-blur-sm border border-neutral-700/50 px-6 py-5 rounded-2xl hover:bg-neutral-800 hover:border-amber-500/30 transition-all duration-500 cursor-pointer group"
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <span className="text-3xl flex-shrink-0 bg-amber-500/10 group-hover:bg-amber-500/20 p-3 rounded-xl transition-all duration-300">
                      {item.icon}
                    </span>
                    <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.eventname}
                    </p>
                    <motion.span
                      className="ml-auto text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-24 px-4 bg-neutral-900 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.span
              className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4"
              variants={scaleIn}
            >
              Get In Touch
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {call.head.title}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {call.head.paragraph}
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="space-y-12">
            {/* Contact Info + Map Row */}
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                className="w-full md:w-1/2 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-3xl shadow-2xl shadow-black/20 p-8 hover:border-amber-500/20 transition-all duration-500"
                variants={slideInLeft}
              >
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                  Contact Info
                </h3>
                <ul className="space-y-6">
                  {call.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-5 group cursor-default"
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ x: 6 }}
                    >
                      <span className="text-2xl bg-amber-500/10 text-amber-400 w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 shadow-lg shadow-amber-500/0 group-hover:shadow-amber-500/20">
                        {item.icon}
                      </span>
                      <p className="text-gray-400 text-lg pt-3 group-hover:text-gray-200 transition-colors duration-300">
                        {item.content}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2"
                variants={slideInRight}
              >
                <div className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-3xl shadow-2xl shadow-black/20 h-full min-h-[350px] flex items-center justify-center text-gray-500 text-lg font-medium overflow-hidden hover:border-amber-500/20 transition-all duration-500">
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <svg
                      className="w-12 h-12 text-amber-500/50"
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
                    <span className="text-gray-500">Google Map Location</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Email Form */}
            <motion.div
              className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-3xl shadow-2xl shadow-black/30 p-8 md:p-12 max-w-3xl mx-auto hover:border-amber-500/20 transition-all duration-500"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2 text-center">
                Email us
              </h2>
              <p className="text-gray-500 text-center mb-10">
                We'd love to hear from you
              </p>
              <form action="" className="space-y-6">
                <motion.span
                  className="block"
                  variants={fadeInUp}
                  custom={0}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-amber-400/80 mb-2 uppercase tracking-widest"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name, Please..."
                    className="w-full px-6 py-4 bg-neutral-900/80 border-2 border-neutral-700 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all duration-500 text-white placeholder-gray-600 hover:border-neutral-600"
                  />
                </motion.span>
                <motion.span
                  className="block"
                  variants={fadeInUp}
                  custom={1}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-amber-400/80 mb-2 uppercase tracking-widest"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Your Email, Please..."
                    className="w-full px-6 py-4 bg-neutral-900/80 border-2 border-neutral-700 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all duration-500 text-white placeholder-gray-600 hover:border-neutral-600"
                  />
                </motion.span>
                <motion.span
                  className="block"
                  variants={fadeInUp}
                  custom={2}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-amber-400/80 mb-2 uppercase tracking-widest"
                  >
                    SMS
                  </label>
                  <textarea
                    name=""
                    id="message"
                    rows="5"
                    placeholder="Your Message, Please...."
                    className="w-full px-6 py-4 bg-neutral-900/80 border-2 border-neutral-700 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 outline-none transition-all duration-500 text-white placeholder-gray-600 resize-none hover:border-neutral-600"
                  ></textarea>
                </motion.span>
                <motion.button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 flex items-center justify-center gap-3 mx-auto tracking-wide uppercase text-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  variants={fadeInUp}
                  custom={3}
                >
                  <p>Send</p>
                  <span className="text-lg">
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
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modal Component */}
      <Model
        isOpen={isModalOpen}
        selectedItem={selectedItem}
        onClose={closeModal}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;