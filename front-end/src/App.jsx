import React from "react";

// PATHS
import { Routes, Route } from "react-router-dom";

// LAYOUT
import Layout from './shared/components/Layout/Layout';
import Header from './shared/components/Header/Header';
import Footer from './shared/components/Footer/Footer';

// LOGIN
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register'

// USER
import Users from './pages/Users/Users';
import Admin from './pages/Admin/Admin';

// PRODUCTS
import Cart from './pages/Cart/Cart';
import ProductCreate from './pages/product/component/ProductCreate/ProductCreate';
import ProductList from './pages/product/component/ProductList/ProductList';
import ProductDetail from './pages/product/component/ProductDetail/ProductDetail';
import ProductEdit from './pages/product/component/ProductEdit/ProductEdit';
import OrderList from './shared/Orders/OrderList';

// ABOUT 
import Contact from './pages/Contact/Contact';
import AboutUs from './shared/components/AboutUs/AboutUs';


function App() {

  return (

    <Layout>
      <Header />
      <Routes>
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<Admin />} />
        <Route path='contact' element={<Contact />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<ProductList />} />
        <Route path='admin/produclist' element={<ProductList />} />
        <Route path='admin/orderlist' element={<ProductList />} />
        <Route path='productdetail/:_id' element={<ProductDetail />} />
        <Route path='productcreate' element={<ProductCreate />} />
        <Route path='productedit/:id' element={<ProductEdit />} />
        <Route path='users' element={<Users />} />
        <Route path='orderList' element={<OrderList />} />
        <Route path='aboutus' element={<AboutUs />} />
      </Routes>
    <Footer/>
    </Layout>
  );
}

export default App;