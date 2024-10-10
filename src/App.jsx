import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes instead of Switch
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home"; // Make sure this component exists

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <div>
          <Navbar /> {/* This will contain navigation links */}
        </div>

        <div className="p1"></div>

        <div className="p2">
          <Routes>
            {" "}
            {/* Use Routes instead of Switch */}
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/login" element={<Login />} /> {/* Login page */}
            {/* Add more routes as needed */}
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
