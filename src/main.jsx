import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import App from "./App.jsx";
import About from "./About.jsx";
import Menu from "./Menu.jsx";
import Contact from "./Contact.jsx";
import Reservation from "./Reservation.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  </BrowserRouter>,
);
