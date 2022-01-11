import './App.css';
import "./Day1.css";
import "./Homepage.css";
import "./Faq.css";
import Products from './Screens/Products';
import Login from './Screens/Login';
import OrderCompleted from './Screens/OrderCompleted';
import ShippingInfo from './Screens/ShippingInfo';
import Register from './Screens/Register';
import ShopList from './Screens/ShopList';
import ShoppingCart from './Screens/ShoppingCart';
import OneProduct from './Screens/OneProduct';
import Homepage from './Screens/Homepage';
import BlogPage from './Screens/BlogPage';
import Error from './Screens/Error';
import Faq from './Screens/Faq';
import SingleBlog from './Screens/SingleBlog';
import About from './Screens/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Screens/Contact';
import { useState } from 'react';
import { userContext } from './Context/userContext';
import { CartProvider } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
function App() {
  const [jwt, setJwt]  = useState("");
  const [user, setUser]  = useState("");
  
  return (
    <CartProvider>
    <userContext.Provider value={{jwt, setJwt, user, setUser}}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/home" element={<Homepage/>}/>
    <Route path="/blogs" element={<BlogPage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/completed" element={<OrderCompleted/>}/>
    <Route path="/shop" element={<ShopList/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/error" element={<Error/>}/>
    <Route path="/proceed" element={<ShippingInfo/>}/>
    <Route path="/shipping-info" element={<ShippingInfo/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/product/:prod_id" element={<OneProduct/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<ShoppingCart/>}/>
    <Route path="/blog/:blog_id" element={<SingleBlog/>}/>
    <Route path="/contact" element={<ShippingInfo/>}/>
    
    </Routes>
    </BrowserRouter>
    </userContext.Provider>
    </CartProvider>

  );
}

export default App;
