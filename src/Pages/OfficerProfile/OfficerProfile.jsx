import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import HomeNav from '../../component/HomeNav/HomeNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import TableNav from '../../component/TableNav/TableNav'
import ProfileHeader from '../../component/ProfileHeader/ProfileHeader'
import ProfileNav from '../../component/ProfileNav/ProfileNav'
import './OfficerProfile.css'

function OfficerProfile() {
  return (
    <div className='OfficerProfile'>
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
       <div className="boxB">
       <ProfileHeader/>
        <ProfileNav/>
       </div>
      </div>
    </div>
  )
}

export default OfficerProfile