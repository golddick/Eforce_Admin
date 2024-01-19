import React from 'react'
import ENav from '../../../component/EforceNav/ENav'
import HomeNav from '../../../component/HomeNav/HomeNav'
import BodyHeader from '../../../component/BodyHeader/BodyHeader'
import VehicleDetail from '../../../component/vehicleDetail/VehicleDetail'
import '../vLot.css'
import { useNavigate } from 'react-router-dom';

function VDetails() {
  const navigateTo = useNavigate();

  const handleProceedClick = () => {
    navigateTo('/Officer-Profile');
    // window.location.href = '/Officer-Profile';
  };
  return (
    <div className='System'>
      <div className="leftNav">
      <ENav/>
       <HomeNav/>

        </div>
      <div className="bodyBox">
        <BodyHeader/>
        <VehicleDetail/>
      </div>
    </div>
  )
}

export default VDetails