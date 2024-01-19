import React, {useState} from 'react'
import'./Reg.css'
import Img from '../../assets/Group.svg'

function RegDriver() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedResume, setSelectedResume] = useState(null);
  
    const handleFileChange = (event, fileType) => {
      const file = event.target.files[0];
  
      // Check if a file is selected
      if (file) {
        // Use FileReader to read the selected file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
          if (fileType === 'image') {
            setSelectedImage(e.target.result);
          } else if (fileType === 'resume') {
            setSelectedResume(e.target.result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        if (fileType === 'image') {
          setSelectedImage(null);
        } else if (fileType === 'resume') {
          setSelectedResume(null);
        }
      }
    };
  return (
    <div className='RegOfficer'>
        <h2 className='regHeader'>Register Driver & Vehicle</h2>
        <h6 className='regSubText'>Fill up the fields with necessary details and add necessary credentials</h6>
        <div className="officerDetails">
            <div className="leftDetails">
                <input type="text"  className='inputDetail' placeholder='First Name'/>
                <input type="text"  className='inputDetail' placeholder='Email'/>
            </div>
            <div className="rightDetails">
                <input type="text"  className='inputDetail' placeholder='Last Name'/>
                <input type="text"  className='inputDetail' placeholder='+234'/>
            </div>
        </div>
        <div className="BirthDetails">
            <div className="dob">
               <h3 className='DetailHeader'>Date of Birth</h3>
               <div className="dobRow">
                <input type="number"  placeholder='Day' className='inputDetail'/>
                <input type="Text"  placeholder='Month' className='inputDetail'/>
                <input type="Text"  placeholder='Year' className='inputDetail'/>
               </div>
            </div>
            {/* <div className="driverNationality"> */}
            <div className="gender">
            <h3 className='DetailHeader'>Gender</h3>
               <div className="genderRow">
                <label class="container">Male
                <input type="radio"  name="radio"/>
                <span class="checkmark"></span>
                </label>
                <label class="container">Female
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
                </label>
                
               </div>
           
            </div>
           
            {/* </div> */}
            <div className="nationality">
            <h3 className='DetailHeader'>Nationality</h3>
            <input type="number"  placeholder='Country' className='inputDetail'/>
            </div>
        </div>
        <div className="address">
            <h3 className='DetailHeader'>Address</h3>
            <input type="text" placeholder='Residential Address'  className='fullInput'/>
        </div>
        <div className="DLD">
        <h3 className='DetailHeader'>Drivers License Details</h3>
            <div className="dldRow">
            <input type="text" placeholder='Country of Issue'  className='inputDetail'/>
            <input type="text" placeholder='State of Issue'  className='inputDetail'/>
            </div>
       
        <div className="IssuedDateRow">
        <div className="IssuedDate">
          <h3 className='DetailHeader'>Issued Date </h3>
            <div className="issueInfo">
            <input type="text" placeholder='Day'  className='inputDetail'/>
            <input type="text" placeholder='Month'  className='inputDetail'/>
            <input type="text" placeholder='Year'  className='inputDetail'/>
            </div>
            <input type="text" placeholder='License Number'  className='inputDetail'/>
            </div>
        <div className="IssuedDate">
          <h3 className='DetailHeader'>Expiry Date </h3>
            <div className="issueInfo">
            <input type="text" placeholder='Day'  className='inputDetail'/>
            <input type="text" placeholder='Month'  className='inputDetail'/>
            <input type="text" placeholder='Year'  className='inputDetail'/>
            </div>
            </div>

        </div>
          
        </div>
        <div className="vehicleDetails">
        <h3 className='DetailHeader'>Vehicle Details</h3>
        <div className="DetailsRow">
        <div className="detailsLeft">
          <input type="text" placeholder='Registration Number'  className='inputDetail'/>
            <input type="text" placeholder='License Plate Number'  className='inputDetail'/>
            <input type="text" placeholder='Vehicle Make'  className='inputDetail'/>
            <input type="text" placeholder='Vehicle Type'  className='inputDetail'/>
            <input type="text" placeholder='Module Date'  className='inputDetail'/>
            <input type="text" placeholder='Vehicle Color'  className='inputDetail'/>
          </div>
          <div className="detailsRight">
          <input type="text" placeholder='Vehicle Control Number'  className='inputDetail'/>
           <div className="inputDetail">
           <input type="text" placeholder='Net Weight'  className='weightInput'/>
           <div className="line"></div>
           <span className='inputIcon'>Kg</span>
           </div>
            <input type="text" placeholder='Vehicle Model'  className='inputDetail'/>
            <input type="text" placeholder='Vehicle Category'  className='inputDetail'/>
            <input type="text" placeholder='Vehicle Vin Number'  className='inputDetail'/>
            <input type="text" placeholder='Vehicle Engine Number'  className='inputDetail'/>
          </div>
        </div>
        </div>
        <div className="Driver-upload">
        <div className="docUpload">
            {/* <h3 className='DetailHeader'>Add a Picture</h3> */}
            <input
                  style={{ display: 'none' }}
                  type="file"
                  id="imageFile"
                  accept="image/jpeg, image/jpg, image/png, image/gif, image/svg+xml,"
                  onChange={(e) => handleFileChange(e, 'image')}
                />
                <label htmlFor="imageFile" className="UploadBox">
                      <div className="innerDisplay">
                      {selectedImage ? (
                    <img src={selectedImage} alt="uploaded" className='innerImg'/>
                    ) : (
                    <img src={Img} alt="upload" className='innerImg'/>
                    )}
                      </div>
                      <div className="uploadBtn">Upload Picture</div>
                 </label>
            </div>
            <div className="docUpload">
            {/* <h3 className='DetailHeader'>Document</h3> */}
            <input
                  style={{ display: 'none' }}
                  type="file"
                  id="resumeFile"
                  accept=".doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={(e) => handleFileChange(e, 'resume')}
                />
                <label htmlFor="resumeFile" className="UploadBox">
                      <div className="innerDisplay">
                      {selectedResume ? (
                  <p className='beforeText'>.doc</p>
       
              ) : (
                <div className='beforeText'>Add</div>
              )}
                      </div>
                      <div className="uploadBtn">Upload Resume</div>
                 </label>
            </div>
            <div className="docUpload">
            {/* <h3 className='DetailHeader'>Add a Picture</h3> */}
            <input
                  style={{ display: 'none' }}
                  type="file"
                  id="imageFile"
                  accept="image/jpeg, image/jpg, image/png, image/gif, image/svg+xml,"
                  onChange={(e) => handleFileChange(e, 'image')}
                />
                <label htmlFor="imageFile" className="UploadBox">
                      <div className="innerDisplay">
                      {selectedImage ? (
                    <img src={selectedImage} alt="uploaded" className='innerImg'/>
                    ) : (
                    <img src={Img} alt="upload" className='innerImg'/>
                    )}
                      </div>
                      <div className="uploadBtn">Vehicle Picture</div>
                 </label>
            </div>
        </div>
        
        <div className="submit">Submit</div>

    </div>
  )
}

export default RegDriver