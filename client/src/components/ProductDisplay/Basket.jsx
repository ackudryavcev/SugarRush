import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";
import { CartContext } from "../../store/Context";

const Basket = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const isInCart = cartCtx.items.some((item) => item._id === product._id);

  const submitHandler = () => {
    if (isInCart) {
      cartCtx.removeItem(product._id);
    } else {
      cartCtx.addItem({ ...product, amount: 1 });
    }
  };

  return (
    <div onClick={submitHandler} style={{ cursor: "pointer" }}>
      <span style={{ fontSize: "20px" }}>
        {isInCart ? (
          <FiShoppingCart
            className="header-cart-button-image"
            size={40}
            color="#f095c4"
          />
        ) : (
          <FiShoppingCart size={40} />
        )}
      </span>
    </div>
  );
};

Basket.propTypes = {
  product: PropTypes.object,
};

export default Basket;
