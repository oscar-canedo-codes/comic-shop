import React from "react";

// PATHS
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';

// LOGIN
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';

// PRODUCTS
import Cart from './pages/Cart/Cart';

function App() {

  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;