import { BrowserRouter, Router, Route } from 'react-router-dom';
import Navbar from './features/components/Navbar';
import FindLove from './features/components/FindLove';
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Router>
          <Route path='/findlove' element={ <FindLove /> } />
        </Router>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
