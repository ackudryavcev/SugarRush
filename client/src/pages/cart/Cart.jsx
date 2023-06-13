import React, { useEffect, useState } from "react";
import { CartContext } from "../../store/Context";
import { useContext } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import ProductOverview from "../../components/ProductDisplay/ProductOverview";
import ProductTitleAndPrice from "../../components/ProductDisplay/ProductTitleAndPrice";
import Summary from "../../components/Summary/Summary";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import "./cart.css";

export default function Cart() {
  const { items, totalAmount, addItem, removeItem, resetCart } =
    useContext(CartContext);
  const [isEmptyCart, setIsEmptyCart] = useState(true);

  useEffect(() => {
    if (totalAmount > 0) {
      setIsEmptyCart(false);
    }
  }, [totalAmount]);

  return (
    <>
      <Header />
      <div>
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <Link to={"/products"}>CONTINUE SHOPPING</Link>
        </div>
        <div className="cart-bar">
          <div className="cart-bar-items">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
        <div className="cart-items">
          {items &&
            items.map((product) => {
              return (
                <div className="cart-item" key={product._id}>
                  <ProductOverview product={product} />
                  <ProductTitleAndPrice product={product} />
                  <div className="cart-counter">
                    <button onClick={() => removeItem(product._id)}>-</button>
                    <span className="product-amount"> {product.amount}</span>
                    <button onClick={() => addItem({ ...product, amount: 1 })}>
                      +
                    </button>
                  </div>
                  <p className="total-item-price">
                    €{(product.price * product.amount).toFixed(2)}
                  </p>
                </div>
              );
            })}
        </div>
        {items.length > 0 ? (
          <button className="trash-icon" onClick={() => resetCart()}>
            <AiOutlineDelete size={30} />
          </button>
        ) : (
          ""
        )}

        <Summary isEmptyCart={isEmptyCart} />
      </div>
      <Footer />
    </>
  );
}
