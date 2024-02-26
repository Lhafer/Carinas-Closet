import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Screens/Home/Home.jsx";
import { Pricing } from "./Screens/Pricing.jsx";
import { About } from "./Screens/About.jsx";
import { Admin } from "./Screens/Admin/Admin.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <Admin />
      <Routes>
        <Route className="route" path="/" element={<Home />} />
        <Route className="route" path="/pricing" element={<Pricing />} />
        <Route className="route" path="/about" element={<About />} />
        <Route className="route" path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
