import React from 'react'
import ENav from '../../../component/EforceNav/ENav'
import HomeNav from '../../../component/HomeNav/HomeNav'
import BodyHeader from '../../../component/BodyHeader/BodyHeader'
import TableNav from '../../../component/TableNav/TableNav'
import TransactionCard from '../../../component/TransactionCard/TransactionCard'
import './violationInfo.css'
import { useNavigate } from 'react-router-dom';

function TransactionInfo() {
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
        <TransactionCard/>
      </div>
    </div>
  )
}

export default TransactionInfo