import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../AuthContext'; 
const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">
            CraveCart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/myorders">
                    My Orders
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex">
            {!isLoggedIn ? (
              
                <>
                  <Link className="btn bg-white text-success mx-1" to="/login" onClick={login}>
                    Login
                  </Link>
                  <Link className="btn bg-white text-success mx-1" to="/createuser">
                    Signup
                  </Link>
                </>
              ) : (
                <>
                 <Link className=" btn fs-5 text-white mx-2" to="/mycart">
                    My Cart
                  </Link>
                
                <button className="btn bg-white text-danger mx-1"  onClick={logout}>
                  Logout
                </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;