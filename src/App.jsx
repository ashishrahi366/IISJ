import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./component/common/ScrollToTop";
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
import GalleryPage from "./pages/GalleryPage";
import FellowshipProgramPage from "./pages/FellowshipProgramPage";
import FellowsForEqualityPage from "./pages/FellowsForEqualityPage";
import CommunityResourceCenters from "./pages/CommunityResourceCenters";
import VimalKumarLeaderSection from "./pages/VimalKumarLeaderSection";
import SupportMSCPage from "./pages/SupportMSCPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/MSC-Detail" element={<MSCPage />} />
        <Route path="/Avarna" element={<AvarnaPage />} />
        <Route path="/IISJ" element={<IISJPage />} />
        <Route
          path="/Fellowship-Program-app"
          element={<FellowshipProgramPage />}
        />
        <Route
          path="/Fellowship-Equality"
          element={<FellowsForEqualityPage />}
        />
        <Route
          path="/Community-Resource-Centers"
          element={<CommunityResourceCenters />}
        />
        <Route path="/Vimal-Kumar" element={<VimalKumarLeaderSection />} />
        <Route path="/Support-MSC" element={<SupportMSCPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
