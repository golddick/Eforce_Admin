import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import EForceNav from '../../component/EforceNav/EforceNav';
import BodyHeader from '../../component/BodyHeader/BodyHeader';
import Img from '../../assets/user.svg';
import AddOrg from '../../component/Popup/AddOrganization/AddOrg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './organization.css';

function Organization() {
  const { user } = useContext(AuthContext);
  const accessToken = user.data.accessToken;

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigateTo = useNavigate();
  const [addOrg, setAddOrg] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage, setNumPerPage] = useState(20);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const handleViewClick = (orgId) => {
    const route = `/Organization-Profile/${orgId}`;
    navigateTo(route);
  };

  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1);
      console.log("Page number:", currentPage + 1);
    }
  };

  const togglePopup = () => {
    setAddOrg(!addOrg);
  };


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          params: {
            limit: 20,
            cursor: '2024-03-25T11:15:48.676Z' 
            // cursor: userData.length > 0 ? userData[userData.length - 1].createdAt : '2024-03-19T21:58:48.676Z' // Use the last item's createdAt as the cursor
            // cursor: userData ? userData.metaData.lastCursor : '2024-03-25T11:15:48.676Z' // Use last cursor from previous response
          }
        });
  
        // Assuming the response.data.data is an array of objects with a property to sort on (e.g., 'name')
        const sortedData = response.data.data.sort((a, b) => {
          return a.name.localeCompare(b.name); // Sorting alphabetically by the 'name' property
        });
  
        setUserData(sortedData);
        setIsLoading(false);

        console.log( response.data.data)

  
        // Check if there are more items in the next page
        setHasNextPage(response.data.metaData.hasNextPage);
  
        // Always assume that there's a previous page for simplicity
        // setHasPrevPage(true);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [accessToken, currentPage, numPerPage]);
  
 

  return (
    <div className='OrganizationPage'>
      <div className="OrgleftNav">
        <EForceNav />
      </div>
      <div className="OrgbodyBox">
        <BodyHeader />
        <div className="OrgboxB">
          <div className="createOrg">
            <button className='addOrgBtn' onClick={togglePopup}>Create New Organization</button>
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            <>
              {userData && userData.length > 0 ? (
                userData.map((org, index) => (
                  <div className="organizationTab" key={index}>
                    <img src={Img} alt="Img" className='userImg' />
                    <div className="NotificationDetails">
                      <span className='user-Name'>{org.name}</span>
                      <p className='notification-Detail'>{org.description}</p>
                    </div>
                    <button className='addOrgBtn' onClick={() => handleViewClick(org.id)}>View</button>
                  </div>
                ))
              ) : (
                <div>No organizations found</div>
              )}

              {addOrg && <AddOrg close={togglePopup} />}
            </>
          )}
          <div className="pagTab">
            <button className='addOrgBtn' onClick={prevPage} disabled={!hasPrevPage}>Prev</button>
            <button className='addOrgBtn' onClick={nextPage} disabled={!hasNextPage}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
