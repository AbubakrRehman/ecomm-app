import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
