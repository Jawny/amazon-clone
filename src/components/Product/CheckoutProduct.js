import React from "react";
import { useStateValue } from "../../Redux/StateProvider";
import "./CheckoutProduct.scss";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkout-product-container">
      <img className="checkout-product-img" src={image} />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
