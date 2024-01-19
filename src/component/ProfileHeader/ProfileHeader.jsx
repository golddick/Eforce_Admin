import React from 'react'
import './ProfileHeader.css'
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCall } from "react-icons/md";

function ProfileHeader() {
  return (
    <div className='ProfileHeader'>
        <img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookPhilippines.jpg" alt="profileImg" className='profileImg' />
        <div className="profileName">
            <span className='Pname'> Daniel Chris Godwin</span>
            <div className="activeStatus">   Active - On Duty</div>
        </div>
        <div className="profileContact">
            <div className="contact_Icon">
            <HiOutlineMail className='cIcon'/>
            <MdOutlineCall className='cIcon'/>
            <HiOutlineLocationMarker className='cIcon'/>
            </div>
            <div className="profileID">ID: 12345678 </div>
        </div>
    </div>
  )
}

export default ProfileHeader