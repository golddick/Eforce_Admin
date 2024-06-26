import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './orgprofile.css'


function OrgSummary() {
    const { user } = useContext(AuthContext);
    const accessToken = user?.data.accessToken;
    const { orgId } = useParams();
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${orgId}`,{
                    headers: {
                                    Authorization: `Bearer ${accessToken}`
                                  },
                });
                setUserData(response.data.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [orgId]);

    return (
        <div className='ProfileSummary'>
            <div className="summary">
                <span className='psHeader'>Organization Overview</span>
                {
                    isLoading? (
                        <div>Loading...</div>
                    ): error? (
                        <div>ERROR:{error.message}</div>
                    ):(
                        <>
                        <p className='psBio'>{userData.description}</p>
                        </>
                    )
                }
            </div>

            <div className="orgprofileBox">
                <div className='psHeader'>Organization Staffs</div>
                <div className="orgBody">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error.message}</div>
                    ) : (
                        <>
                            {userData.organizationUsers && userData.organizationUsers.length > 0 ? (
                                userData.organizationUsers.map((user, index) => (
                                    <div className="staffTab" key={index}>
                                      <div className='ProfileImg'>
                             <img src="data:image/jpeg;base64,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" alt=""
                             className='staffImg'
                             />
                         </div>
                                        <div className="staffName">
                                            <span>{user.user.email}</span>
                                        </div>
                                        <div className="staffRole">
                                            <span>{user.role}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No organizations found</div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OrgSummary;


