import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <GalaxyBackground>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm backdrop-blur-md">
            <p>&copy; 2026 Nebula Tech Store. All rights reserved.</p>
          </footer>
        </div>
      </GalaxyBackground>
    </Router>
  );
}

export default App;
