

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

import ContactPage from "./pages/ContactPage";



export default function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/admin" element={<Admin />} />
<Route path="/contact" element={<ContactPage />} />




      </Routes>
      <Footer />
    </Router>
  );
}



