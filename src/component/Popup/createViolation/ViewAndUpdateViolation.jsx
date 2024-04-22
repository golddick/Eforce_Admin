import React, { useState , useContext, useEffect, useRef} from 'react';
import axios from 'axios';
import { CgCloseR } from "react-icons/cg";
import './create.css';
import { AuthContext } from '../../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ViewAndUpdateViolation({ close, vioId, parID}) {
    const navigateTo = useNavigate();
    const {user} = useContext(AuthContext)
    const accessToken = user.data.accessToken;
    const OrgID = user.data.organizationId;
    const [inputDisabled, setInputDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState ()
    const [vioInfo, setVioInfo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [updatedVioInfo, setUpdatedVioInfo] = useState(null);

    const name = useRef('');
    const start = useRef('');
    const end = useRef('');
    const fine = useRef('');

  
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
    
            try {
              const response = await axios.get(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${OrgID}/violations/${vioId}`, {
              headers: {
                Authorization: `Bearer ${accessToken}`
              },
                params: {
                  limit: '50',
                  cursor: '2024-03-15T22:34:54.292Z' 
                }
              });
      
            const responseData = response.data.data; 
      
            setVioInfo(responseData);
            setViolationID( vioInfo.paramaters?.[0].violationId );
            // setUpdatedVioInfo(responseData);
            // console.log('vinfo', vioInfo)
           
          } catch (error) {
            setError(error);
          }
          setIsLoading(false);
        };
      
        fetchData();
      }, [accessToken]);



    //   const handleUpdateViolation = async (e) => {
    //     e.preventDefault(); 
    //     try {
    //         const updatedVioInfo = {
    //             name: vioInfo.name,
    //             start: vioInfo.paramaters?.[0].rangeStart,
    //             end: vioInfo.paramaters?.[0].rangeEnd,
    //             fine: vioInfo.paramaters?.[0]?.fine?.d?.[0]
    //         };
    //         const response = await axios.patch(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${OrgID}/violations/${vioId}/parameters/${parID}`, updatedVioInfo, {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`
    //             }
    //         });

            
    //         setSuccessMessage('Violation updated successfully.');
    //         console.log('newupdate', updatedVioInfo)
    //         // window.location.reload();
    //     } catch (error) {
    //         setErrorMessage(error.message);
    //     }
    // };

    const handleUpdateViolation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${OrgID}/violations/${vioId}/parameters/${parID}`, updatedVioInfo, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setSuccessMessage('Violation updated successfully.');
            console.log('Form Data:', updatedVioInfo);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Update the corresponding field in updatedVioInfo
        setUpdatedVioInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditClick = () => {
        setInputDisabled(false); // Enable input field when "Edit" button is clicked
        setEditedName(vioInfo.name); // Save the current value of the name field
    };

    // Function to remove a violation from the state
const removeViolation = (vioId) => {
    setViolations(prevViolations => prevViolations.filter(violation => violation.id !== vioId));
};


    const handleDeleteClick = (e, vioId) => {
        e.preventDefault();
        // Display a confirmation dialog
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        
        // If user confirms deletion, proceed with deletion
        if (isConfirmed) {
            const url = `https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${OrgID}/violations/${vioInfo.paramaters?.[0].violationId }`;
    
            axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(response => {
                // Handle success response
                console.log(`User deleted successfully.`);
                alert(`User deleted successfully.`);
                setSuccessMessage(`Violation deleted successfully.`);
                window.location.reload();
            })
            .catch(error => {
                // Handle error response
                console.error(`Error in deleting user:`, error);
                alert(`Error in deleting user: ${error.message}`);
            });
        } else {
            // User cancelled deletion
            console.log('Deletion cancelled by user.');
        }
    };
    
    // console.log('v info dd', vioInfo.paramaters?.[0].violationId  )
    // console.log('v info', vioId )
    
    return (
        <div className='CreateViolation'>
            <div className='headerTop'>
                <span className='topText'> Violation Info</span>
                <CgCloseR onClick={close} />
            </div>
         {
            vioInfo && (
                <>
                   <form className="createForm">
    
    <div className="formInput">
        <label className="inputLabel">Name:</label>
        <input type="text" value={vioInfo.name}  onChange={e => setVioInfo(e.target.value)} className="formTextInput"  required />
        {/* <button type="button" onClick={handleEditClick}>edit</button> */}
    </div>
    <div className="formInput">
        <label className="inputLabel">Point:</label>
        <input type="number" value={vioInfo.point} onChange={handleChange} className="formTextInput" required />
    </div>
    <div className="formInput">
        <label className="inputLabel">Fine(N):</label>
        <input type="number"value={vioInfo.paramaters?.[0]?.fine?.d?.[0]} onChange={handleChange} className="formTextInput" required />
    </div>
        <div className="formInput">
            <label className="inputLabel">Start (Km/h): </label>
            <input type="number" value={vioInfo.paramaters?.[0].rangeStart} onChange={handleChange} className="formTextInput" required />
            <label className="inputLabel">End  (Km/h):</label>
            <input type="number" value={vioInfo.paramaters?.[0].rangeEnd}  onChange={handleChange} className="formTextInput" required />
        </div>
    <button type="submit" className='submitOrg' onClick={handleUpdateViolation}>Update Violation</button>
    <button type="submit" className='deleteOrg' onClick={handleDeleteClick}>Delete</button>
</form>
                </>
            )
         }


            
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {successMessage && <div className="successMessage">{successMessage}</div>}
        </div>
    );
}

export default ViewAndUpdateViolation;


