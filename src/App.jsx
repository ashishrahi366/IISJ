import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import NotFound from "./component/common/NotFound";
// import NotFound from "./pages/";

import Home from "./pages/Home";
import AboutUs from "./pages/About";
import ContactPage from "./pages/Contact";
import MSCPage from "./pages/MSCPage";
import AvarnaPage from "./pages/AvarnaPage";
import IISJPage from "./pages/IISJPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/MSC-Detail" element={<MSCPage />} />
        <Route path="/Avarna" element={<AvarnaPage />} />
        <Route path="/IISJ" element={<IISJPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
