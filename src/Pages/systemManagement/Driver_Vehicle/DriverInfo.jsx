import React, { useState, useRef } from 'react'
import ENav from '../../../component/EforceNav/ENav'
import HomeNav from '../../../component/HomeNav/HomeNav'
import BodyHeader from '../../../component/BodyHeader/BodyHeader'
import TableNav from '../../../component/TableNav/TableNav'
import { IoMailOutline, IoCallOutline , IoLocationOutline} from "react-icons/io5";
import PointInfo from '../../../component/Popup/PointInfo/PointInfo'
import './Info.css'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack , IoIosArrowForward} from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,  EffectFade, Grid, A11y, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 
import "swiper/css/effect-fade";
import 'swiper/css/navigation'
import 'swiper/css/grid';


function DriverInfo() {
    const swiperRef = useRef(null);
  const navigateTo = useNavigate();
  const [openPoint, setOpenPoint] = useState ();

const handlePoint = () => {
  setOpenPoint(!openPoint);
}

const closePoint = () => {
  setOpenPoint(false)
}


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
        <div className="img_Box">
        <img src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg" alt=""  className='BoxImg'/>
        </div>
            <h3 className='BoxName'>Alfred Amos</h3>
            <div className="contactIcon">
                <IoMailOutline/>
                <IoCallOutline/>
                <IoLocationOutline/>
            </div>
        </div>
        <div className="profileType">
            <div className="BlueDot"></div>
            <span className='P_Type'>Personal Profile </span>
        </div>
        <div className="contact_Box">
        <span className='ContactName'><b className='boldText'>Name:</b> Alfred Amos Olanrewaju</span>
        <span className='ContactName'><b>Nationality:</b> Nigeria</span>
        <span className='ContactName'><b>D.O.B:</b> 24/05/1996</span>
        <span className='ContactName'><b>Gender:</b>Male</span>
        <span className='ContactName'><b>NIN:</b> 324566654322</span>
        <span className='ContactName'><b>Physical Address:</b> Block 30, Flat 3 Anthony Enahoro, Housing Estate Ikeja Lagos.</span>
        </div>
    </div>
    <div className="containerCenter">
    <div className="profileType">
            <div className="yellowDot"></div>
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
        <div className="profileType">
            <div className="redDot"></div>
            <span className='P_Type'>License Point</span>
        </div>
        <div className="contact_Box">
       <div className="-top-info">
        <p  className='point_'>+2pt</p>
        <div className="openArrowIcon"  onClick={handlePoint}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 21 21" fill="none">
          <path d="M12.4287 1.60718H19.6431M19.6431 1.60718V8.82153M19.6431 1.60718L1.60718 19.6431" stroke="black" strokeWidth="2.55066" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
       </div>
       <div className="pointInfo">
        <div className="pinfo">0.1 point</div>
        <div className="pInfoText">accrued on last violation  </div>
       </div>
       <div className="pointOfficer">
       <div className="off_img">
        <img src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg" alt=""  className='BoxImg'/>
        </div>
        <div className="off_info">
          <span>Alfred Amos</span>
          <span>LIC No: 169299289732</span>
        </div>
       </div>
        </div>
    </div>
    <div className="containerRight">
    <div className="profileType">
            <div className="greenDot"></div>
            <span className='P_Type'>Vehicle  Profile</span>
        </div>



   <div className='diffVehicleType'>
    


   <Swiper
       ref={swiperRef}
       slidesPerView={1}
       spaceBetween={30}
       pagination={{
         clickable: true,
        el:'.pag_numbers', 
     

       }}
       navigation={{
        nextEl: '.next-nav',
        prevEl: '.prev-nav',
       }}
   
       modules={[ Grid ,Pagination, Navigation, A11y]} 
       className="mySwiper"
     >
      <SwiperSlide>
     
 <div className="contact_Box">
        <span className='ContactName'><b>Registration No:</b> ABZ3030</span>
        <span className='ContactName'><b>Vehicle Control No:</b> 345675</span>
        <span className='ContactName'><b>License Plate:</b> OYO3330</span>
        <span className='ContactName'><b>Vehicle Make:</b> Toyota</span>
        <span className='ContactName'><b>Vehicle Model:</b> Camry LE 2002</span>
        <span className='ContactName'><b>Colour:</b> Green</span>
        <span className='ContactName'><b>Vehicle Type:</b> Saloon</span>
        <span className='ContactName'><b>Vehicle category:</b> Light Weight</span>
        <span className='ContactName'><b>Net Weight:</b> 190kg</span>
        </div>
         </SwiperSlide>

  <SwiperSlide>
 <div className="contact_Box">
        <span className='ContactName'><b>Registration No:</b> CC93030</span>
        <span className='ContactName'><b>Vehicle Control No:</b> 345675</span>
        <span className='ContactName'><b>License Plate:</b> OYO3330</span>
        <span className='ContactName'><b>Vehicle Make:</b> Toyota</span>
        <span className='ContactName'><b>Vehicle Model:</b> Camry LE 2002</span>
        <span className='ContactName'><b>Colour:</b> Green</span>
        <span className='ContactName'><b>Vehicle Type:</b> Saloon</span>
        <span className='ContactName'><b>Vehicle category:</b> Light Weight</span>
        <span className='ContactName'><b>Net Weight:</b> 190kg</span>
        </div>
 </SwiperSlide>

     </Swiper>



   <div className="CardNavigationSwiper">
        <IoIosArrowBack className="prev-nav" />
        <span className='pag_numbers'></span>
        <IoIosArrowForward className="next-nav"/>   
   </div>
    </div>




       

        <div className="profileType">
            <div className="yellowDot"></div>
            <span className='P_Type'>Violation Record</span>
        </div>
        <div className="contact_Box">
        <span className='ContactName'><b>Status:</b> One Time Offender</span>
        <span className='ContactName'><b>Fine:</b> Cleared</span>
        </div>
    </div>
       
    {
        openPoint && (
         <PointInfo closePoint={closePoint}/>
        )
      }
       
        </div>
      </div>
  
    </div>
  )
}

export default DriverInfo