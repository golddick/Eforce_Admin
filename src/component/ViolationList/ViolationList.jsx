import React,{useState, useContext, useEffect} from 'react'
import '../Sconfiguration/scon.css'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { red } from '@mui/material/colors';

function ViolationList({open}) {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useContext(AuthContext);
    const [createViolation, setCreateViolation] = useState([])
    const accessToken = user.data.accessToken;
    const orgId = user.data.organizationId

        
    useEffect(() => {
      const fetchViolationData = async () => {
        setIsLoading(true);
  
          try {
            const response = await axios.get(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${orgId}/violations?limit=50&cursor=2024-03-15T22%3A34%3A54.292Z`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
              // params: {
              //   limit: 20,
              //   cursor: '2024-03-15T22%3A34%3A54.292Z' 
              // }
            });
    
          // Extract necessary data from the response
          const violationResponseData = response.data.data; 
    
          // Set the data in the component state
          setCreateViolation(violationResponseData);
          console.log( "created",createViolation)
    
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
      };
    
      fetchViolationData();
    }, [accessToken]);
  return (
    <div >    
         <div className="pConfig_">

    {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error.message}</div>
              ) : (
                <>
                  {createViolation.length > 0 && createViolation.map((violation, index) => (
                  <div className="Config_" key={index} >
                  <span className='speedName'>{violation.name}</span>
                  <div className="speenKM">
                    {violation.paramaters[0].rangeStart && violation.paramaters[0].rangeEnd && (
                      <span className='kmText'>
                        {violation.paramaters[0].rangeStart} - {violation.paramaters[0].rangeEnd} km/h
                      </span>
                    )}
                  </div>
                  <div className="addSpeed">
                      <span className="addedAmount">N{violation.paramaters[0].fine.d[0]}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 16" fill="none"  style={{cursor:'pointer'}} onClick={() => open(violation.id, violation.paramaters?.[0].id)}>
                                <path d="M0.777724 15.57C0.675724 15.5713 0.574593 15.5512 0.480833 15.511C0.387074 15.4708 0.302761 15.4114 0.233317 15.3367C-0.0777724 15.0256 -0.0777724 14.5434 0.233317 14.2323L6.68843 7.77724L0.233317 1.33768C-0.0777724 1.02659 -0.0777724 0.544407 0.233317 0.233317C0.544407 -0.0777724 1.0266 -0.0777724 1.33768 0.233317L8.32165 7.24838C8.63274 7.55947 8.63274 8.04166 8.32165 8.35275L1.32213 15.3367C1.16659 15.4923 0.964378 15.57 0.777724 15.57Z" fill="black"/>
                                </svg>
                  </div>
                  
              </div>
                  ))}
                </>
              )}


    </div>
   
    </div>
  )
}

export default ViolationList