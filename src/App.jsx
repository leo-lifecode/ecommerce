import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./pages/Navbar";
import Home from "./pages/home/Home";
import Footer from "./pages/Footer";

const App = () => {
  const [screenOpacity, SetScreenOpacity] = useState(false);
  return (
    <Router>
      <div className="flex flex-col max-w-[1440px] m-auto overflow-hidden">
      
        <Navbar
          screenOpacity={screenOpacity}
          SetScreenOpacity={SetScreenOpacity}
        />
        <Routes>
          <Route path="/" element={<Home screenOpacity={screenOpacity} />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Signin" element={<Signin />} />
        </Routes>
        <Footer />
        {/* </div> */}
      </div>
    </Router>
  );
};

export default App;
