// npm
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// files
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageItem from "./pages/PackageDetail";

import "./styles/main.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package-item/:id" element={<PackageItem />} />
        </Routes>
      </Router>
    </div>
  );
}
