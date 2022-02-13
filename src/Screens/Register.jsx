import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import { userContext } from "../Context/userContext";

function Register() {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });

  };

  // const { user, setUser } = useContext(userContext);
  // const { jwt, setJwt } = useContext(userContext);

  const handleSubmit = () => {
    // const data = {
    //   ...details,
    // };


    const data = {
      "name": `${details.name}`,
      "email": `${details.email}`,
      "password": `${details.password}`,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      // body: JSON.stringify(data),
      redirect: "follow",
    };

    console.log("data", data);
    // fetch("http://127.0.0.1:8000/api/register", requestOptions)
    fetch("https://tola-ecommerce.herokuapp.com/api/register", requestOptions)
      .then((response) => response.json())

      .then((result) => {
        console.log("Result", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <Nav />
      <Header desc="My Account" />
      <MobileNav desc="My Account" />
      <div className="login">
        <h4 style={{ textAlign: "center" }} id="login-txt">
          Register
        </h4>
        <p style={{ textAlign: "center" }} className="login-txt mb-4">
          Please register using account details below
        </p>
        <input
          className="login-input mb-4"
          type="text"
          placeholder="Name"
          id="name"
          value={details.name}
          onChange={handleChange}
        />
        <input
          className="login-input "
          type="email"
          placeholder="Email address"
          id="email"
          value={details.email}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          id="password"
          value={details.password}
          onChange={handleChange}
        />
        <p className="login-txt mt-4 mb-4">Forgot your password?</p>
        <Button btnText="Sign Up" btnClass="login-btn" btnFunc={handleSubmit} />
        <p className="login-txt mt-4" style={{ textAlign: "center" }}>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
