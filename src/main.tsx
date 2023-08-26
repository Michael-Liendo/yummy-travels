import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TravelDetails } from "./routes";
import HomePage from "./routes/HomePage.tsx";
import Booking from "./routes/Booking.tsx";
import PassengerDetail from "./routes/PassengerDetail.tsx";
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx';
import Checkout from './routes/Checkout.tsx';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking/details" element={<TravelDetails />} />
      {/* FIXME - Meterle el id al viaje */}
      <Route path="/passenger-detail" element={<PassengerDetail />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  </BrowserRouter>
);
