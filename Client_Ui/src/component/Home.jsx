import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import logo from "../assets/bg/event-bg.png";
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
  return (
    <div className="">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {Herosection.head}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {Herosection.paragraph}
          </motion.p>
          <motion.span
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {Herosection.button.map((btn, index) => (
              <button
                key={index}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <img src={btn.icon} alt="" className="w-5 h-5" />
                <p>{btn.name}</p>
              </button>
            ))}
          </motion.span>
        </div>
      </motion.section>
      {/* About Us Section */}
      <motion.section
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
          <motion.div
            className="w-full md:w-1/3 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {about.part1.title}
            </h1>
            <p className="text-lg text-gray-600">{about.part1.paragraph}</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
              {about.part2.title}
            </h2>
            <ul className="space-y-4">
              {about.part2.items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-lg">{item.par}</div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>
      {/* Food Menu Section  */}
      <section className="">
        <div className="">
          <div className="">
            <h2>{menuTitle.Food.title}</h2>
            <p>{menuTitle.Food.description}</p>
          </div>
          <div className="">
            <div className="flex flex-wrap justify-center gap-6">
              {menuFood.map(
                (item, index) =>
                  index < 4 && (
                    <Card
                      key={index}
                      image={item.preview.image}
                      desc={item.preview.name}
                      btn={item.preview.button}
                      Action={() => openModal(index)}
                    />
                  ),
              )}
            </div>
            <div className="">
              <button>more</button>
            </div>
          </div>
        </div>
      </section>
      {/* Drink Menu Section */}
      <section className="">
        <div className="">
          <div className="">
            <h2>{menuTitle.Drink.title}</h2>
            <p>{menuTitle.Drink.description}</p>
          </div>
          <div className="">
            <div className="flex gap-[12px] md:flex-column">
              {menuDrink.map((item, index) => (
                <Card
                  key={index}
                  image={item.preview.image}
                  desc={item.preview.name}
                  btn={item.preview.button}
                  Action={() => openModal(index + menuFood.length)}
                />
              ))}
            </div>
            <div className="">
              <button>more</button>
            </div>
          </div>
        </div>
      </section>
      {/* Event Section */}
      <section className="">
        <div className="">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <div className="">
              <h1>{events.head.title}</h1>
              <p>{events.head.content}</p>
            </div>
            <div className="">
              <ul>
                {events.items.map((item, index) => (
                  <li key={index}>
                    <span>{item.icon}</span>
                    <p>{item.eventname}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="">
        <div className="">
          <div className="">
            <h2>{call.head.title}</h2>
            <p>{call.head.paragraph}</p>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <ul>
                  {call.items.map((item, index) => (
                    <li key={index}>
                      <span>{item.icon}</span>
                      <p>{item.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <div className="">google map location</div>
              </div>
            </div>
            <div className="">
              <h2>Email us</h2>
              <form action="">
                <span>
                  <label htmlFor=""> name </label>{" "}
                  <input type="text" placeholder="Your Name, Please..." />
                </span>
                <span>
                  <label htmlFor=""> Email </label>{" "}
                  <input type="text" placeholder="Your Email, Please..." />
                </span>
                <span>
                  <label htmlFor=""> SMS </label>{" "}
                  <textarea
                    name=""
                    id=""
                    placeholder="Your Message, Please...."
                  ></textarea>
                </span>
                <button>
                  <p>Send</p> <span>icon</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Modal Component */}
      <Model isOpen={isModalOpen} selectedItem={selectedItem} onClose={closeModal} />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
