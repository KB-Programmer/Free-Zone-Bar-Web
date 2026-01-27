import React from 'react';
import { motion } from 'framer-motion';

const Card = ({image, desc, btn, Action}) => {
     return (
          <motion.div
               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
          >
               <div className="p-4">
                    <div className="mb-4">
                         <img src={image} alt={desc} className='w-full h-48 object-cover rounded-lg'/>
                    </div>
                    <div className="text-center">
                         <h3 className="text-lg font-semibold mb-2">{desc}</h3>
                         <button
                              onClick={Action}
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                         >
                              {btn}
                         </button>
                    </div>
               </div>
          </motion.div>
     );
}

export default Card;
