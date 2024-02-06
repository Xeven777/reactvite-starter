import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";

//u can use this layout too

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
