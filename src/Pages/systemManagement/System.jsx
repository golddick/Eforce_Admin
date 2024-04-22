import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'; 
import ENav from '../../component/EforceNav/ENav';
import HomeNav from '../../component/HomeNav/HomeNav';
import BodyHeader from '../../component/BodyHeader/BodyHeader';
import TableNav from '../../component/TableNav/TableNav';
import { BsThreeDotsVertical } from "react-icons/bs";
import './system.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

function System() {
  const { user } = useContext(AuthContext);
  const accessToken = user.data.accessToken;
  const orgId = user.data.organizationId


  const navigateTo = useNavigate();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage, setNumPerPage] = useState(10);

  const handleProceedClick = () => {
    navigateTo('/Officer-Profile');
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);


        try {
          const response = await axios.get(`https://project-e-force-backend-v2.onrender.com/api/v1/people?type=officer&limit=50&cursor=2024-04-11T20%3A26%3A49.318Z`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
            // params: {
            //   limit: numPerPage,
            //   cursor: '024-04-11T20%3A26%3A49.318Z' // Use last cursor from previous response
            // }
          });
  
        // Extract necessary data from the response
        const responseData = response.data.data; // Extract data array from the response
  
        // Set the data in the component state
        setUserData(responseData);
  
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
  
    fetchData();
  }, [accessToken]);
  
console.log('userdata', userData)
  return (
    <div className='System'>
      <div className="leftNav">
        <ENav/>
        <HomeNav/>
      </div>
      <div className="bodyBox">
        <BodyHeader/>
        <TableNav/>
        <div className="officers">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            <>
              {userData.length > 0 && userData.map((user, index) => (
                <div className="officer" key={index}>
                  <img src="https://media.istockphoto.com/id/1077585330/photo/oranges.jpg?s=612x612&w=0&k=20&c=ZfBi_hD6A_tvNoanVwYBVZIgtcUxZEMzi11DUsGAK4M=" alt="" className='officerImg'/>
                  <span className='officerName'>{user.email}</span>
                  <div className="vActivity" onClick={handleProceedClick}>View Profile</div>
                  <BsThreeDotsVertical className='moreOption'/>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default System;
