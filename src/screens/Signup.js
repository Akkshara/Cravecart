import React, { useState } from "react";
import { Link } from "react-router-dom";
 

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();
    if (!json.success) {
      alert("Please enter valid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="card p-4 shadow"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <h2 className="card-title text-center">Sign Up</h2>
          <Link
            to="/"
            className="close-button"
            style={{
              textDecoration: "none",
              color: "black",
              position: "absolute",
              top: "-3px",
              right: "10px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            x
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                value={credentials.email}
                onChange={onChange}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="Address"
                name="geolocation"
                value={credentials.geolocation}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-success m-2">
              Submit
            </button>
            <Link to="/login" className="btn btn-danger m-2">
              Already a User?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
