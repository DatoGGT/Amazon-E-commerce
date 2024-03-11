
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import SiginPage from './components/SignIn/SiginPage.jsx'
import Register from './components/CreateAccount/Register.jsx'
import Pages from './Page/Pages.jsx';
import AboutProducts from './components/AboutProductPages/AboutProducts.jsx'
import CartPage from './components/Cart/CartPage.jsx'
import Category from './components/AboutProductPages/Category.jsx'
import NotFound from './NotFound/NotFound.jsx'


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Pages/>} />,
      <Route path="/SignIn" element={<SiginPage/>} />,
      <Route path="/CreateAccount" element={<Register/>} />,
      <Route path="/AboutProducts/:id" element={<AboutProducts/>} />,
      <Route path="/Cart" element={<CartPage/>} />,
      <Route path="/Category/:id" element={<Category/>}  />,
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
