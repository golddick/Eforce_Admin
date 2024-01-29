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
  const chartData = {
    labels: ['January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Safety Performance Metrics',
        data: [12, 19, 3, 5, 2, 3,1, 0, 3, 5, 12, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        
        borderWidth: 1,
        
      },
      
    ],
    
  };
  return (
    <div className='System'>
      <div className="leftNav">
      <ENav/>
       <AnalyticNav/>

        </div>
      <div className="bodyBox">
        <BodyHeader/>
        <AnalyticBox   chartData={chartData} />
      </div>
    </div>
  )
}

export default OfficerReport