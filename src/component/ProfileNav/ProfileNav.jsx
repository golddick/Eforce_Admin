import React, {useState} from 'react'
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import Activity from '../Activity/Activity'
import'./ProfileNav.css'

function ProfileNav() {
//     const [activeButton, setActiveButton] = useState(null);

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName === activeButton ? null : buttonName);
//   };
const [activeTab, setActiveTab] = useState('profile');

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className='ProfileNav'>
        <div className="profile-Btn">
            <button  className={`PBtn ${activeTab === 'profile' ? 'activeBTN' : ''}`}
            onClick={() => handleButtonClick('profile')}>
                <MdOutlinePersonOutline className="PBtn-icon"/>
                Profile
            </button>
            <button className={`PBtn ${activeTab === 'activity' ? 'activeBTN' : ''}`}
            onClick={() => handleButtonClick('activity')}>
            <IoAnalyticsOutline className="PBtn-icon"/>
                Activity
            </button>
            <button className="deleteBtn">
            <RiDeleteBin5Line className="PBtn-icon"/>
                Delete
            </button>
        </div>
        <div className="tabContent">
        {activeTab === 'profile' && (
          <div>
           <ProfileSummary/>
          </div>
        )}
        {activeTab === 'activity' && (
          <div>
           <Activity/>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileNav