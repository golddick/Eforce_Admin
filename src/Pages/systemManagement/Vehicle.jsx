import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import HomeNav from '../../component/HomeNav/HomeNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import TableNav from '../../component/TableNav/TableNav'
import DriversTable from '../../component/Management-Table/DriversTable'
import { BsThreeDotsVertical } from "react-icons/bs";
import './system.css'
import { useNavigate } from 'react-router-dom';

function VehicleManagement() {
  const navigateTo = useNavigate();

  const handleViewClick = (roleId) => {
    // Construct the route based on roleId
    // const route = `/role${roleId}-page`;
    const route = `/Vehicle-Info`;
    // Navigate to the constructed route
    navigateTo(route);
  };

const TableHeader = [
  '','Owner','Vehicle Name', 'License Plate', 'Violation Record', 'Payment Status','',''
]
const TableBody = [

    {
        id: 1,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'John Die',
        vehicleName:'Tesla Truck',
        licenseNumber:'EFG332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
    },
    {
        id: 2,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'Peter',
        vehicleName:'Truck',
        licenseNumber:'ffg332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
    },
    {
        id: 3,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'John ',
        vehicleName:'Tesla ',
        licenseNumber:'EFG332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
    },
    {
        id: 4,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'John Die',
        vehicleName:'Tesla Truck',
        licenseNumber:'EFG332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
    },
    {
        id: 5,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'John Die',
        vehicleName:'Tesla Truck',
        licenseNumber:'EFG332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
    },
    {
        id: 6,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'John Die',
        vehicleName:'Tesla Truck',
        licenseNumber:'EFG332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
    },
    {
        id: 7,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'John Die',
        vehicleName:'Tesla Truck',
        licenseNumber:'EFG332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
    },
    {
        id: 8,
        image:'https://imageio.forbes.com/specials-images/imageserve/653f4f6c2b4e72324bc51071/Tesla-Cybertruck/960x0.jpg?format=jpg&width=960',
        owner:'John Die',
        vehicleName:'Tesla Truck',
        licenseNumber:'EFG332456',
        violationRecord:'Over speeding',
        paymentStatus:'pending',
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

export default VehicleManagement