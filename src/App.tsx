import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import SignIn from './screens/SignIn';
import Register from './screens/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fitur-utama" element={<div>Fitur Utama</div>} />
        <Route path="/tentang-kami" element={<div>Tentang Kami</div>} />
        <Route path="/bantuan" element={<div>Bantuan</div>} />
      </Routes>
    </Router>
  );
}

export default App;

