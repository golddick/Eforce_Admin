import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import HomeNav from '../../component/HomeNav/HomeNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import TableNav from '../../component/TableNav/TableNav'
import ViolationBox from '../../component/ViloationBox/ViolationBox'
import './system.css'
import { useNavigate } from 'react-router-dom';

function Violation() {
  const navigateTo = useNavigate();

  const handleProceedClick = () => {
    navigateTo('/Officer-Profile');
    // window.location.href = '/Officer-Profile';
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
       <ViolationBox/>
      </div>
    </div>
  )
}

export default Violation