// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

const App = () => {
  return (
      <AuthProvider>
          <Router>
              <div className="min-h-screen bg-gray-100">
                  <Navbar />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/login" element={<Login />} />
                      <Route
                          path="/cart"
                          element={
                              <PrivateRoute>
                                  <Cart />
                              </PrivateRoute>
                          }
                      />
                  </Routes>
              </div>
          </Router>
      </AuthProvider>
  );
};

export default App;