import React from 'react'
import './ProfileSummary.css'
import { FaCircleCheck } from "react-icons/fa6";

function ProfileSummary() {
  return (
    <div className='ProfileSummary'>
        <div className="summary">
        <span className='psHeader'>Professional Overview</span>
            <p className='psBio'>I am an experienced road safety officer that has been serving in the field for over 8 year, having quality
      experience in making timely decisions to ensure the citizen safety. I am of good moral standards and i 
      have taken the corps moral assessment examination , coming out with  distinctions. I am also
                passionate about ensuring the citizen safety and keep them safe on the road.</p>

        </div>
          <div className="experienceBox">
            <div className='expHeader'>Experience</div>
          <div className="expBody">
          <div className="exp">
            <FaCircleCheck className='expIcon'/>
            <div className="expContent">
              <div className='expPos'>Lagos Road Safety District | Road Officer</div>
              <div className='expDate'>November 2022- Present</div>
              <p className='expBio'>As an experienced road officer i work in the lagos state road safety district to ensure the people’s
                  safety on various highways and state road networks</p>
            </div>
            </div>
            <div className="exp">
            <FaCircleCheck className='expIcon'/>
            <div className="expContent">
              <div className='expPos'>Lagos Road Safety District | Road Officer</div>
              <div className='expDate'>November 2022- Present</div>
              <p className='expBio'>As an experienced road officer i work in the lagos state road safety district to ensure the people’s
                  safety on various highways and state road networks</p>
            </div>
            </div>
            <div className="exp">
            <FaCircleCheck className='expIcon'/>
            <div className="expContent">
              <div className='expPos'>Lagos Road Safety District | Road Officer</div>
              <div className='expDate'>November 2022- Present</div>
              <p className='expBio'>As an experienced road officer i work in the lagos state road safety district to ensure the people’s
                  safety on various highways and state road networks</p>
            </div>
            </div>

            <div className="exp">
            <FaCircleCheck className='expIcon'/>
            <div className="expContent">
              <div className='expPos'>Lagos Road Safety District | Road Officer</div>
              <div className='expDate'>November 2022- Present</div>
              <p className='expBio'>As an experienced road officer i work in the lagos state road safety district to ensure the people’s
                  safety on various highways and state road networks</p>
            </div>
            </div>
            <div className="exp">
            <FaCircleCheck className='expIcon'/>
            <div className="expContent">
              <div className='expPos'>Lagos Road Safety District | Road Officer</div>
              <div className='expDate'>November 2022- Present</div>
              <p className='expBio'>As an experienced road officer i work in the lagos state road safety district to ensure the people’s
                  safety on various highways and state road networks</p>
            </div>
            </div>
            <div className="exp">
            <FaCircleCheck className='expIcon'/>
            <div className="expContent">
              <div className='expPos'>Lagos Road Safety District | Road Officer</div>
              <div className='expDate'>November 2022- Present</div>
              <p className='expBio'>As an experienced road officer i work in the lagos state road safety district to ensure the people’s
                  safety on various highways and state road networks</p>
            </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default ProfileSummary