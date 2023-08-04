import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar";
import Login from './features/login/login'
import FindLove from "./features/findLove/FindLove";
import About from './features/aboutPage/About';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route index element={ <Login /> } /> */}
        <Route path="/findlove" element={<FindLove />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
