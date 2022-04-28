import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';
import Header from '../components/header/Header';
import Home  from '../components/home/Home';
import Product from '../components/product-page/Product';
import Cart from '../components/cart/Cart';
import NewsLetter from '../components/footer/NewsLetter';
import Footer from '../components/footer/Footer';

function App() {
  return <Router>
    <Route>
     <Header />
    </Route>
    <Route path='/'>
     <Home />
    </Route>
    <Route path='/product'>
     <Product />
    </Route>
    <Route path='/cart'>
     <Cart />
    </Route>
    <Route>
     <NewsLetter />
     <Footer/>
    </Route>
  </Router> 
  ;
}

export default App;
