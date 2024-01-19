import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import HomeNav from '../../component/HomeNav/HomeNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import TableNav from '../../component/TableNav/TableNav'
import Configuration from '../../component/Sconfiguration/Configuration'
import './systemConfiguration.css'
import { useNavigate } from 'react-router-dom';

function SystemConfiguration() {
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
        <TableNav/>
        <Configuration/>
      </div>
    </div>
  )
}

export default SystemConfiguration