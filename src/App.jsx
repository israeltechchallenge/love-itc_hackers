import {BrowserRouter, Routes, Route} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Router>
          <Route></Route>
        </Router>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
