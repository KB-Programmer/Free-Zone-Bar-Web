import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { navbar } from '../constants';
import logo from "../assets/Logo.png"
const Navbar = () => {
     return (
       <div>
         <div className="bg-gray-500 flex justify-around items-center p-[10px] ">
           <div className="">
             <img src={logo} alt="Logo" className='w-[50px] md:w-[60px]' />
           </div>
           <div className="">
             <ul className='flex'>
               {navbar.map((nav, index) => (
                   <li key={index} className='mr-[10px] txt-white'>
                   <Link to={nav.id}>{ nav.name }</Link>
                </li>
               ) )}
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
