import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart as ShoppingCartIcon } from "@material-ui/icons";
import SearchBar from "../SearchBar/SearchBar";
import { useStateValue } from "../../Redux/StateProvider";
import { auth } from "../../Firebase/Firebase";
// import NavButton from "../NavButton/NavButton"
import logo from "../../images/amazon-logo.png";
import "./Header.scss";

function Header() {
  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header-container">
      <Link to="/">
        <img className="header-logo" src={logo} />
      </Link>

      <SearchBar />

      <div className="header-buttons-container">
        <Link to={!user && "/login"} className="headerButton-link">
          <div onClick={login} className="header-button-container">
            <span className="header-button-first-text">
              Hello {user?.email}
            </span>
            <span className="header-button-second-text">
              {user ? "Sign Out" : "Sign In"}
            </span>
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
