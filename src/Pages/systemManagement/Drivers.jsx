import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import HomeNav from '../../component/HomeNav/HomeNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import TableNav from '../../component/TableNav/TableNav'
import DriversTable from '../../component/Management-Table/DriversTable'
import { BsThreeDotsVertical } from "react-icons/bs";
import './system.css'
import { useNavigate } from 'react-router-dom';

function DriversManagement() {
  const navigateTo = useNavigate();


  const handleViewClick = (roleId) => {
    // Construct the route based on roleId
    // const route = `/role${roleId}-page`;
    const route = `/Drive-Info`;
    // Navigate to the constructed route
    navigateTo(route);
  };


  const TableHeader = [
    '','Owner','Vehicle Name', 'License Number', 'Violation Record', 'Payment Status','',''
  ]
  const TableBody = [
  
      {
          id: 1,
          image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
          owner:'Jude jame',
          vehicleName:'Toyota Camry LE',
          licenseNumber:'445667788654',
          violationRecord:'Broken Light',
          paymentStatus:'Cleared',
      },
      {
          id: 2,
          image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
          owner:'Drift ',
          vehicleName:'Toyota Camry LE',
          licenseNumber:'445667788654',
          violationRecord:'Broken Light',
          paymentStatus:'Pending',
      },
      {
          id: 3,
          image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
          owner:'Owner',
          vehicleName:'Toyota Camry LE',
          licenseNumber:'445667788654',
          violationRecord:'Broken Light',
          paymentStatus:'Cleared',
      },
      {
          id: 4,
          image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
          owner:'Owner',
          vehicleName:'Toyota Camry LE',
          licenseNumber:'445667788654',
          violationRecord:'Broken Light',
          paymentStatus:'Cleared',
      },
  ]
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
        <DriversTable tableHeader={TableHeader} tableBody={TableBody} onViewClick={handleViewClick}/>
      </div>
    </div>
  )
}

export default DriversManagement