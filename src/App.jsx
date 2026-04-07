import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/About";
// import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;