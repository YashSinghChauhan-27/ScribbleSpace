import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import animation from "../components/animation.mp4";

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
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden -z-10">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={animation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Container */}
      <div className="flex justify-center items-center h-screen w-full mt-20">
        <form
          className="relative bg-transparent backdrop-blur-xl shadow-2xl rounded-xl p-6 w-4/5 max-w-md px-10 py-10 border !border-gray-400"
          onSubmit={handleSubmit}
        >
          {/* Header */}
          <div className="bg-gradient-to-tr from-[#2f276f] to-[#8d80fd] text-white text-4xl font-bold text-center p-4 rounded-lg mt-2">
            SIGN UP
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-4 mt-6">
            <input
              placeholder="Name"
              className="p-3 rounded bg-transparent backdrop-blur-xl border !border-black !focus:border-[#5244ba] text-sm"
              type="text"
              value={credentials.name}
              onChange={onChange}
              name="name"
              id="name"
            />
            <input
              placeholder="Email"
              className="p-3 rounded bg-transparent backdrop-blur-xl border !border-black !focus:border-[#5244ba] text-sm"
              type="email"
              value={credentials.email}
              onChange={onChange}
              name="email"
              id="email"
              aria-describedby="emailHelp"
            />
            <input
              placeholder="Password"
              className="p-3 rounded bg-transparent backdrop-blur-xl border !border-black !focus:border-[#5244ba] text-sm"
              type="password"
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
            />
            <input
              placeholder="Confirm Password"
              className="p-3 rounded bg-transparent backdrop-blur-xl border !border-black !focus:border-[#5244ba] text-sm"
              type="password"
              value={credentials.confirmPassword}
              onChange={onChange}
              name="confirmPassword"
              id="confirmPassword"
            />

            <button
              className="bg-[#2f276f] bg-gradient-to-tr from-[#2f276f] to-[#8d80fd] text-white font-bold p-2 rounded hover:opacity-90 transition text-md"
              type="submit"
            >
              Submit
            </button>
            <p className="text-gray-600 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[#5244ba] font-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
