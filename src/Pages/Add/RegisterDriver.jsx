import React from 'react'
import './register.css'
import HomeNav from '../../component/HomeNav/HomeNav'
import ENav from '../../component/EforceNav/ENav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import TableNav from '../../component/TableNav/TableNav'
import RegVehicle from '../../component/RegForm/RegDriver'



function RegisterDriver() {
  return (
    <div className='RegisterOfficer'>
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
        <RegVehicle/>
        </div>

    </div>
  )
}

export default RegisterDriver