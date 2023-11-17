import { Routes, Route } from "react-router-dom";
import { Create, Read, Update } from "./operations";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      </div>
    </Router>
  );
};
