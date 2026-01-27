import React from 'react';
import { call } from '../constants';
import Footer from './footer';
const About = () => {
     return (
          <div className=''>
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
         <Footer/>
          </div>
     );
}

export default About;
