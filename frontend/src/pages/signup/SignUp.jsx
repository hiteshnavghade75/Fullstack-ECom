import React, { useState } from "react";
import signUpAnime from "../../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import './SignUp.css';
import useSignUp from "../../hooks/useSignUp";
import Loader from "../../utils/Loader";
import Header from "../../components/header/Header";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { loading, signup } = useSignUp();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData)
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="form-container">
          <div className="profile-img-container">
            <img src={signUpAnime} alt="animation" className="profile-image" />
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              value={formData.fullName}
              onChange={handleInputChange}
            />

            <label htmlFor="username">Username </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              value={formData.username}
              onChange={handleInputChange}
            />

            <label htmlFor="gender">Gender</label>
            <div className="gender-container">
              <label htmlFor="male" className="gender-label">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label htmlFor="female" className="gender-label">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                />
                Female
              </label>
            </div>

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

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <span className="password-icon" onClick={handleShowConfirmPassword}>
                {showConfirmPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>

            <button className="signup-btn" type="submit">
              {!loading ? "Sign Up" : <Loader />}
            </button>
          </form>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
