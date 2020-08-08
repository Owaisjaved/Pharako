import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { render } from 'react-dom';
import './style.css';
import { PhotoList } from './pages/PhotoList';
import { Cart } from './pages/Cart';
import { CartProvider } from './CartContext';
import { NavBar } from './NavBar';

const App = () => {
  //Putting ALL Routing Component in a Single Component
  const Routing = () => {
    return (
      <Switch>
        <Route path='/' exact>
          <PhotoList />
        </Route>
        <Route path='/cart'>
          <Cart />

        </Route>
      </Switch>
    )
  }
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routing />
      </CartProvider>
    </BrowserRouter>
  )
}

render(<App />, document.getElementById('root'));
