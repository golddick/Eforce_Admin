import React from 'react'
import ENav from '../../component/EforceNav/ENav'
import BodyHeader from '../../component/BodyHeader/BodyHeader'
import HomeNav from '../../component/HomeNav/HomeNav'
import NotificationBox from '../../component/NotificationBox/NotificationBox'
import './notification.css'

function Notification() {
  return (
    <div className='NotificationPage'>
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
       <div className="boxB">
        <NotificationBox/>
       </div>
      </div>
    </div>
  )
}

export default Notification