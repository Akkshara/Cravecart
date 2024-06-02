import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();
  
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">CraveCart</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/myorders">My Orders</Link>}
          {isLoggedIn && <Link to="/mycart">My Cart</Link>}
          {!isLoggedIn ? (
            <>
              <Link to="/mylogin" onClick={login}>Login</Link>
              <Link to="/createuser">Signup</Link>
            </>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
