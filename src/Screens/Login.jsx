import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import { userContext } from "../Context/userContext";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [regMsg, setRegMsg] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  const { user, setUser } = useContext(userContext);
  const { jwt, setJwt } = useContext(userContext);

  const handleLogin = () => {
    
    const payload = {
      email: `${details.email}`,
      password: `${details.password}`,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    let intendedRoute = localStorage.getItem("route")

    // fetch("http://127.0.0.1:8000/api/login", requestOptions)
    fetch("https://tola-ecommerce.herokuapp.com/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        if (result.user) {
          localStorage.setItem("user", JSON.stringify(result.user));
          // localStorage.setItem("pageType", "list");
          setUser(result.user);
          if (intendedRoute){
            navigate(intendedRoute);
          } else {

            navigate("/home");
          }
        } else if(result.error === "Unauthorized"){
          setErrorMsg("Username or password incorrect")
        } else if(result.password ){
          setErrorMsg(result.password[0])
        } else if(result.email ){
          setErrorMsg(result.email[0])
        }

      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    let newreg = localStorage.getItem("newlyReg")
    setRegMsg(newreg)

    localStorage.removeItem("newlyReg")
  }, [])
  

  return (
    <div>
      <Nav />
      <Header desc="My Account" />
      <MobileNav desc="My Account" />
      <div className="login">
        <h4 style={{ textAlign: "center" }} id="login-txt">
          Login
        </h4>
        <p style={{ textAlign: "center", color: "green" }} className="login-txt mb-4">
          {regMsg} <br /> Please login using account details below
        </p>
        <p style={{textAlign: "center", color: "red"}}>{errorMsg}</p>
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
        <Button btnText="Sign in" btnClass="login-btn" btnFunc={handleLogin} />
        <p className="login-txt mt-4" style={{ textAlign: "center" }}>
          Don???t have an Account? <Link to="/register">Create account</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
