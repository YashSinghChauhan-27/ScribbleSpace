import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );

      const json = await response.json();
      console.log("Response from server:", json);

      if (response.ok) {
        props.showAlert("Signup Successful", "success");
        navigate("/login");
      } else {
        alert(json.error || "Error during signup");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="header">Sign Up</div>
        <div className="inputs">
          <input
            placeholder="Name"
            className="input"
            type="text"
            value={credentials.name}
            onChange={onChange}
            name="name"
            id="name"
          />
          <input
            placeholder="Email"
            className="input"
            type="email"
            value={credentials.email}
            onChange={onChange}
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
          <input
            placeholder="Password"
            className="input"
            type="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
          <input
            placeholder="Confirm Password"
            className="input"
            type="password"
            value={credentials.confirmPassword}
            onChange={onChange}
            name="confirmPassword"
            id="confirmPassword"
          />
          <button className="login-btn" type="submit">
            Submit
          </button>
          <p className="signup-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
