import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TravelDetails } from "./routes";
import "./index.css";
import HomePage from "./routes/HomePage.tsx";
import Booking from "./routes/Booking.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/details" element={<TravelDetails />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  </BrowserRouter>
);
