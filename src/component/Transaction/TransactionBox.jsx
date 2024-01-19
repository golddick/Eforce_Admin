import React from 'react'
import { useNavigate } from 'react-router-dom';
import './transaction.css'


function TransactionBox() {

  const navigateTo = useNavigate();
  const handleViewButtonClick = (roleId) => {
      // Construct the route based on roleId
      // const route = `/singleViolation${roleId}`;
      // console.log(roleId)
      const route = `/Transaction-Info`;
      // Navigate to the constructed route
      navigateTo(route);
    };


      const TableHeader = [
        'Date','Name','Violation', 'Transaction Reference', 'Amount',''
      ]
      const TableBody = [
      
          {
              id: 1,
              Date:'03 Nov 2023 9:21am',
              Name:'John Die',
              Violation:'Speeding Fine ',
              TransactionReference:'099067370740820847282 ',
              Amount:'5,000.00',
          },
      ]

  return (
    <div  className='TransactionTable'>

<table className='transTable'>
      <tr className='TableHead'>
        {TableHeader.map((header, index) => (
          <th key={index} className='HeadText'>{header}</th>
        ))}
      </tr>
      {TableBody.map((row) => (
        <tr key={row.id} className='TableBody'>
          <td className='BodyTextDate'>{row.Date}</td>
          <td className='BodyText'>{row.Name}</td>
          <td className='BodyTextViolation'>{row.Violation}</td>
          <td className='BodyText'>{row.TransactionReference}</td>
          <td className='BodyTextAmount'>{row.Amount}</td>
          <td ><div className="viewBtn" onClick={handleViewButtonClick}>View</div></td>
        </tr>
      ))}
    </table>
    </div>
  )
}

export default TransactionBox