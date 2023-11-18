import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Regional from "./pages/Regional";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <div className="app">
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/news-nest/" element={<Home />} />
                <Route path="/news-nest/regional" element={<Regional />} />
                <Route path="/news-nest/about" element={<About />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
