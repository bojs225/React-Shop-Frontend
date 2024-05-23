import React from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import logo2 from "../Assets/logo2.png";
import { useRef } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotatlCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo2} alt="logo" />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Collections
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Teens
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>

        <div className="nav-cart-count">{getTotatlCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
