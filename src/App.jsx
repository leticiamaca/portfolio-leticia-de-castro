import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/HomePage";
import Projects from "./components/projectsPage";
import Contato from "./pages/Contato"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default App;