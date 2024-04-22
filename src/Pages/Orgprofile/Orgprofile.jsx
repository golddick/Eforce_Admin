import React from 'react'
import EForceNav from '../../component/EforceNav/EforceNav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import OrgProfileHeader from './OrgProfileHeader'
import OrgProfileNav from './OrgProfileNav'
// import './OfficerProfile.css'

function OrgProfile() {
  return (
    <div className='OrganizationPage'>
  <div className="OrgleftNav">
      <EForceNav/>
  </div>
      <div className="OrgbodyBox">
        <BodyHeader/>
       <div className="boxB">
       <OrgProfileHeader/>
        <OrgProfileNav/>
       </div>
      </div>
    </div>
  )
}

export default OrgProfile