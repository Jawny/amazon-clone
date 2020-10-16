import React from "react";
import CurrencyFormat from "react-currency-format";
import { CheckoutProduct, Subtotal } from "../../components/index";
import { useStateValue } from "../../Redux/StateProvider";
import "./Checkout.scss";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <img
          className="checkout-banner"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        {cart?.length === 0 ? (
          <div>
            <h2 className="checkout-title">Your Shopping Cart is empty</h2>
            <p>
              Your shopping cart lives to serve. Give it purpose – fill it with
              groceries, clothing, household supplies, electronics and more.
              Continue shopping on the Amazon.ca homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your Shopping Cart</h2>
            {cart.map((product) => (
              <CheckoutProduct
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
