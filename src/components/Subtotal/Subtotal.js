import React, { PureComponent } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Redux/StateProvider";
import { getCartTotal } from "../../Redux/reducer";
import "./Subtotal.scss";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal-container">
      <CurrencyFormat
        renderText={(value) => (
          <>
            {" "}
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
