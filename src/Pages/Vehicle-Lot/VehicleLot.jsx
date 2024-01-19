import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import HomeNav from '../../component/HomeNav/HomeNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import VehiclesList from '../../component/VehiclesList/VehiclesList'
import './vLot.css'
import { useNavigate } from 'react-router-dom';

function VehicleLot() {
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
        <VehiclesList/>
      </div>
    </div>
  )
}

export default VehicleLot