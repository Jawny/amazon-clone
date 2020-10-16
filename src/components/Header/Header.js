import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBasket,
  ShoppingCart as ShoppingCartIcon,
} from "@material-ui/icons";
import SearchBar from "../SearchBar/SearchBar";
import { useStateValue } from "../../Redux/StateProvider";
// import NavButton from "../NavButton/NavButton"
import logo from "../../images/amazon-logo.png";
import "./Header.scss";

function Header() {
  const [{ cart }] = useStateValue();
  return (
    <nav className="header-container">
      <Link to="/">
        <img className="header-logo" src={logo} />
      </Link>

      <SearchBar />

      <div className="header-buttons-container">
        <Link to="/login" className="headerButton-link">
          <div className="header-button-container">
            <span className="header-button-first-text">Hello Johnny</span>
            <span className="header-button-second-text">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="headerButton-link">
          <div className="header-button-container">
            <span className="header-button-first-text">Returns</span>
            <span className="header-button-second-text">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="headerButton-link">
          <div className="header-button-container">
            <span className="header-button-first-text">Your</span>
            <span className="header-button-second-text">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="headerButton-link">
          <div className="header-button-container header-cart-container">
            <ShoppingCartIcon />
            <span className="header-button-second-text cart-count">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
