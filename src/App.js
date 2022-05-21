import Navbar from "../src/components/common/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/checkout/ProductDetail";
import { Cart } from "./components/cart/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="product/:productId" element={<ProductDetail />}/>
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
