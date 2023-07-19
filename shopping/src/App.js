import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ViewProducts from "./components/ViewProducts";
import ShoppingBag from "./components/ShoppingBag";
import CheckOut from "./components/CheckOut";
import OrderConfirmation from "./components/OrderConfirmation";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/view-products-women"
          element={<ViewProducts type={"women"} />}
        ></Route>
        <Route
          path="/view-products-men"
          element={<ViewProducts type={"men"} />}
        ></Route>
        <Route
          path="/view-products-electronics"
          element={<ViewProducts type={"electronics"} />}
        ></Route>
        <Route
          path="/view-products-allproducts"
          element={<ViewProducts type={"allproducts"} />}
        ></Route>
        <Route
          path="/view-products-jewellary"
          element={<ViewProducts type={"jewellary"} />}
        ></Route>
        <Route path="/bag" element={<ShoppingBag />}></Route>
        <Route path="/check-out" element={<CheckOut />}></Route>
        <Route path="/product-details/:id" element={<ProductDetails />}></Route>
        <Route
          path="/order-confirmation"
          element={<OrderConfirmation />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
