
import "./App.css"


import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
//import Product from './Components/Product';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component ={Cart}/>
        <Route exact path="/" component ={ProductList}/>
        <Route component={Default}/>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
