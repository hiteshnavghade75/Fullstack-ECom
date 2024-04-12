import React, { useState } from "react";
import signUpAnime from "../../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import '../signup/SignUp.css';
import Loader from "../../utils/Loader";
import useLogin from "../../hooks/useLogin";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const {loading, login} = useLogin();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData)
  };

  return (
    <>
    <div className="signup-container">
      <div className="form-container">
        <div className="profile-container">
          <img src={signUpAnime} alt="animation" className="profile-image" />
        </div>

        <form className="form" onSubmit={handleSubmit}>

          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            value={formData.username}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="password-icon" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="signup-btn" type="submit">
           {!loading ? "Log in" : <Loader/>}
          </button>
        </form>

        <p className="login-link">
          Already have an account?
          <Link to="/signup">sign Up</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
