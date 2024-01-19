import React from 'react'
import './Management-Table.css'
import Img from '../../assets/user.svg'
import { BsThreeDotsVertical } from "react-icons/bs";

function DriversTable({ tableHeader, tableBody, onViewClick }) {
    const handleViewButtonClick = (roleId) => {
        onViewClick(roleId);
      };
  return (
    <div  className='Drivers_Table'>

<table className='DriversTable'>
      <tr className='TableHead'>
        {tableHeader.map((header, index) => (
          <th key={index} className='HeadText'>{header}</th>
        ))}
      </tr>
      {tableBody.map((row) => (
        <tr key={row.id} className='TableBody'>
          <td className='BodyText'><img src={row.image} alt="img" className='BodyText-Img' /> </td>
          <td className='BodyText'>{row.owner}</td>
          <td className='BodyText'>{row.vehicleName}</td>
          <td className='BodyText'>{row.licenseNumber}</td>
          <td className='BodyText'>{row.violationRecord}</td>
          <td className='BodyText'>{row.paymentStatus}</td>
          <td className='BodyText'><div className="viewBtn" onClick={handleViewButtonClick}>View</div></td>
          <td className='BodyText'><BsThreeDotsVertical className='bodyTextIcon'/></td>
        </tr>
      ))}
    </table>
    </div>
  )
}

export default DriversTable