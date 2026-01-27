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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="text-center">
              <img
                src={item.preview.image}
                alt={item.preview.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h1 className="text-2xl font-bold mb-2">{item.preview.name}</h1>
              <p className="text-gray-600 mb-4">{item.preview.description}</p>
              <ul className="space-y-2">
                {item.items.map((menuItem, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{menuItem.title}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{menuItem.price}</span>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        {menuItem.button}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;
