import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Tag from "./components/Tag";

//u can use this as layout too

function App() {
  return (
    <div>
      <Tag />
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
