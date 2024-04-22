import React, { useState, useEffect, useContext } from 'react';
import Elogo from '../../assets/e-force-logo.png'
import { GoHomeFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import './enav.css'

function EForceNav() {

  const { user, setUser } = useContext(AuthContext);
  const accessToken = user.data.accessToken;
  const refreshToken = user.data.refreshToken;



  const navigateTo = useNavigate();

  const handleManagementClick = () => {
    navigateTo('/Organization');
  };



  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://project-e-force-backend-v2.onrender.com/api/v1/authentication/logout',
  //       {
  //         accessToken: accessToken,
  //         refreshToken: refreshToken
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         }
  //       }
  //     );
  //     console.log(response.data.message); 
  //     setUser(null); 
  //     navigateTo("/Organization-Login");
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //   }
  // };


  const handleLogout = async () => {
    try {
         // Clear everything in localStorage
        
      if (user && user.data) {
        const { accessToken, refreshToken } = user.data;
        const response = await axios.post(
          'https://project-e-force-backend-v2.onrender.com/api/v1/authentication/logout',
          {
            accessToken: accessToken,
            refreshToken: refreshToken
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }
        );
        console.log(response.data.message); 
        // setUser(null); 
        localStorage.clear();
        navigateTo("/Organization-Login");
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  return (
    <div className='ENav'>
        <div className="eLogo"> 
            <img src={Elogo} alt=""  />
        </div>

    <div className="homeNav" onClick={handleManagementClick}>
        <div className="active-Line"></div>
        <GoHomeFill className='navIcon'/>
    </div> 
  

    <div className="logoutBox">
      <span className='logoutText' onClick={handleLogout}>Signout</span>
    </div>

    </div>
  )
}

export default EForceNav