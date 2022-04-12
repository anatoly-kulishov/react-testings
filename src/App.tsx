import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link data-testid="main-link" to="/">Home</Link> |{" "}
        <Link data-testid="about-link" to="about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
