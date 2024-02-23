import React from "react";
import { useState } from "react";
import supershopimg from "../../image/supershop.webp";
import supershoplogo from "../../image/logo.png";
import "./loginpage.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuperShopLogin = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [passShow, setPassShow] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("admin");

  // Handle Click From Submition
  const handleFromSignIn = async (event) => {
    event.preventDefault();

    // Input validation End
    localStorage.setItem("username", userName);
    if (!userName === userName && !password === password)
      try {
        navigate("/home", {
          state: {
            id: 1,
            username: userName,
            password: password,
            email: "abc@yourgmail.com",
            roles: "admin",
          },
        });
      } catch (error) {
        console.error("Error saving data:" + error);
        toast("Error sending data: " + error);
      }
  };

  return (
    <div className="full_div_login_page">
      <img className="img-full-view" src={supershopimg} alt="" />
      <div className="bg-tranparant-background"></div>
      <div className="container_super_shop_login">
        <div className="container_super_shop_all">
          {/* <img className="super-shop-img" src={supershopimg} alt="" /> */}
          <span className="heading">Sign-In</span>
          <div className="logo-login-container">
            <img className="super-shop-logo" src={supershoplogo} alt="" />
            <div className="bg-tranparant-login"></div>
          </div>
          <form className="from_super_shop_login" action="">
            <div className="input_field_super_shop_login">
              <input
                type="text"
                placeholder="Username"
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </div>
            <div className="input_field_super_shop_login">
              <input
                type={!passShow ? "password" : "text"}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              {passShow ? (
                <FaEye
                  className="icon-login"
                  onClick={() => setPassShow(!passShow)}
                />
              ) : (
                <FaEyeSlash
                  className="icon-login"
                  onClick={() => setPassShow(!passShow)}
                />
              )}
            </div>
            <button
              className="login-button"
              type="submit"
              onClick={handleFromSignIn}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default SuperShopLogin;
