import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TravelDetails } from "./routes";
import "./index.css";
import HomePage from "./routes/HomePage.tsx";
import Booking from "./routes/Booking.tsx";
import PassengerDetail from "./routes/PassengerDetail.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking/details" element={<TravelDetails />} />
      {/* FIXME - Meterle el id al viaje */}
      <Route path="/passenger-detail" element={<PassengerDetail />} />
    </Routes>
  </BrowserRouter>
);
