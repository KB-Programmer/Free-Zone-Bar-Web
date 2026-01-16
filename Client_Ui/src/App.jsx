import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Menu from './component/Menu';
import About from './component/About';
import Contact from './component/Contact';
import Order from './component/Order';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
