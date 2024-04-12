import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
      Login
    </div>
  );
};

export default Profile;
