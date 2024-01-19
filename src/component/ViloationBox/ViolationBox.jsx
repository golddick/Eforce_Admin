import React from 'react'
import './violation.css'
import Img from '../../assets/user.svg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
function ViolationBox() {
    const navigateTo = useNavigate();
    const handleViewClick = (roleId) => {
        // Construct the route based on roleId
        // const route = `/singleViolation${roleId}`;
        // console.log(roleId)
        const route = `/Violation-Info`;
        // Navigate to the constructed route
        navigateTo(route);
      };

      const Violation = [
        
        {
            id:'1',
            img:'',
            violatorName:'Jude Frank',
            violatorViolation:'over speeding, broken light '
        },
        {
            id:'2',
            img:'',
            violatorName:'Monday Jude ',
            violatorViolation:'over speeding, broken light '
        },
        {
            id:'3',
            img:'',
            violatorName:'Jude Paul',
            violatorViolation:'over speeding, broken light '
        },
        {
            id:'4',
            img:'',
            violatorName:'Jude Frank',
            violatorViolation:'over speeding, broken light '
        },
        {
            id:'5',
            img:'',
            violatorName:'celab Frank',
            violatorViolation:'over speeding, broken light, Making call '
        },
        {
            id:'6',
            img:'',
            violatorName:'Pluto pass ',
            violatorViolation:'over speeding, broken light '
        },
        {
            id:'7',
            img:'',
            violatorName:'Tobi Mike',
            violatorViolation:' Speeding Ticket (Exceeded 60km/h on a state road) '
        },
      ]
    
  return (
  <div className="violationWrapper">
     
{
    Violation.map((index)=>(
        <div className='ViolationBox' key={index.id}>
        <div className="Left">
            <img src={index.img} alt="" className='violatorImg' />
        </div>
        <div className="Center">
            <div className="violatorName">{index.violatorName}</div>
            <div className="violatorViolation">{index.violatorViolation}</div>
        </div>
        <div className="right">
            <div className="viewBtn" onClick={handleViewClick}>
                View
            </div>
            <div className="3dot">
                <BsThreeDotsVertical className='bodyTextIcon'/>
            </div>
        </div>
    </div>
    ))
}

      <div className='ViolationBox'>
        <div className="Left">
            <img src={Img} alt="" className='violatorImg' />
        </div>
        <div className="Center">
            <div className="violatorName">Alfred Amos</div>
            <div className="violatorViolation">
            Speeding Ticket (Exceeded 60km/h on a state road)
            </div>
        </div>
        <div className="right">
            <div className="viewBtn" onClick={handleViewClick}>
                View
            </div>
            <div className="3dot">
                <BsThreeDotsVertical className='bodyTextIcon'/>
            </div>
        </div>
    </div>


  </div>
  )
}

export default ViolationBox