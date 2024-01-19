import React from 'react'
import ENav from '../../../component/EforceNav/ENav'
import HomeNav from '../../../component/HomeNav/HomeNav'
import BodyHeader from '../../../component/BodyHeader/BodyHeader'
import TableNav from '../../../component/TableNav/TableNav'
import { IoMailOutline, IoCallOutline , IoLocationOutline} from "react-icons/io5";
import './Info.css'
import { useNavigate } from 'react-router-dom';

function VehicleInfo() {
  const navigateTo = useNavigate();


  const handleViewClick = (roleId) => {

    const route = `/viewDriverPage`;
    // Navigate to the constructed route
    navigateTo(route);
  };



  return (
    <div className='System'>
      <div className="leftNav">
        <div className="eforceNav">
      <ENav/>
      </div>
      <div className="homeNav">
       <HomeNav/>
      </div>
        </div>
      <div className="bodyBox">
        <BodyHeader/>
        <TableNav/>
        <div className="Driver-Info">
    <div className="containerLeft">
        <div className="contactBox">
        <div className="img_Box" style={{borderColor:'#4DB81A'}}>
        <img src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg" alt=""  className='BoxImg'/>
        </div>
            <h3 className='BoxName'>Alfred Amos</h3>
            <div className="boxDescr"> JJK-800-AR</div>
        </div>
        <div className="profileType">
            <div className="greenDot"></div>
            <span className='P_Type' >Vehicle Profile </span>
        </div>
        <div className="contact_Box">
        <span className='ContactName'><b className='boldText'>Registration No:</b> A3342</span>
        <span className='ContactName'><b>Vehicle Control No:</b> 32211</span>
        <span className='ContactName'><b>License Plate:</b> fkm3-8890-99</span>
        <span className='ContactName'><b>Vehicle Make:</b> Toyota</span>
        <span className='ContactName'><b>Vehicle Model:</b> Camry LE 2002</span>
        <span className='ContactName'><b>Colour:</b> Red</span>
        <span className='ContactName'><b>Vehicle Type:</b> Saloon</span>
        <span className='ContactName'><b>Vehicle Catgory:</b> Light weight </span>
        <span className='ContactName'><b>Net Weight:</b> 288kg</span>
        </div>
    </div>
    <div className="containerCenter">
    <div className="profileType">
            <div className="redDot"></div>
            <span className='P_Type'>License Profile </span>
        </div>
        <div className="contact_Box">
        <span className='ContactName'><b>Country of Issue:</b> Nigeria</span>
        <span className='ContactName'><b>State of Issue:</b> Lagos</span>
        <span className='ContactName'><b>Date of Issue:</b> 24/05/2020</span>
        <span className='ContactName'><b>Expiry Date:</b> 24/05/2023</span>
        <span className='ContactName'><b>Owner Name:</b> Alfred Amos</span>
        <span className='ContactName'><b>License No:</b> 322221111</span>
        </div>
    {/* <div className="profileType">
            <div className="yellowDot"></div>
            <span className='P_Type'>Violation Record</span>
        </div>
        <div className="contact_Box">
        <span className='ContactName'><b>Status:</b> One Time Offender</span>
        <span className='ContactName'><b>Fine:</b> Cleared</span>
        </div> */}
    </div>
    <div className="containerRight">
    <div className="profileType">
            <div className="yellowDot"></div>
            <span className='P_Type'>Violation Record</span>
        </div>
        <div className="contact_Box">
        <span className='ContactName'><b>Status:</b> One Time Offender</span>
        <span className='ContactName'><b>Fine:</b> Cleared</span>
        </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleInfo