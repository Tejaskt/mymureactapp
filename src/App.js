import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Counter from './components/Counter';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
function App() {
  return (
    <>
      <Router>

        <Link to="Header">Header</Link> ||  
        <Link to="home">Home</Link> || 
        <Link to="about">About</Link> ||
        <Link to="counter">Counter</Link> 

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="*" element={<h1>404 Page not found go to home</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
