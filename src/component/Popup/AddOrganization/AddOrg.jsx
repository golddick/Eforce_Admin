import React, { useState , useContext, useRef, useEffect} from 'react';
import { CgCloseR } from "react-icons/cg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CiLock, CiUnlock } from "react-icons/ci";
import './addOrg.css'
import { AuthContext } from '../../../Context/AuthContext';

function AddOrg( {close}) {
    const navigate= useNavigate();
    const {user} = useContext(AuthContext)
    const accessToken = user.data.accessToken;
    // console.log(accessToken)
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const email = useRef();
    const password = useRef(); 
    const description= useRef();
    const location = useRef();
    const role = useRef(); 
    const name = useRef();

    const handleSubmit = async (e) => {
    e.preventDefault();
    const organizationData = {
        name: name.current.value,
        description: description.current.value,
        location:location.current.value,
        users: [
          {
            email: email.current.value,
            password: password.current.value,
            role: "ADMIN"
          }
        ]
      };

      console.log("Organization Data:", organizationData); 
    try {
        await axios.post("https://project-e-force-backend-v2.onrender.com/api/v1/organizations", organizationData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        setSuccessMessage("Organization created successfully!");
        alert("Organization created successfully!");
        close();
        // navigate("/Organization");
    } catch (error) {
        if (error.response && error.response.status === 401) {
            setErrorMessage("Unauthorized: You do not have permission to perform this action.");
        }
         else {
            setErrorMessage(response.message);
            alert(response.message);
        }
        console.error(error);
    }
};



  return (
    <div className="AddOrgForm">
        
        <div className="fornHeaderBox">
            <span>Create Organization </span>
            <CgCloseR onClick={close} style={{cursor:'pointer'}} />
        </div>

    <form className='orgFormBox'>
      <div className='formFiled'>
        <label htmlFor="name" className='labelText'>Organization Name:</label>
        <input type="text" id="name" name="name" ref={name}   className='BodyFormInput' required/>
      </div>
      <div className='formFiled'>
        <label htmlFor="description" className='labelText'>Description:</label>
        <textarea cols={20} type="text" id="description" name="description" ref={description} className='BodyFormInput' style={{height:'40px'}} required />
      </div>
      <div className='formFiled'>
        <label htmlFor="location" className='labelText'>Organization Location:</label>
        <input type="text" id="location" name="location" ref={location} className='BodyFormInput' required />
      </div>
      {/* <div className='formFiled'>
        <label htmlFor="user" className='labelText'>Account User:</label>
        <input type="text" id="user" name="user"  className='BodyFormInput' />
      </div> */}

      {/* <div className='formFiled'>
          <label htmlFor="role" className='labelText'>Role:</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange} className='BodyFormInput'>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>

          </select>
        </div> */}

      <div className='formFiled'> 
        <label htmlFor="email"className='labelText' >User Email:</label>
        <input type="email" id="email" name="email" ref={email} className='BodyFormInput'  required />
      </div>
      <div className='formFiled'>
        <label htmlFor="password" className='labelText'>Password:</label>
        <input type="password" id="password" name="password" ref={password}  className='BodyFormInput' required />
      </div>
      {/* <div className='formFiled'>
        <label htmlFor="img" className='labelText'>Picture:</label>
        <input type="file" id="img" name="img"  className='BodyFormInput' accept=".jpg, .jpeg, .png" />
      </div> */}
      {
        errorMessage  && (
            <p>{errorMessage}</p>
        )
      }
      <button type="submit" className='submitOrg' onClick={handleSubmit}>Submit</button>
    </form>

        






    </div>

  );
}

export default AddOrg;










