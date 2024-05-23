import React from "react";
import "./css/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an acoount? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms & conditions and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
