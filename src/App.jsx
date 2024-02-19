import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Screens/Home/Home.jsx";
import { Pricing } from "./Screens/Pricing.jsx";
import { About } from "./Screens/About.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route className="route" path="/" element={<Home />} />
        <Route className="route" path="/pricing" element={<Pricing />} />
        <Route className="route" path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
