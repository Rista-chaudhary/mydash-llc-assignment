import React, { useState } from "react";
import "./style.scss";
import LoginBackground from "./LoginBackground.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  function changeHandler(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  }

  function handleClick() {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email) != true
    ) {
      // return true;
      alert("You have entered an invalid email address!");
    } else if (input.password !== input["confirm-password"]) {
      alert("You have entered an invalid password");
    } else if (
      /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(
        input.number
      ) != true
    ) {
      alert("Enter valid number");
    } else {
      window.localStorage.setItem("isLogin", true);
      navigate("/chart");
    }
  }

  return (
    <div className="login__main-container">
      <div className="login__first-child-container">
        <img className="login__image-container" src={LoginBackground} />
      </div>
      <div className="login__second-child-container">
        <div className="login__head-container">Create an account</div>
        <div className="login__first-input-container">
          <div className="login__input-heading-container">
            Your email address
          </div>
          <input
            className="login__input-container"
            type="text"
            onChange={changeHandler}
            name="email"
          />
        </div>
        <div className="login__first-input-container">
          <div className="login__input-heading-container">Your password</div>
          <input
            className="login__input-container"
            type="password"
            onChange={changeHandler}
            name="password"
          />
        </div>
        <div className="login__first-input-container">
          <div className="login__input-heading-container">
            Confirm your password
          </div>
          <input
            className="login__input-container"
            type="password"
            onChange={changeHandler}
            name="confirm-password"
          />
        </div>
        <div className="login__first-input-container">
          <div className="login__input-heading-container">Your full name</div>
          <input
            className="login__input-container"
            type="text"
            onChange={changeHandler}
            name="full-name"
          />
        </div>
        <div className="login__first-input-container">
          <div className="login__input-heading-container">
            Your phone number
          </div>
          <input
            className="login__input-container"
            type="number"
            onChange={changeHandler}
            name="number"
          />
        </div>
        <div className="login__checked-condition-container">
          <input
            className="login__check-box-container"
            type="checkbox"
            checked
          />
          <div>I read and agree Terms and Conditions</div>
        </div>
        <button className="login__submit-button" onClick={handleClick}>
          Create account
        </button>
      </div>
    </div>
  );
}
export default Login;
