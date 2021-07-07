import React, { Component } from 'react'
import { render } from 'react-dom';
import Product from './components/Products'
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer';
import Mess from './components/Mess';
import Cart from './components/Cart'
import ProductsContainer from './container/ProductsContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductsContainer />
              <Mess />

              <Cart />
              </div>
          </main>
          <Footer />
          </div>
      </div>
    );
  }
}

export default App;
