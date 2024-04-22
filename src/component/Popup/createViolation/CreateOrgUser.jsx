import React, { useState , useContext} from 'react';
import axios from 'axios';
import { CgCloseR } from "react-icons/cg";
import './create.css';
import { AuthContext } from '../../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function CreateOrgViolation({close}) {
  const {user} = useContext(AuthContext)
  const accessToken = user.data.accessToken;
  const OrgID = user.data.organizationId;
  const navigateTo = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const orgusers = {
              email,
              password,
              role
          };
          console.log("ViolationData :", orgusers);
          await axios.post(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${OrgID}/users`, orgusers, {
              headers: {
                  Authorization: `Bearer ${accessToken}`
              }
          });
          setSuccessMessage("Violation created successfully!");
          alert("Violation created successfully!");
          navigateTo("/Configuration")
          window.location.reload();
          close();
      } catch (error) {
          if (error.response && error.response.status === 401) {
              setErrorMessage("Unauthorized: You do not have permission to perform this action.");
          } else {
              setErrorMessage("An error occurred during login.");
              alert("An error occurred during login."); 
          }
          console.error(error);
      }
  };

  return (
    <div className='CreateViolation'>
 
        <div className='headerTop'>
            <span className='topText'>Create User</span>
            <CgCloseR onClick={close}/>
        </div>
        

        <form onSubmit={handleSubmit} className="createForm">

      <div className="formInput">
        <label className="inputLabel">Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="formTextInput" required />
      </div>
      <div className="formInput">
        <label className="inputLabel">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="formTextInput" required />
      </div>
      <div className="formInput">
                    <label className="inputLabel" >Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="formTextInput" required>
                        <option value="">Select User Role</option>
                        <option value="MANAGER">MANAGER</option>
                        <option value="GUEST">GUEST</option>
                    </select>
                </div>
      <button type="submit" className='submitOrg'>Submit</button>
    </form>
    {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    {successMessage && <div className="successMessage">{successMessage}</div>}
    </div>
  )
}

export default CreateOrgViolation


