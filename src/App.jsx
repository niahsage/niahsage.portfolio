import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteScrollReset from "./components/RouteScrollReset";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Artwork from "./pages/Artwork";
import Marketing from "./pages/Marketing";

function App() {
  return (
    <Router>
      <RouteScrollReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;