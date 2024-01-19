import React from 'react'
import ENav from '../../../component/EforceNav/ENav'
import HomeNav from '../../../component/HomeNav/HomeNav'
import BodyHeader from '../../../component/BodyHeader/BodyHeader'
import TableNav from '../../../component/TableNav/TableNav'
import ViolationDetails from '../../../component/ViolationInfomation/ViolationDetails'
import './violationInfo.css'
import { useNavigate } from 'react-router-dom';

function ViolationInfo() {
  const navigateTo = useNavigate();


  return (
    <div className='System'>
      <div className="leftNav">
      <ENav/>
       <HomeNav/>
        </div>
      <div className="bodyBox">
        <BodyHeader/>
        <TableNav/>
        <ViolationDetails/>
      </div>
    </div>
  )
}

export default ViolationInfo