import React, { useState, useEffect, useContext } from 'react';
import Elogo from '../../assets/e-force-logo.png'
import { GoHomeFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import './enav.css'

function ENav() {

  const { user, setUser } = useContext(AuthContext);
  const accessToken = user.data.accessToken;
  const refreshToken = user.data.refreshToken;



  const navigateTo = useNavigate();

  const handleManagementClick = () => {
    navigateTo('/');
  };
  const handleAnalysicClick = () => {
    navigateTo('/Officer-Report');
  };



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
    <div className="homeNav" onClick={handleAnalysicClick}>
        <div className="active-Line"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 17" fill="none" className='navIcon'>
        <path d="M29.2192 5.70972e-07C28.7868 0.000111937 28.3609 0.105821 27.9785 0.307945C27.5962 0.510069 27.269 0.802492 27.0253 1.15981C26.7817 1.51713 26.629 1.92854 26.5804 2.35829C26.5319 2.78804 26.5891 3.22314 26.7469 3.62578L21.1575 9.2152C20.5344 8.96992 19.8416 8.96992 19.2185 9.2152L15.2228 5.21953C15.381 4.8168 15.4385 4.38151 15.3901 3.95152C15.3418 3.52153 15.1891 3.10986 14.9454 2.75231C14.7018 2.39476 14.3744 2.10215 13.9919 1.89993C13.6093 1.69771 13.1832 1.59201 12.7505 1.59201C12.3178 1.59201 11.8917 1.69771 11.5091 1.89993C11.1266 2.10215 10.7992 2.39476 10.5555 2.75231C10.3119 3.10986 10.1592 3.52153 10.1109 3.95152C10.0625 4.38151 10.12 4.8168 10.2782 5.21953L3.62628 11.8714C3.05819 11.6486 2.43069 11.6281 1.84929 11.8135C1.2679 11.9989 0.768067 12.3788 0.43384 12.8894C0.0996124 13.4 -0.0486253 14.0101 0.0140522 14.6171C0.0767297 15.2241 0.3465 15.791 0.778002 16.2225C1.2095 16.654 1.77642 16.9238 2.38343 16.9864C2.99044 17.0491 3.60052 16.9009 4.11109 16.5667C4.62166 16.2324 5.00157 15.7326 5.18696 15.1512C5.37235 14.5698 5.3519 13.9423 5.12905 13.3742L11.781 6.7223C12.404 6.96758 13.0969 6.96758 13.72 6.7223L17.7157 10.718C17.5575 11.1207 17.5 11.556 17.5484 11.986C17.5967 12.416 17.7494 12.8276 17.993 13.1852C18.2367 13.5427 18.5641 13.8354 18.9466 14.0376C19.3292 14.2398 19.7553 14.3455 20.188 14.3455C20.6207 14.3455 21.0468 14.2398 21.4294 14.0376C21.8119 13.8354 22.1393 13.5427 22.3829 13.1852C22.6266 12.8276 22.7793 12.416 22.8276 11.986C22.876 11.556 22.8185 11.1207 22.6603 10.718L28.2497 5.12855C28.6134 5.27145 29.0042 5.33232 29.3941 5.30685C29.7841 5.28137 30.1636 5.17017 30.5057 4.98118C30.8477 4.79218 31.1438 4.53004 31.3729 4.21346C31.602 3.89687 31.7584 3.53364 31.831 3.14966C31.9036 2.76568 31.8906 2.37042 31.7929 1.99205C31.6951 1.61369 31.5151 1.26154 31.2657 0.960729C31.0163 0.659916 30.7035 0.417846 30.3498 0.25178C29.996 0.0857144 29.61 -0.000255635 29.2192 5.70972e-07Z" fill="black"/>
        </svg>
    </div> 

    <div className="logoutBox">
      <span className='logoutText' onClick={handleLogout}>Signout</span>
    </div>

    </div>
  )
}

export default ENav