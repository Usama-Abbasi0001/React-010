import "./App.css";
import { Routes, Route } from "react-router-dom";
import First from "./components/First";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />

        <Route path="about" element={<First />} />

        <Route path="contact" element={<First />} />

        <Route path="apply" element={<First />} />
      </Routes>
    </>
  );
}

export default App;
