import React from 'react';
import {Link, Outlet} from 'react-router-dom'
const Navbar = () => {
     return (
       <div>
         <div className="bg-gray-500">
           <div className="">
             <h2>Logo</h2>
           </div>
           <div className="">
             <ul>
               <Link to="/home">
                 <li>Home</li>
               </Link>
               <Link to="/menu">
                 <li>Menu</li>
               </Link>
               <Link to="/about">
                 <li>About Us</li>
               </Link>
               <Link to="/contact">
                 <li>Contact</li>
               </Link>
             </ul>
           </div>
           <div className="">
             <div className="">
               <Link to="/order">Order Now</Link>
             </div>
           </div>
         </div>
         <Outlet />
       </div>
     );
}

export default Navbar;
