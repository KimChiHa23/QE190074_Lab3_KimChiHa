import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

import { CartProvider } from './context/CartContext';

/**
 * Thành phần chính của ứng dụng (Root Component)
 * Quản lý định tuyến và bố cục chung
 */
function App() {
  return (
    <CartProvider>
      <Router>
        {/* GalaxyBackground tạo hiệu ứng nền không gian cho toàn bộ ứng dụng */}
        <GalaxyBackground>
          <div className="flex flex-col min-h-screen">
            {/* Thanh điều hướng (Navbar) luôn hiển thị ở trên cùng */}
            <Navbar />

            {/* Main content: Nơi nội dung các trang thay đổi dựa trên URL */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>

            {/* Phần chân trang (Footer) */}
            <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm backdrop-blur-md">
              <p>&copy; 2026 Nebula Tech Store. All rights reserved.</p>
            </footer>
          </div>
        </GalaxyBackground>
      </Router>
    </CartProvider>
  );
}

export default App;
