import React, {useState, useEffect,  useRef} from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import './homeNav.css'

function HomeNav() {
  const navigateTo = useNavigate();
  const [activeButton, setActiveButton] = useState(0);
  const navBodyRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click is outside the navigation bar
      if (navBodyRef.current && !navBodyRef.current.contains(event.target)) {
        // Do nothing if the click is outside, don't deactivate the active button
        return;
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

      const handleButtonClick = (linkId) => {
        // setActiveButton((prev) => (prev === linkId ? '' : linkId));
        setActiveButton(linkId);
        navigateTo(`/${linkId}`);
      };

  return (
    <div className='Home-Nav'>
        <div className="collapse">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M22.1667 10.5H19.1567L22.995 6.6617C23.2147 6.44201 23.3381 6.14405 23.3381 5.83337C23.3381 5.52268 23.2147 5.22472 22.995 5.00503C22.7753 4.78535 22.4774 4.66193 22.1667 4.66193C21.856 4.66193 21.558 4.78535 21.3383 5.00503L17.5 8.8317V5.83337C17.5 5.52395 17.3771 5.2272 17.1583 5.00841C16.9395 4.78962 16.6428 4.6667 16.3333 4.6667C16.0239 4.6667 15.7272 4.78962 15.5084 5.00841C15.2896 5.2272 15.1667 5.52395 15.1667 5.83337V11.6667C15.1667 11.9761 15.2896 12.2729 15.5084 12.4917C15.7272 12.7105 16.0239 12.8334 16.3333 12.8334H22.1667C22.4761 12.8334 22.7728 12.7105 22.9916 12.4917C23.2104 12.2729 23.3333 11.9761 23.3333 11.6667C23.3333 11.3573 23.2104 11.0605 22.9916 10.8417C22.7728 10.623 22.4761 10.5 22.1667 10.5ZM11.6667 15.1667H5.83334C5.52392 15.1667 5.22718 15.2896 5.00839 15.5084C4.78959 15.7272 4.66668 16.0239 4.66668 16.3334C4.66668 16.6428 4.78959 16.9395 5.00839 17.1583C5.22718 17.3771 5.52392 17.5 5.83334 17.5H8.83168L5.00501 21.3384C4.89566 21.4468 4.80887 21.5759 4.74964 21.718C4.69041 21.8602 4.65991 22.0127 4.65991 22.1667C4.65991 22.3207 4.69041 22.4732 4.74964 22.6154C4.80887 22.7575 4.89566 22.8866 5.00501 22.995C5.11347 23.1044 5.2425 23.1912 5.38467 23.2504C5.52684 23.3096 5.67933 23.3401 5.83334 23.3401C5.98736 23.3401 6.13985 23.3096 6.28202 23.2504C6.42419 23.1912 6.55322 23.1044 6.66168 22.995L10.5 19.1567V22.1667C10.5 22.4761 10.6229 22.7729 10.8417 22.9917C11.0605 23.2105 11.3573 23.3334 11.6667 23.3334C11.9761 23.3334 12.2728 23.2105 12.4916 22.9917C12.7104 22.7729 12.8333 22.4761 12.8333 22.1667V16.3334C12.8333 16.0239 12.7104 15.7272 12.4916 15.5084C12.2728 15.2896 11.9761 15.1667 11.6667 15.1667Z" fill="black"/>
        </svg>
        </div>
        <div className="NavBody" ref={navBodyRef}>
            <span className='NavHeader'>Home</span>
            {/* <div  className={activeButton === 'management' ? 'activeBTN' : 'nav'} onClick={() => handleButtonClick('management')}>
            System Management
            </div> */}
           <NavLink to='/management' className={activeButton === 'management' ? 'activeBTN' : 'nav'} onClick={() => handleButtonClick('management')}>
            System Management </NavLink>
          <NavLink to='/vehicle' className='nav'>   Vehicle Lot Center</NavLink>
         <NavLink to='/notification' className={activeButton === 'notification' ? 'activeBTN' : 'nav'} onClick={() => handleButtonClick('notification')}> Alerts & Notifications </NavLink>
          <NavLink to='/Configuration' className='nav'>System Configuration </NavLink>
        </div>
    </div>
  )
}

export default HomeNav