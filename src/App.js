import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Books from './Pages/Books';
import { books } from "./data";
import Bookinfo from './Pages/Bookinfo';
import Cart from './Pages/Cart';
import { useState, useEffect  } from 'react';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) { 
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id 
      ?  {
          ...item,
          quantity: + quantity,
         }
         : item
        
    ))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() =>{
   console.log(cart)
  },[cart])

  return (
    <Router>
      <div className="App">
          <Nav numberOfItems={numberOfItems()}/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/books/" element={<Books books={books}/> } />
            <Route path="/books/:id" element={<Bookinfo books={books} cart={cart} addToCart={addToCart}/>}/>
            <Route path="/cart" element={<Cart book={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
