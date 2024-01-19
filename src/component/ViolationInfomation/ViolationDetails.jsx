import React from 'react'
import './violationDetails.css'
import Img from '../../assets/user.svg'

function ViolationDetails() {

    const vTableHead = [
        "Fines","Due Date","Status"
    ]

    const vTableBody = [

        {
            id:1,
            Fines:'5,000.00',
            Due:'08/08/23',
            Status:'Paid'
        },
        {
            id:2,
            Fines:'5,000.00',
            Due:'08/08/23',
            Status:'Not Paid'
        },
        {
            id:3,
            Fines:'5,000.00',
            Due:'08/08/23',
            Status:'Paid'
        },
        {
            id:4,
            Fines:'5,000.00',
            Due:'08/08/23',
            Status:'Paid'
        },
        {
            id:5,
            Fines:'15,000.00',
            Due:'04/08/23',
            Status:'Not Paid'
        },
        {
            id:6,
            Fines:'5,000.00',
            Due:'08/08/23',
            Status:'Paid'
        },
        {
            id:7,
            Fines:'5,000.00',
            Due:'08/08/23',
            Status:'Paid'
        },
        {
            id:8,
            Fines:'15,000.00',
            Due:'04/08/23',
            Status:'Not Paid'
        },
    ]

    const getStatusColor = (status) => {
        return status === 'Paid' ? 'Paid' : 'Not-paid';
      };

  return (
    <div className='ViolationDetails'>
        <div className="vDetails">
        <div className="contactBox">
        <div className="img_Box" style={{borderColor:'#80BAEF'}}>
        <img src={Img} alt=""  className='BoxImg'/>
        </div>
            <h3 className='BoxName'>Alfred Amos</h3>
            <div className="boxDescr"> Officer in Charge</div>
        </div>
        <div className="VDBox">
            <div className="vdBoxTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 32" fill="none">
            <path d="M35.3294 26.2542L21.3375 1.95529C20.9879 1.35997 20.4887 0.866367 19.8895 0.523397C19.2904 0.180427 18.6119 0 17.9215 0C17.2311 0 16.5527 0.180427 15.9536 0.523397C15.3544 0.866367 14.8552 1.35997 14.5056 1.95529L0.513712 26.2542C0.177292 26.8301 0 27.4849 0 28.1518C0 28.8187 0.177292 29.4736 0.513712 30.0494C0.858877 30.6483 1.35718 31.1446 1.95748 31.4874C2.55778 31.8301 3.23846 32.007 3.92968 31.9998H31.9134C32.6041 32.0064 33.2841 31.8293 33.8838 31.4866C34.4835 31.1438 34.9813 30.6478 35.3262 30.0494C35.6631 29.4739 35.8409 28.8191 35.8415 28.1523C35.8421 27.4854 35.6653 26.8303 35.3294 26.2542ZM16.6416 12.8C16.6416 12.4605 16.7764 12.1349 17.0165 11.8949C17.2565 11.6548 17.5821 11.52 17.9215 11.52C18.261 11.52 18.5866 11.6548 18.8266 11.8949C19.0667 12.1349 19.2015 12.4605 19.2015 12.8V19.1999C19.2015 19.5394 19.0667 19.865 18.8266 20.105C18.5866 20.345 18.261 20.4799 17.9215 20.4799C17.5821 20.4799 17.2565 20.345 17.0165 20.105C16.7764 19.865 16.6416 19.5394 16.6416 19.1999V12.8ZM17.9215 26.8798C17.5418 26.8798 17.1706 26.7672 16.8549 26.5563C16.5391 26.3453 16.293 26.0454 16.1477 25.6946C16.0024 25.3438 15.9644 24.9577 16.0385 24.5853C16.1125 24.2129 16.2954 23.8707 16.5639 23.6022C16.8324 23.3337 17.1745 23.1509 17.547 23.0768C17.9194 23.0027 18.3055 23.0407 18.6563 23.186C19.0071 23.3313 19.307 23.5774 19.518 23.8932C19.7289 24.2089 19.8415 24.5801 19.8415 24.9599C19.8415 25.4691 19.6392 25.9574 19.2792 26.3175C18.9191 26.6776 18.4308 26.8798 17.9215 26.8798Z" fill="#EC1919"/>
            </svg>
            <span className='vdbTopText'>Violation</span>
            <span className='vdbTopDate'>03 Nov 2023</span>
            </div>
            <div className="vdBoxCenter">
            Exceeded 60 km/h on a state road 
            and  violated the Federal Road Safety
            section (10) sub-section (2) of the 
            2007 Act 
            </div>
            <div className="vdBoxBottom">10:09am</div>
        </div>
        <div className="officerBox">
            <div className="obProfile">
                <img src={Img} alt="" className='obImg' />
                <div className="pDetails">
                    <span className='pName'>Alfred Amos</span>
                    <span className="offender">Offender</span>
                </div>
            </div>
            <div className="License">
                <div className="lNo"><b>License No:</b> 169299289732</div>
                <div className="lNo"><b>License Plate:</b> JJK-800-AR</div>
            </div>

        </div>
        </div>

        <div className="v-details">
            <div className="vTable">
                <table className='violation-Table'>
                    <thead className='vthead'>
                        <tr className='vTr'>
                            <th className='violationTHIcon'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 36 36" fill="none">
                            <path d="M11.25 23.625V3.375L13.5 4.5L15.75 3.375L17.9958 4.5L20.2718 3.375L22.5 4.5L24.7352 3.375L26.9803 4.5L29.25 3.375L31.5007 4.5L33.75 3.375V19.125" stroke="black" strokeWidth="2.4375" strokeLinejoin="round"/>
                            <path d="M33.75 19.125V27C33.75 28.4918 33.1574 29.9226 32.1025 30.9775C31.0476 32.0324 29.6169 32.625 28.125 32.625M28.125 32.625C26.6332 32.625 25.2025 32.0324 24.1476 30.9775C23.0927 29.9226 22.5 28.4918 22.5 27V23.625H3.37504C3.22694 23.6237 3.08006 23.6519 2.94298 23.708C2.80589 23.764 2.68135 23.8468 2.57662 23.9516C2.47189 24.0563 2.38908 24.1808 2.333 24.3179C2.27693 24.455 2.24873 24.6019 2.25004 24.75C2.25004 29.25 2.72395 32.625 7.87504 32.625H28.125Z" stroke="black" strokeWidth="2.4375" strokeLinejoin="round"/>
                            <path d="M15.75 10.125H29.25M20.25 15.75H29.25" stroke="black" strokeWidth="2.4375" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg></th>
                            {
                                vTableHead.map((Head, index)=>(
                                    <th key={index} className='violationTH'>{Head}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                            {
                                vTableBody.map((Body) => (
                                    <tr key={Body.id}>
                                        <td className='violationTD'>{}</td>
                                        <td className='violationTD'>{Body.Fines}</td>
                                        <td className='violationTD'>{Body.Due}</td>
                                        <td className={`violationTD ${getStatusColor(Body.Status)}`}>{Body.Status}</td>
                                    </tr>
                                ))
                            }
                  
                    </tbody>
                </table>
            </div>
            <div className="vDate">
               <div className="vDateTop">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 32" fill="none">
                <path d="M35.3294 26.2542L21.3375 1.95529C20.9879 1.35997 20.4887 0.866367 19.8895 0.523397C19.2904 0.180427 18.6119 0 17.9215 0C17.2311 0 16.5527 0.180427 15.9536 0.523397C15.3544 0.866367 14.8552 1.35997 14.5056 1.95529L0.513712 26.2542C0.177292 26.8301 0 27.4849 0 28.1518C0 28.8187 0.177292 29.4736 0.513712 30.0494C0.858877 30.6483 1.35718 31.1446 1.95748 31.4874C2.55778 31.8301 3.23846 32.007 3.92968 31.9998H31.9134C32.6041 32.0064 33.2841 31.8293 33.8838 31.4866C34.4835 31.1438 34.9813 30.6478 35.3262 30.0494C35.6631 29.4739 35.8409 28.8191 35.8415 28.1523C35.8421 27.4854 35.6653 26.8303 35.3294 26.2542ZM16.6416 12.8C16.6416 12.4605 16.7764 12.1349 17.0165 11.8949C17.2565 11.6548 17.5821 11.52 17.9215 11.52C18.261 11.52 18.5866 11.6548 18.8266 11.8949C19.0667 12.1349 19.2015 12.4605 19.2015 12.8V19.1999C19.2015 19.5394 19.0667 19.865 18.8266 20.105C18.5866 20.345 18.261 20.4799 17.9215 20.4799C17.5821 20.4799 17.2565 20.345 17.0165 20.105C16.7764 19.865 16.6416 19.5394 16.6416 19.1999V12.8ZM17.9215 26.8798C17.5418 26.8798 17.1706 26.7672 16.8549 26.5563C16.5391 26.3453 16.293 26.0454 16.1477 25.6946C16.0024 25.3438 15.9644 24.9577 16.0385 24.5853C16.1125 24.2129 16.2954 23.8707 16.5639 23.6022C16.8324 23.3337 17.1745 23.1509 17.547 23.0768C17.9194 23.0027 18.3055 23.0407 18.6563 23.186C19.0071 23.3313 19.307 23.5774 19.518 23.8932C19.7289 24.2089 19.8415 24.5801 19.8415 24.9599C19.8415 25.4691 19.6392 25.9574 19.2792 26.3175C18.9191 26.6776 18.4308 26.8798 17.9215 26.8798Z" fill="#F8C510"/>
                </svg>
                <span className='WarningText'>Warning</span>
                <span className='DateText'>03 Nov 2023</span>
               </div>
               <div className="vDateBottom">
                <div className="vWaring">
                            <span className='VWText'>Broken Rear Light</span>
                </div>
                <div className="vDueDate">
                            <span className='VDDText'>Due</span><span className='VDDText'><b>14</b></span><span className='VDDText'>Days</span>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ViolationDetails