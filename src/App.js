import Main from "./Component/Mainpage/Main";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from "./Component/Products";
import React, {useEffect} from "react";
import CartPage from "./Component/Cart/CartPage";
import ErrorPage from "./Component/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { updateStoredCart } from "./Redux/cartReducerActionCreator";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import Signup from "./Component/SignUp/index";
import Modal from "./Component/Modal";

const storedCart = JSON.parse(localStorage.getItem('cart'))

function App() {
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch()

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    useEffect(()=>{
      dispatch(updateStoredCart(storedCart))
    },[])

  return (
    <div className="App">
      <Router>
        <Modal/>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/carts'>
            <CartPage/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='*'>
            <ErrorPage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
