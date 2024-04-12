import React from 'react';
import './Profile.css';
import { HiOutlineUserCircle } from "react-icons/hi2";

const Profile = () => {

  return (
    <div className="profile-container">
      <HiOutlineUserCircle className='profile-logo' />
      Login
    </div>
  );
};

export default Profile;
