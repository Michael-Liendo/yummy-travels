import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TravelDetails } from "./routes";
import HomePage from "./routes/HomePage.tsx";
import Booking from "./routes/Booking.tsx";
import PassengerDetail from "./routes/PassengerDetail.tsx";
import ReactDOM from 'react-dom/client'
import Checkout from './routes/Checkout.tsx';
import Tickets from "./routes/Tickets.tsx";
import { TicketsDetail } from './routes';
import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking/:id" element={<TravelDetails />} />
      <Route path="/passenger/:id" element={<PassengerDetail />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/tickets/:id" element={<TicketsDetail />} />
    </Routes>
  </BrowserRouter>
);
