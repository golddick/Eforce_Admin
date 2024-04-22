import React, { useRef,useContext,useState,useEffect } from 'react';
import './Reg.css';
import axios from 'axios';
import Img from '../../assets/Group.svg'
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

function RegOfficer() {

  const navigate= useNavigate();
    const {user} = useContext(AuthContext)
    const accessToken = user.data.accessToken;
    const orgId = user.data.organizationId
    const orgName = user.data.organizationName


    const [selectedName, setSelectedName] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isloading, setIsloading] = useState('');
    
    const [selectedResume, setSelectedResume] = useState(null);
    const [selectedResumeUrl, setSelectedResumeUrl] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploadId, setUploadId] = useState('');

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const options = { month: 'long', day: 'numeric', year: 'numeric' };
  //   return date.toLocaleDateString('en-US', options);
  // };


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleResumeChange = (e) => {
      setSelectedResume(e.target.files[0]);
    };


  
    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', 'eforceImg');
  
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/drhezqf3h/image/upload`,
          formData,
  
        );
  
        setImageUrl(response.data.secure_url);
        setSelectedName(response.data.original_filename)
        setUploadId(response.data.asset_id)
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };


    const handleResumeUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('file', selectedResume);
        formData.append('upload_preset', 'eforceImg');
  
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/drhezqf3h/raw/upload`,
          formData,
  
        );
  
        selectedResumeUrl(response.data.secure_url);
        setSelectedName(response.data.original_filename)
        // console.log(response.data.original_filename)
      } catch (error) {
        console.error('Error uploading Resume:', error);
      }
    };

  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');
  const phoneNumberRef = useRef('');
  const dateOfBirthRef = useRef('');
  const addressRef = useRef('');
  const countryRef = useRef('');
  const documentsRef = useRef([{ name: '', url: '' }]);
  const licenseNumberRef = useRef('');
  const registrationNumberRef = useRef('');
  const issueDateRef = useRef('');
  const expiryDateRef = useRef('');
  const organizationIdRef = useRef('');
  const bioRef = useRef('');
  const organizationNameRef = useRef('');
  const jobTitleRef = useRef('');
  const jobDescriptionRef = useRef('');
  const endDateRef = useRef('');
  const startDateRef = useRef('');


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsloading(true)

    const selectedDateOfBirth = (dateOfBirthRef.current.value);
    const selectedEndDate = (endDateRef.current.value);

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      dateOfBirth: selectedDateOfBirth,
      address: addressRef.current.value,
      country: countryRef.current.value,
      documents: {
        cid:uploadId,
        name:selectedName,
        url:imageUrl
      },
      // vehicleDriver: {
      //   licenseNumber: licenseNumberRef.current.value,
      //   vehicles: [{ registrationNumber: registrationNumberRef.current.value, issueDate: issueDateRef.current.value, expiryDate: expiryDateRef.current.value }]
      // },
      officer: {
        organizationId: orgId,
        bio: bioRef.current.value,
        workExperiences: [{ organization: organizationNameRef.current.value, jobTitle: jobTitleRef.current.value, jobDescription: jobDescriptionRef.current.value,startDate:startDateRef.current.value, endDate: selectedEndDate }]
      }
    };

    console.log("Form Data:", formData);
    console.log("selected  Data:", selectedDateOfBirth);

  //   try {

    

  //     await axios.post("https://project-e-force-backend-v2.onrender.com/api/v1/people?type=officer", formData, {
          // headers: {
          //     Authorization: `Bearer ${accessToken}`
          // }
  //     });
  //     if (response.status === 200) {
  //       setSuccessMessage("Officer created successfully!");
  //       alert("Officer created successfully!");
  //       // Handle any navigation logic here
  //     } else {
  //       setErrorMessage("Failed to create officer");
  //       alert("Failed to create officer");
  //     }
  // } catch (error) {
  //   if (error.response && error.response.status === 401) {
  //     setErrorMessage("Unauthorized: You do not have permission to perform this action.");
  //   } else {
  //     setErrorMessage(error.message || "An error occurred while creating the officer");
  //     alert("An error occurred while creating the officer");
  //   }
  //   console.error(error);
  // }
  try {
    await axios.post("https://project-e-force-backend-v2.onrender.com/api/v1/people?type=officer", formData ,{
      headers: {
        Authorization: `Bearer ${accessToken}`
    }
    });
    setSuccessMessage("Signup successful!");
    setIsloading(false)
    alert("officer created successful!");
    navigate("/"); 
    setTimeout(() => {
        setSuccessMessage("");
    }, 5000);
} catch (error) {
    console.error(error);
    // setErrorMessage(error)
}
  };

  
  return (
    <div className='RegOfficer'>
      <h2 className='regHeader'>Register Officer</h2>
      <h6 className='regSubText'>Fill up the fields with necessary details and add necessary credentials</h6>
      <form onSubmit={handleSubmit}>
        <div className="officerDetails">
          <div className="leftDetails">
            <input type="text" className='inputDetail' placeholder='First Name' ref={firstNameRef} required />
            <input type="text" className='inputDetail' placeholder='Email' ref={emailRef} required />
          </div>
          <div className="rightDetails">
            <input type="text" className='inputDetail' placeholder='Last Name' ref={lastNameRef} required />
            <input type="text" className='inputDetail' placeholder='+234' ref={phoneNumberRef} />
          </div>
        </div>
        <div className="BirthDetails">
          <div className="dob">
            <h3 className='DetailHeader'>Country</h3>
            <div className="dobRow">
              <input type="text" placeholder='Country' className='inputDetail' ref={countryRef} />
            </div>
          </div>
          <div className="dob">
            <h3 className='DetailHeader'>Date of Birth</h3>
            <div className="dobRow">
              <input type="date" placeholder='Date of Birth' className='inputDetail' ref={dateOfBirthRef} />
            </div>
          </div>

          <div className="gender">
            <h3 className='DetailHeader'>Gender</h3>
            <div className="genderRow">
              <label className="container">Male
                <input type="radio" name="radio" value='male' />
                <span className="checkmark"></span>
              </label>
              <label className="container">Female
                <input type="radio" name="radio" value='female' />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="address">
          <h3 className='DetailHeader'>Address</h3>
          <input type="text" placeholder='Residential Address' className='fullInput' ref={addressRef} />
        </div>
        <div className="ProBIO">
          <h3 className='DetailHeader'>Professional Biography</h3>
          <textarea type="text" placeholder='Write short professional bio...' className='fullInput' ref={bioRef} />
        </div>
        <div className="experience">
          <div className="expText">
            <h3 className='DetailHeader'>Experience</h3>
            <input type="text" placeholder='Organization Name' className='inputDetail' ref={organizationNameRef} />
          </div>
          <div className="expDate">
            <div className="dateRow">
              <div className="fromYear">
                <h3 className='DetailHeader'>Job Title</h3>
                <input type="text" placeholder='Job Title' className='inputDetail' ref={jobTitleRef} />
              </div>
              <div className="toYear">
                <h3 className='DetailHeader'>Start Date</h3>
                <input type="date" placeholder='Year' className='inputDetail' ref={startDateRef} />
              </div>
              <div className="toYear">
                <h3 className='DetailHeader'>EndDate</h3>
                <input type="date" placeholder='Year' className='inputDetail' ref={endDateRef} />
              </div>
            </div>
          </div>
          <textarea type="text" placeholder='Job Description' className='fullInput' ref={jobDescriptionRef} />
        </div>
        <div className="upload">
          {/* <div className="docUpload">
            <h3 className='DetailHeader'>Document</h3>
            <input
              style={{ display: 'none' }}
              type="file"
              id="resumeFile"
              accept=".doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
              onChange={handleResumeChange}

            />
                   <label htmlFor="resumeFile" className="UploadBox">
                      <div className="innerDisplay">
                      {imageUrl ? (
                    <span>{selectedName}</span>
                    ) : (
                    <img src={Img} alt="upload" className='innerImg'/>
                    )}
                      </div>
                 </label>
                      <button className="uploadBtn" onClick={handleResumeUpload} disable={true}>Upload Resume</button>

          </div>  */}
          <div className="docUpload">
            <h3 className='DetailHeader'>Add a Picture</h3>
            <input
              style={{ display: 'none' }}
              type="file"
              id="imageFile"
              accept="image/jpeg, image/jpg, image/png, image/gif, image/svg+xml,"
              onChange={handleFileChange}
            />
            <label htmlFor="imageFile" className="UploadBox">
                      <div className="innerDisplay">
                      {imageUrl ? (
                    <img src={imageUrl} alt="uploaded" className='innerImg'/>
                    ) : (
                    <img src={Img} alt="upload" className='innerImg'/>
                    )}
                      </div>
                 </label>
                      <div className="uploadBtn" onClick={handleUpload}>Upload Picture</div>
         
          </div>
        </div>
        <div >
          <button type="submit" className='submit'>{
            isloading? 'loading' : 'Submit'
          }</button>
        </div>
      </form>
      {
        errorMessage &&(
          <>
          {errorMessage}
          </>
        )
      }
      {
        successMessage &&(
          <>
          {successMessage}
          </>
        )
      }
         {/* <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div> */}
    </div>
  );
}

export default RegOfficer;

