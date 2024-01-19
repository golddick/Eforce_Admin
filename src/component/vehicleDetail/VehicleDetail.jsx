import React from 'react'
import './vehicleDetail.css'

function VehicleDetail() {

  const TableBody = [
  
      {
          id: 1,
          violationRecord:'Broken Light',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Cleared',
      },
      {
          id: 2,
          violationRecord:'Broken Light,Speeding Ticket',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Not-Paid',
      },
      {
          id: 3,
          violationRecord:'Broken Light',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Unpaid',
      },
      {
          id: 4,
          violationRecord:'Speeding Ticket',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Unpaid',
      },
      {
          id: 5,
          violationRecord:'Speeding Ticket',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Cleared',
      },
      {
          id: 6,
          violationRecord:'Speeding Ticket, Hit another vehicle',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Unpaid',
      },
      {
          id: 7,
          violationRecord:'Speeding Ticket',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Cleared',
      },
      {
          id: 8,
          violationRecord:'Speeding Ticket',
         ViolationDetails:'Non-compliance to payment of violation on broken side mirror.',
         dueDate:'26.12.2023,18:00',
         fine:'N20,000.00',
         lotFee:'N40,000.00',
         towingFee:'N10,000.00',
         incurred:'N10,000.00',
         total:'N80,000.00',
         status:'Unpaid',
      },
     
  ]


  return (
    <div className='VehicleDetail'>
      <div className="VD_Top">
        <div className="_topImg">
          <img src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" alt="" className='VDimgTop' />
        </div>
        <div className="topVD">
          <div className="ViolationIssuedOfficer">
            <div className="vODetails">
              <img src="https://static-00.iconduck.com/assets.00/thinking-person-6-illustration-601x1024-797zqeyb.png" alt=""  className='officerImg'/>
              <div className="officer_Info">
                <span className='Info_Text'><b>Officer:</b> Mohammed Ibrahim</span>
                <span className='Info_Text'><b>ID:</b> 23432</span>
              </div>
            </div>
            <div className="vIssuedDate">
              <span className='impoundDate'><b>Date Impounded: </b> 12.12.2023, 18:00</span>
            <div className="_dueDate">
            <span className='DD'><b>Due date:</b></span>
              <span className='DueD'>26.12.2023, 18:00</span>
              <span className='daysLeft'>14d:32m:55s</span>
            </div>
            </div>
          </div>
          <div className="VehicleViolation_Details">
        <table className='VVDTable'>
      <tr className='VVDTHeader'>
              <th className='vvdhead'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 31 28" fill="none">
                <path d="M30.5571 22.7078L18.4552 1.69116C18.1528 1.17627 17.7211 0.749338 17.2028 0.452696C16.6846 0.156055 16.0978 0 15.5007 0C14.9036 0 14.3168 0.156055 13.7985 0.452696C13.2803 0.749338 12.8486 1.17627 12.5462 1.69116L0.444319 22.7078C0.153343 23.2058 0 23.7723 0 24.3491C0 24.9259 0.153343 25.4923 0.444319 25.9903C0.742859 26.5083 1.17385 26.9376 1.69306 27.234C2.21227 27.5305 2.80101 27.6834 3.39885 27.6772H27.6025C28.1999 27.683 28.7881 27.5298 29.3068 27.2333C29.8254 26.9369 30.256 26.5079 30.5543 25.9903C30.8457 25.4925 30.9995 24.9262 31 24.3494C31.0005 23.7726 30.8476 23.2061 30.5571 22.7078ZM14.3936 11.071C14.3936 10.7773 14.5102 10.4957 14.7179 10.2881C14.9255 10.0805 15.2071 9.96386 15.5007 9.96386C15.7943 9.96386 16.0759 10.0805 16.2835 10.2881C16.4911 10.4957 16.6078 10.7773 16.6078 11.071V16.6064C16.6078 16.9 16.4911 17.1816 16.2835 17.3892C16.0759 17.5968 15.7943 17.7135 15.5007 17.7135C15.2071 17.7135 14.9255 17.5968 14.7179 17.3892C14.5102 17.1816 14.3936 16.9 14.3936 16.6064V11.071ZM15.5007 23.2489C15.1722 23.2489 14.8512 23.1515 14.5781 22.969C14.305 22.7866 14.0922 22.5272 13.9665 22.2238C13.8408 21.9203 13.8079 21.5864 13.872 21.2643C13.936 20.9422 14.0942 20.6463 14.3264 20.414C14.5587 20.1818 14.8546 20.0236 15.1767 19.9595C15.4988 19.8955 15.8327 19.9284 16.1362 20.054C16.4396 20.1797 16.699 20.3926 16.8815 20.6657C17.0639 20.9388 17.1613 21.2598 17.1613 21.5883C17.1613 22.0287 16.9864 22.4511 16.6749 22.7625C16.3635 23.0739 15.9411 23.2489 15.5007 23.2489Z" fill="#EC1919"/>
              </svg>
                <span className='vHeadText'>Violation</span>
              </th>
              <th><span className='vHeadText'>Details</span></th>
            </tr>
      {TableBody.map((row) => (
        <tr key={row.id} className='VVDTableBody'>
          <td className='vBodyText'>{row.violationRecord}</td>
          <td className='vBodyText'>{row.ViolationDetails}</td>

        </tr>
      ))}
    </table>
      
          </div>
        </div>
      </div>
      <div className="vehicleOwner">
        <div className="ownerInfo">
        <div className="vODetails">
              <img src="https://everydaypower.com/wp-content/uploads/2015/10/Become-A-More-Positive-Person-With-These-10-Actions.jpg" alt=""  className='officerImg'/>
              <div className="officer_Info">
                <span className='Info_Text'><b>Name:</b> Ireoluwa Ayodele </span>
                <span className='Info_Text'><b>License No::</b> 234326887542</span>
              </div>
            </div>
            <div className="ownerCarInfo">
              <span className='v_info'><b>Vehicle Make: </b>Lexus </span>
              <span className='v_info'><b>Vehicle Model: </b>Gx 470 </span>
              <span className='v_info'><b>Vehicle Colour: </b>Blue </span>
              <span className='v_info'><b>License Plate: </b>AXR-453-JJ </span>
            </div>
        </div>
        <div className="violationTransactionTable">
        <table className='VVDTable'>
      <tr className='VVDTHeader'>
              <th ><span className='vHeadText'>Violation</span></th>
              <th><span className='vHeadText'>Due Date</span></th>
              <th ><span className='vHeadText'>Fine</span></th>
              <th><span className='vHeadText'>Lot Fee</span></th>
              <th ><span className='vHeadText'>Towing Fee</span></th>
              <th><span className='vHeadText'>Incurred</span></th>
              <th><span className='vHeadText'>Total</span></th>
              <th><span className='vHeadText'>Status</span></th>
            </tr>
      {TableBody.map((row) => (
        <tr key={row.id} className='VVDTableBody'>
          <td className='vBodyText'>{row.violationRecord}</td>
          <td className='vBodyText'>{row.dueDate}</td>
          <td className='vBodyText'>{row.fine}</td>
          <td className='vBodyText'>{row.lotFee}</td>
          <td className='vBodyText'>{row.towingFee}</td>
          <td className='vBodyText'>{row.incurred}</td>
          <td className='vBodyText'>{row.total}</td>
          <td className='vBodyText'>{row.status}</td>

        </tr>
      ))}
    </table>
        </div>
      </div>
    </div>
  )
}

export default VehicleDetail