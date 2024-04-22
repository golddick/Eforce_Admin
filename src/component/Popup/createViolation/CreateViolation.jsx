import React, { useState , useContext} from 'react';
import axios from 'axios';
import { CgCloseR } from "react-icons/cg";
import './create.css';
import { AuthContext } from '../../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function CreateViolation({ close }) {
    const navigateTo = useNavigate();
    const {user} = useContext(AuthContext)
    const accessToken = user.data.accessToken;
    const OrgID = user.data.organizationId;

    const [name, setName] = useState('');
    const [point, setPoint] = useState('');
    const [fine, setFine] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [violationType, setViolationType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const ViolationData = {
                name,
                point,
                parameters: [
                    {
                        name,
                        start,
                        end,
                        fine,
                    }
                ]
            };
            console.log("ViolationData :", ViolationData);
            await axios.post(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${OrgID}/violations`, ViolationData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setSuccessMessage("Violation created successfully!");
            alert("Violation created successfully!");
            // alert(response && response.message); 
            navigateTo("/Configuration")
            window.location.reload();
            close();
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage("Unauthorized: You do not have permission to perform this action.");
            } else {
                // setErrorMessage(error.response.message);
                alert("An error occurred during login."); 
            }
            console.error(error);
        }
    };

    return (
        <div className='CreateViolation'>
            <div className='headerTop'>
                <span className='topText'>Create Violation</span>
                <CgCloseR onClick={close} />
            </div>
            <form onSubmit={handleSubmit} className="createForm">
                <div className="formInput">
                    <label className="inputLabel" >Violation Type:</label>
                    <select value={violationType} onChange={(e) => setViolationType(e.target.value)} className="formTextInput" required>
                        <option value="">Select Violation Type</option>
                        <option value="Speeding">Speeding</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="formInput">
                    <label className="inputLabel">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="formTextInput" required />
                </div>
                <div className="formInput">
                    <label className="inputLabel">Point:</label>
                    <input type="number" value={point} onChange={(e) => setPoint(e.target.value)} className="formTextInput" required />
                </div>
                <div className="formInput">
                    <label className="inputLabel">Fine(N):</label>
                    <input type="number" value={fine} onChange={(e) => setFine(e.target.value)} className="formTextInput" required />
                </div>
                {violationType === 'Speeding' && (
                    <div className="formInput">
                        <label className="inputLabel">Start (Km/h): </label>
                        <input type="number" value={start} onChange={(e) => setStart(e.target.value)} className="formTextInput" required />
                        <label className="inputLabel">End  (Km/h):</label>
                        <input type="number" value={end} onChange={(e) => setEnd(e.target.value)} className="formTextInput" required />
                    </div>
                )}
                <button type="submit" className='submitOrg'>Submit</button>
            </form>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            {successMessage && <div className="successMessage">{successMessage}</div>}
        </div>
    );
}

export default CreateViolation;


