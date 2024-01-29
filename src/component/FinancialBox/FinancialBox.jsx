import React from 'react'
import Chartbox from '../Chart/Chart'
import LineChart from '../Chart/ChartLine'
import './FinancialBox.css'

function FinancialBox() {
    const chartData = {
        labels: ['January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Revenue (k)',
            data: [12, 19, 3, 50, 2, 3,1, 0, 3, 5, 12, 30],
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
    const BarchartData = {
        labels: ['speeding ', 'Illegal parking', 'No Tail Light', 'No Extra Tyre', 'No Fire Extinguisher', 'No Seat Belt', 'No Seat Belt'],
        datasets: [
          {
            label: 'Violation Rate (%)',
            data: [12, 19, 30, 5, 2, 3,1, 0, 3, 5, 12, 3],
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


      const TableBody = [
  
        {
            id: 1,
            OfficerID:' 12299',
            Officer:'Joseph Vincent',
            img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
            Income:'N20,000,000.00',
           lastUpdate:'26.12.2023,18:00',
           MFViolation:'45',
           vPoint:'22',
           mRating:'4.3',
        },
        {
            id: 2,
            OfficerID:' 1298399',
            Officer:'Joseph Vincent',
            img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
            Income:'N20,000,000.00',
           lastUpdate:'26.12.2023,18:00',
           MFViolation:'45',
           vPoint:'22',
           mRating:'4.3',
        },
        {
            id: 3,
            OfficerID:' 299',
            Officer:' jude james',
            img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
            Income:'N100,000.00',
           lastUpdate:'26.12.2023,18:00',
           MFViolation:'105',
           vPoint:'222',
           mRating:'4',
        },
        {
            id: 4,
            OfficerID:' 1298399',
            Officer:'Joseph jude',
            img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
            Income:'N2,000.00',
           lastUpdate:'26.12.2023,18:00',
           MFViolation:'450',
           vPoint:'111',
           mRating:'2.3',
        },
        {
            id: 5,
            OfficerID:' 12299',
            Officer:'Joseph Vincent',
            img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
            Income:'N20,000,000.00',
           lastUpdate:'26.12.2023,18:00',
           MFViolation:'45',
           vPoint:'22',
           mRating:'4.3',
        },
        {
            id: 6,
            OfficerID:' 156399',
            Officer:'pluto sam',
            img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
            Income:'N2,000,000.00',
           lastUpdate:'10.12.2023,10:00',
           MFViolation:'222',
           vPoint:'22',
           mRating:'4.3',
        },
    
       
    ]
    

  return (
    <div className='FinancialBox'>

        <div className="financialChart">
       <div className="linechart">
       <LineChart chartData={chartData} />
       <span className='chartText'> <b>Total Revenue:</b> N20,000,000.00</span>
       </div>
       <div className=" linechart">
       <Chartbox chartData={BarchartData}/>
       <span className='chartText'> <b>Total Revenue:</b> N20,000,000.00</span>
       </div>
        </div>

    <div className="financialTable">
    <table className='VVDTable'>
    <thead>
    <tr className='VVDTHeader'>
            {/* <th><span className='vHeadText'></span></th> */}
            <th><span className='vHeadText'>Officer</span></th>
              <th ><span className='vHeadText'>Generated Income</span></th>
              <th><span className='vHeadText'>Last updated</span></th>
              <th ><span className='vHeadText'>Monthly <br/> Flagged Violation</span></th>
              <th><span className='vHeadText'>Violation Points</span></th>
              <th ><span className='vHeadText'>Monthly Rating</span></th>
            </tr>
    </thead>
     <tbody className='FTBody'>
     {TableBody.map((row) => (
        <tr key={row.id} className='VVDTableBody'>

        <td className='vBodyText'>
            <div className="FOFFICER">
            <img src={row.img} alt="" className='table_img' />
           <div className="officerInfo__">
            <p>{row.Officer}</p>
            <small>ID: {row.OfficerID}</small>
           </div>
            </div>
        </td>
          <td className='vBodyText'>{row.Income}</td>
          <td className='vBodyText'>{row.lastUpdate}</td>
          <td className='vBodyText'>{row.MFViolation}</td>
          <td className='vBodyText'>{row.vPoint}</td>
          <td className='vBodyText'>
            <div className="fRating">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6753 0.501438C10.6062 0.351736 10.4957 0.224953 10.3568 0.136089C10.2179 0.0472257 10.0565 0 9.89166 0C9.72679 0 9.56537 0.0472257 9.4265 0.136089C9.28763 0.224953 9.17712 0.351736 9.10804 0.501438L6.63119 5.86939L0.761819 6.56585C0.598062 6.58518 0.443272 6.65103 0.315769 6.75559C0.188265 6.86015 0.0933858 6.99905 0.0423597 7.15585C-0.00866643 7.31265 -0.0137032 7.48079 0.0278454 7.64036C0.0693939 7.79994 0.155789 7.94427 0.276804 8.05627L4.61777 12.0693L3.46565 17.8688C3.43365 18.0304 3.4486 18.1979 3.50875 18.3513C3.5689 18.5047 3.67172 18.6377 3.80506 18.7346C3.9384 18.8314 4.09668 18.8881 4.26119 18.8978C4.42571 18.9076 4.58957 18.87 4.73341 18.7896L9.89166 15.9019L15.0499 18.7896C15.1938 18.8704 15.3579 18.9082 15.5227 18.8985C15.6874 18.8889 15.846 18.8322 15.9795 18.7352C16.113 18.6382 16.2159 18.5049 16.276 18.3512C16.3361 18.1975 16.3509 18.0297 16.3185 17.8679L15.1664 12.0702L19.5065 8.05627C19.6275 7.94427 19.7139 7.79994 19.7555 7.64036C19.797 7.48079 19.792 7.31265 19.741 7.15585C19.6899 6.99905 19.5951 6.86015 19.4675 6.75559C19.34 6.65103 19.1853 6.58518 19.0215 6.56585L13.1513 5.86853L10.6753 0.501438Z" fill="#FFCC00"/>
            </svg>
            {row.mRating}
            </div>
            </td>

        </tr>
      ))}
     </tbody>
    </table>
    </div>

    </div>
  )
}

export default FinancialBox