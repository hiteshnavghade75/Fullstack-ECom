import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineLogout } from "react-icons/ai";

const Profile = () => {

  const userString = localStorage.getItem('app-user');
  const user = userString ? JSON.parse(userString) : null;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem("app-user")
    navigate('/')
  }

  return (
    <div className="profile-container" >
      {user ? <AiOutlineLogout className='profile-logo' onClick={handleLogout}/>
        :
        <HiOutlineUserCircle className='profile-logo' onClick={handleClick} />
      }
      <span className='cart-text'>
        {user ? "Logout" : "Login"}
      </span>
    </div>
  );
};

export default Profile;
