import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.tsx';
import HomePage from './routes/HomePage.tsx';
import Booking from './routes/Booking.tsx';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  </BrowserRouter>
);
