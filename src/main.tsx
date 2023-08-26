import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.tsx';
import HomePage from './routes/HomePage.tsx';
import Booking from './routes/Booking.tsx';
import PassengerDetail from './routes/PassengerDetail.tsx';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      {/* FIXME - Meterle el id al viaje */}
      <Route path="/passenger-detail" element={<PassengerDetail />} />

    </Routes>
  </BrowserRouter>
);
