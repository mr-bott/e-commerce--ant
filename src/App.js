import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Category from './components/Category';
import Product from "./components/Product";
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import CartContext from './context/CartContext';
import './App.css';
import AntiqueSellPage from './components/Antiquesellpage';
import ProfilePage from './components/ProfilePage';

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({ cartList: [] });
  }

  removeCartItem = idd => {
    const { cartList } = this.state;
    const filteredList = cartList.filter(each => each.id !== idd);
    this.setState({ cartList: filteredList });
  }

  decrementCartItemQuantity = ids => {
    const { cartList } = this.state;
    const updatedCartList = cartList
      .map(each => {
        if (each.id === ids) {
          if (each.quantity > 1) {
            return { ...each, quantity: each.quantity - 1 };
          }
          return null;
        }
        return each;
      })
      .filter(item => item !== null);
    this.setState({ cartList: updatedCartList });
  }

  incrementCartItemQuantity = ids => {
    const { cartList } = this.state;
    const updatedCartList = cartList.map(each => {
      if (each.id === ids) {
        return { ...each, quantity: each.quantity + 1 };
      }
      return each;
    });
    this.setState({ cartList: updatedCartList });
  }

  addCartItem = product => {
    const { cartList } = this.state;
    const productObject = cartList.find(eachCartItem => eachCartItem.id === product.id);

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity;
            return { ...eachCartItem, quantity: updatedQuantity };
          }
          return eachCartItem;
        }),
      }));
    } else {
      const updatedCartList = [...cartList, product];
      this.setState({ cartList: updatedCartList });
    }
  }

  render() {
    const { cartList } = this.state;

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
        }}
      >
        <Router>
          <Header />
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/category" element={<Category />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/seller" element={<AntiqueSellPage />} />
            <Route exact path="/my_account" element={<ProfilePage />} />
            <Route  path="/not-found" element={<NotFound />} />
            <Route  path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    );
  }
}

export default App;
