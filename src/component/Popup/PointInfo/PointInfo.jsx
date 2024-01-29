import React from 'react'
import './PointInfo.css'

function PointInfo({closePoint}) {

    const TableHeader = [
        'Point','Violation', 'Date'
      ]
      const TableBody = [
      
          {
              id: 1,
              point:'22',
              Violation:'Speeding Fine ',
              Date:'03 Nov 2023 9:21am',
          },
          {
              id: 2,
              point:'22',
              Violation:'Speeding Fine ',
              Date:'03 Nov 2023 9:21am',
          },
          {
              id: 3,
              point:'224',
              Violation:'Speeding Fine ',
              Date:'03 Nov 2023 9:21am',
          },
          {
              id: 4,
              point:'22',
              Violation:'Speeding Fine ',
              Date:'03 Nov 2023 9:21am',
          },
      ]

      

  return (
    <div className='PointInfoContainer'>
        <div className="containerBox">
       <div className="closeCont">
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 28 28" fill="none" className='closeIcon' onClick={closePoint}>
        <path d="M1 26.49L13.745 13.745L26.49 26.49M26.49 1L13.7426 13.745L1 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
       </div>
       <div className="pointTable">
       <table className='pointTable_ '>
  <thead >
  <tr className='PTHead'>
        {TableHeader.map((header, index) => (
          <th key={index} className='HeadText'>{header}</th>
        ))}
      </tr>
  </thead>
     <tbody>
     {TableBody.map((row) => (
        <tr key={row.id} className='PointTableBody'>
          <td className='BodyText'>{row.point}</td>
          <td className='BodyText'>{row.Violation}</td>
          <td className='BodyText'>{row.Date}</td>
        </tr>
      ))}
     </tbody>
    </table>
    <div className="point-Filter">
        <div className="redDot"></div>
        <span className='fText_'>Total Point From: </span>
        <input type="date" className='pointDateFilter' />
        <span className='fText_'>To</span>
        <input type="date"  className='pointDateFilter'/>
        <div className="givenPoint">4 point</div>
    </div>
       </div>
        </div>
    </div>
  )
}

export default PointInfo