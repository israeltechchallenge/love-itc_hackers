import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./features/components/Navbar";
import FindLove from "./features/components/FindLove";
import SucessStory from "./features/aboutPage/SuccessStory";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/findlove" element={<FindLove />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
