import React from 'react'
import WidgetCard from '../WidgetCard/WidgetCard'
import LineChart from '../Chart/ChartLine' 
import CircleChart from '../Chart/CircleChat'
import './analyticBox.css'

function AnalyticBox() {

//     const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','Aug', 'Sept', "Oct", "Nov", "Dec"];



//  // Initialize datasets with empty arrays
//  const datasets = [];

//  datasets.push(
//    {
//      label: 'Fined Vehicles',
//      data: [500, 100, 100, 300, 250, 100, 0, 3],
//      borderColor: 'rgb(255, 99, 132)',
//      backgroundColor: 'rgb(255, 99, 132)',
//      yAxisID: 'y',
//    },
//    {
//      label: 'Fined Drivers',
//      data: [200, 90, 103, 200, 120, 300, 100, 201, 6],
//      borderColor: 'rgb(54, 162, 235)',
//      backgroundColor: 'rgb(54, 162, 235)',
//      yAxisID: 'y1',
//    },
//    {
//      label: 'Fined Vehicles & Drivers',
//      data: [210, 200, 203, 101, 120, 90, 130, 210],
//      borderColor: 'rgb(255, 205, 86)',
//      backgroundColor: 'rgb(255, 205, 86)',
//      yAxisID: 'y2',
//    }
//  );

//  // Calculate totals separately for Fined Vehicles and Fined Drivers
//  const totalFinedVehicles = datasets[0].data.reduce((sum, value) => sum + value, 0);
//  const totalFinedDrivers = datasets[1].data.reduce((sum, value) => sum + value, 0);
//  const totalVehicleAndDriver = datasets[2].data.reduce((sum, value)=> sum + value,0)

//  // Update the labels with the calculated totals
//  datasets[0].label = `  N${totalFinedVehicles.toLocaleString()}`;
//  datasets[1].label = `  N${totalFinedDrivers.toLocaleString()}`;
//  datasets[2].label = `  N${totalVehicleAndDriver.toLocaleString()}`;

const datasets = [];

const chartData = {
  labels: ['January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December'],
 
  datasets: [
    {
      label: 'Fined Vehicles',
      data: [500, 100, 100, 300, 250, 100, 0, 3],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
      yAxisID: 'y',
    },
    {
      label: 'Fined Drivers',
      data: [200, 90, 103, 200, 120, 300, 100, 201, 6],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgb(54, 162, 235)',
      yAxisID: 'y1',
    },
    {
      label: 'Fined Vehicles & Drivers',
      data: [210, 200, 203, 101, 120, 90, 130, 210],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgb(255, 205, 86)',
      yAxisID: 'y2',
    }
  ]
};

 // Calculate totals separately for Fined Vehicles and Fined Drivers
 const totalFinedVehicles = chartData.datasets[0].data.reduce((sum, value) => sum + value, 0);
 const totalFinedDrivers = chartData.datasets[1].data.reduce((sum, value) => sum + value, 0);
 const totalVehicleAndDriver = chartData.datasets[2].data.reduce((sum, value)=> sum + value,0)

 // Update the labels with the calculated totals
 chartData.datasets[0].label = `  N${totalFinedVehicles.toLocaleString()}`;
 chartData.datasets[1].label = `  N${totalFinedDrivers.toLocaleString()}`;
 chartData.datasets[2].label = `  N${totalVehicleAndDriver.toLocaleString()}`;


 const TableBody = [
  
    {
        id: 1,
        driver:'Joseph Vincent',
        img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
        violationRecord:'Broken Light',
       vLicenseNum:'26.12.2023,18:00',
       vLicense:'BCY-678-ST',
       Date:'Nov 31, 2023',
       DriverFine:'N20,000.00',
       VFine:'N40,000.00',
       total:'N80,000.00',
       status:'Cleared',
    },
    {
        id: 2,
        driver:'Joseph Vincent',
        img:'https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg',
        violationRecord:'Broken Light, Over speeding',
       vLicenseNum:'26.12.2023,18:00',
       vLicense:'BCY-678-ST',
       Date:'Nov 31, 2023',
       DriverFine:'N20,000.00',
       VFine:'N40,000.00',
       total:'N80,000.00',
       status:'Not-Paid',
    },

   
]

const renderStatus = (status) => {

    let statusText ='';
    switch (status) {
      case "Not-Paid":
        statusText = 'UnpaidStyle';
        break;
        case 'Cleared':
          statusText = 'ClearedStyle';
    }
    return(
      <div className={statusText}>
        {status}
      </div>
    )
  // })
 
}


  return (
    <div className='AnalyticBox'>
        <h1 className='orgName'>Analytics</h1>
        <div className="filterBox">
            <div className="dateFilter">
                <span className='filterText'>Date</span>
                <div className="filterField">
                    <input type="date" placeholder="Start Date" className='inputField'/>
                    <input type="date" placeholder="End Date" className='inputField'/>
                </div>
            </div>
            <div className="officerFilter">
                <div className="singleFilter">
                    <span className='filterText'>Officers</span>
                    <div className='inputBox'> John doe</div>
                </div>
                <div className="singleFilter">
                    <span className='filterText'>Category</span>
                    <div className='inputBox'> 
                    <span>All</span>  
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M13 1L7 7L1 1" stroke="#AAA9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </div>
                <div className="singleFilter">
                    <span className='filterText'>Station</span>
                    <div className='inputBox'> <span className='inputBoxText'>123, Awolowo Rd, Ikeja, Lagos.</span></div>
                </div>
            </div>
        </div>
        <div className="analyticWidget">
            <div className="leftWidget">
                <div className="topWidget">
                    <WidgetCard title={"November Income"} value={'15,000'}  percent={"+12"}/>
                    <WidgetCard title={"Net Income accrued on POS"} value={'30,000'}percent={"-2"} />
                    <WidgetCard title={"Organization Revenue"} value={'15,000'}  percent={"+2"}/>
                </div>
                <div className="bottomWidget">
                <LineChart   chartData={chartData}  />
                </div>
            </div>
            <div className="rightWidget">
            <div className="contactBox">
        <div className="img_Box">
        <img src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg" alt=""  className='BoxImg'/>
        </div>
            <h3 className='BoxName'>Alfred Amos</h3>
            <div className="contactIcon "><span className='BoxName'>ID: 7422368</span></div>
            </div>
            <CircleChart   />
            </div>
        </div>
        <div className="analyticTable">
            <h1 className='orgName'>Transactions</h1>
            <table className='VVDTable'>
    <thead>
    <tr className='VVDTHeader'>
            <th><span className='vHeadText'></span></th>
            <th><span className='vHeadText'>Driver</span></th>
              <th ><span className='vHeadText'>Violation</span></th>
              <th><span className='vHeadText'>Vehicle License</span></th>
              <th ><span className='vHeadText'>Date</span></th>
              <th><span className='vHeadText'>Driver Fine</span></th>
              <th ><span className='vHeadText'>Vehicle Fine</span></th>
              <th><span className='vHeadText'>Total</span></th>
              <th><span className='vHeadText'>Status</span></th>
            </tr>
    </thead>
     <tbody>
     {TableBody.map((row) => (
        <tr key={row.id} className='VVDTableBody'>
        <td className='vBodyText'>
            <img src={row.img} alt="" className='table_img' />
        </td>
        <td className='vBodyText'>
            <div className="tDriveInfo">
            {row.driver}
          <span>Lic No:  {row.vLicenseNum}</span>
            </div>
        </td>
          <td className='vBodyText'>
            <div className="TextContainer">
                    {row.violationRecord.split(',').map((violation, index) => (
                      <div key={index} className='textList'>{violation.trim()}</div>
                    ))}
            </div>
          </td>
          <td className='vBodyText'>{row.vLicense}</td>
          <td className='vBodyText'>{row.Date}</td>
          <td className='vBodyText'>{row.DriverFine}</td>
          <td className='vBodyText'>{row.VFine}</td>
          <td className='vBodyText'>{row.total}</td>
          <td className='vBodyText'>
            {
              renderStatus(row.status)
            }
          </td>

        </tr>
      ))}
     </tbody>
    </table>
        </div>
    </div>
  )
}

export default AnalyticBox