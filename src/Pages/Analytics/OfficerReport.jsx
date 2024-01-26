import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import AnalyticBox from '../../component/AnalyticBox/AnalyticBox'
import AnalyticNav from '../../component/HomeNav/AnalyticNav'
import './Analytic.css'
import { useNavigate } from 'react-router-dom';

function OfficerReport() {
  const navigateTo = useNavigate();

  const handleProceedClick = () => {
    navigateTo('/Officer-Profile');
    // window.location.href = '/Officer-Profile';
  };
  return (
    <div className='System'>
      <div className="leftNav">
      <ENav/>
       <AnalyticNav/>

        </div>
      <div className="bodyBox">
        <BodyHeader/>
        <AnalyticBox/>
      </div>
    </div>
  )
}

export default OfficerReport