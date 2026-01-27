import React from 'react';
import { menuTitle, menuFood, menuDrink } from '../constants';
import Card from './Card';
import Footer from './footer';
const Menu = () => {
     return (
       <div className="">
               <section className="">
                 <div className="">
                   <div className="">
                     <h2>{menuTitle.Food.title}</h2>
                     <p>{menuTitle.Food.description}</p>
                   </div>
                   <div className="">
                     <div className="">
                       {menuFood.map((item, index) => (
                         <Card
                           image={item.preview.image}
                           desc={item.preview.name}
                           btn={item.preview.button}
                         />
                       ))}
                     </div>
                     <div className="">
                       <button>more</button>
                     </div>
                   </div>
                 </div>
               </section>
               <section className="">
                 <div className="">
                   <div className="">
                     <h2>{menuTitle.Drink.title}</h2>
                     <p>{menuTitle.Drink.description}</p>
                   </div>
                   <div className="">
                     <div className="">
                       {menuDrink.map((item, index) => (
                         <Card
                           image={item.preview.image}
                           desc={item.preview.name}
                           btn={item.preview.button}
                         />
                       ))}
                     </div>
                     <div className="">
                       <button >more</button>
                     </div>
                   </div>
                 </div>
         </section>
         <Footer />
       </div>
     );
}

export default Menu;
