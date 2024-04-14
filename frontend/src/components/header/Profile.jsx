import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { HiOutlineUserCircle } from "react-icons/hi2";

const Profile = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <div className="profile-container" onClick={handleClick}>
      <HiOutlineUserCircle className='profile-logo' />
      <span className='cart-text'>
        Login
      </span>
    </div>
  );
};

export default Profile;
