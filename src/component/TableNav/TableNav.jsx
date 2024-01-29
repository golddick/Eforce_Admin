import React, {useState, useEffect} from 'react'
import Add from '../Popup/Add/Add'
import { useNavigate } from 'react-router-dom';
import './tableNav.css'

function TableNav() {
    const [showActive, setShowActive] =  useState(0)
    const [showAddPopup, setShowAddPopup] = useState(false)
    const navigateTo = useNavigate();

    const toggleAdd = () => {
      setShowAddPopup(!showAddPopup)
    }
 
    const toggleActiveLine = (linkId) => {
        setShowActive(linkId === showActive ? null : linkId);
        navigateTo(`/${linkId}`)
      };
    
      // const handleClickOutside = (event) => {
      //   if (!event.target.closest('.tNav')) {
      //       setShowActive(null);
      //   }
      // };
    
      // useEffect(() => {
      //   document.addEventListener('click', handleClickOutside);
    
      //   return () => {
      //     document.removeEventListener('click', handleClickOutside);
      //   };
      // }, []); // Adding and removing click event listener on mount and unmount
    
  return (
    <div className='TableNav'>
    <div className="table-Nav">
    <div className={`tNav ${showActive === 'management' ? 'clickActive' : ''}`} onClick={() => toggleActiveLine("management")}>
            <span className='tNavText'>Officer</span>
            <div className={`clickActive ${showActive === 'management' ? 'activeLine' : ''}`}></div>
        </div>
        <div className={`tNav ${showActive === 'Drivers-Management' ? 'clickActive' : ''}`} onClick={() => toggleActiveLine('Drivers-Management')}>
            <span className='tNavText'>Drivers</span>
            <div className={`clickActive ${showActive === 'Drivers-Management' ? 'activeLine' : ''}`}></div>
        </div>
        <div className={`tNav ${showActive === 'Vehicles-Management' ? 'clickActive' : ''}`} onClick={() => toggleActiveLine('Vehicles-Management')}>
            <span className='tNavText'> Vehicle</span>
            <div className={`clickActive ${showActive === 'Vehicles-Management' ? 'activeLine' : ''}`}></div>
        </div>
        <div className={`tNav ${showActive === 'Violation-Management' ? 'clickActive' : ''}`} onClick={() => toggleActiveLine('Violation-Management')}>
            <span className='tNavText'>Violation</span>
            <div className={`clickActive ${showActive === 'Violation-Management' ? 'activeLine' : ''}`}></div>
        </div>
        <div className={`tNav ${showActive === 'Transaction-Management' ? 'clickActive' : ''}`} onClick={() => toggleActiveLine('Transaction-Management')}>
            <span className='tNavText'>Transaction</span>
            <div className={`clickActive ${showActive === 'Transaction-Management' ? 'activeLine' : ''}`}></div>
        </div>
    </div>
    <div className="add">
 <div className="sort_">
 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
    <path d="M10.2984 4.09918C10.4742 4.27474 10.7124 4.37335 10.9609 4.37335C11.2093 4.37335 11.4476 4.27474 11.6234 4.09918L12.5234 3.19917V15.9367C12.5234 16.1853 12.6222 16.4238 12.798 16.5996C12.9738 16.7754 13.2122 16.8742 13.4609 16.8742C13.7095 16.8742 13.948 16.7754 14.1238 16.5996C14.2996 16.4238 14.3984 16.1853 14.3984 15.9367V3.19917L15.2984 4.09918C15.3842 4.19128 15.4877 4.26516 15.6027 4.3164C15.7177 4.36764 15.8419 4.39519 15.9677 4.39741C16.0936 4.39964 16.2186 4.37648 16.3354 4.32933C16.4521 4.28218 16.5582 4.212 16.6472 4.12297C16.7362 4.03395 16.8064 3.92791 16.8535 3.81117C16.9007 3.69444 16.9238 3.5694 16.9216 3.44352C16.9194 3.31764 16.8919 3.1935 16.8406 3.0785C16.7894 2.9635 16.7155 2.86 16.6234 2.77417L14.1234 0.274175C13.9476 0.0986117 13.7093 0 13.4609 0C13.2124 0 12.9742 0.0986117 12.7984 0.274175L10.2984 2.77417C10.1228 2.94996 10.0242 3.18824 10.0242 3.43668C10.0242 3.68511 10.1228 3.92339 10.2984 4.09918ZM4.39839 16.1742L5.29839 15.2742C5.38421 15.1821 5.48771 15.1082 5.60271 15.0569C5.71771 15.0057 5.84185 14.9782 5.96773 14.9759C6.09361 14.9737 6.21865 14.9969 6.33538 15.044C6.45212 15.0912 6.55816 15.1614 6.64718 15.2504C6.73621 15.3394 6.80639 15.4454 6.85354 15.5622C6.90069 15.6789 6.92385 15.8039 6.92163 15.9298C6.9194 16.0557 6.89185 16.1798 6.84061 16.2948C6.78937 16.4098 6.71549 16.5133 6.62338 16.5992L4.12338 19.0992C3.9476 19.2747 3.70932 19.3734 3.46089 19.3734C3.21245 19.3734 2.97417 19.2747 2.79839 19.0992L0.298385 16.5992C0.206276 16.5133 0.132399 16.4098 0.0811587 16.2948C0.0299188 16.1798 0.00236688 16.0557 0.000145903 15.9298C-0.00207508 15.8039 0.0210804 15.6789 0.0682317 15.5622C0.115383 15.4454 0.185564 15.3394 0.274587 15.2504C0.363611 15.1614 0.469653 15.0912 0.586388 15.044C0.703123 14.9969 0.82816 14.9737 0.954038 14.9759C1.07992 14.9782 1.20406 15.0057 1.31906 15.0569C1.43406 15.1082 1.53756 15.1821 1.62339 15.2742L2.52339 16.1742V3.43668C2.52339 3.18803 2.62216 2.94958 2.79797 2.77376C2.97379 2.59795 3.21224 2.49918 3.46089 2.49918C3.70953 2.49918 3.94798 2.59795 4.1238 2.77376C4.29961 2.94958 4.39839 3.18803 4.39839 3.43668V16.1742Z" fill="black"/>
    </svg>
    <span className='sort'>sort</span>
 </div>
 <div className="addBtn" onClick={toggleAdd}  style={{cursor:'pointer'}}>
 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 23" fill="none">
  <path d="M1.77778 10.2222C1.41574 10.2222 1.11206 10.0996 0.866726 9.85422C0.621393 9.60889 0.499153 9.30563 0.500004 8.94444V1.27778C0.500004 0.915745 0.622671 0.61206 0.868004 0.366726C1.11334 0.121393 1.4166 -0.00084743 1.77778 4.42138e-06H9.44444C9.80648 4.42138e-06 10.1102 0.122671 10.3555 0.368004C10.6008 0.613338 10.7231 0.916597 10.7222 1.27778V8.94444C10.7222 9.30648 10.5996 9.61017 10.3542 9.8555C10.1089 10.1008 9.80563 10.2231 9.44444 10.2222H1.77778ZM14.5556 10.2222C14.1935 10.2222 13.8898 10.0996 13.6445 9.85422C13.3992 9.60889 13.2769 9.30563 13.2778 8.94444V1.27778C13.2778 0.915745 13.4004 0.61206 13.6458 0.366726C13.8911 0.121393 14.1944 -0.00084743 14.5556 4.42138e-06H22.2222C22.5843 4.42138e-06 22.8879 0.122671 23.1333 0.368004C23.3786 0.613338 23.5008 0.916597 23.5 1.27778V8.94444C23.5 9.30648 23.3773 9.61017 23.132 9.8555C22.8867 10.1008 22.5834 10.2231 22.2222 10.2222H14.5556ZM1.77778 23C1.41574 23 1.11206 22.8773 0.866726 22.632C0.621393 22.3867 0.499153 22.0834 0.500004 21.7222V14.0556C0.500004 13.6935 0.622671 13.3898 0.868004 13.1445C1.11334 12.8992 1.4166 12.7769 1.77778 12.7778H9.44444C9.80648 12.7778 10.1102 12.9004 10.3555 13.1458C10.6008 13.3911 10.7231 13.6944 10.7222 14.0556V21.7222C10.7222 22.0843 10.5996 22.3879 10.3542 22.6333C10.1089 22.8786 9.80563 23.0008 9.44444 23H1.77778ZM18.3889 23C18.0268 23 17.7232 22.8773 17.4778 22.632C17.2325 22.3867 17.1103 22.0834 17.1111 21.7222V19.1667H14.5236C14.1616 19.1667 13.8634 19.044 13.6292 18.7987C13.3949 18.5533 13.2778 18.2501 13.2778 17.8889C13.2778 17.5268 13.4004 17.2232 13.6458 16.9778C13.8911 16.7325 14.1944 16.6103 14.5556 16.6111H17.1111V14.0236C17.1111 13.6616 17.2338 13.3634 17.4791 13.1292C17.7244 12.8949 18.0277 12.7778 18.3889 12.7778C18.7509 12.7778 19.0546 12.9004 19.2999 13.1458C19.5453 13.3911 19.6675 13.6944 19.6667 14.0556V16.6111H22.2542C22.6162 16.6111 22.9143 16.7338 23.1486 16.9791C23.3829 17.2244 23.5 17.5277 23.5 17.8889C23.5 18.2509 23.3773 18.5546 23.132 18.7999C22.8867 19.0453 22.5834 19.1675 22.2222 19.1667H19.6667V21.7542C19.6667 22.1162 19.544 22.4143 19.2987 22.6486C19.0533 22.8829 18.7501 23 18.3889 23ZM15.8333 2.55556V7.66667H20.9444V2.55556H15.8333ZM3.05556 2.55556V7.66667H8.16667V2.55556H3.05556ZM3.05556 15.3333V20.4444H8.16667V15.3333H3.05556Z" fill="white"/>
</svg>
<span className='add-Text'>Add</span>
 </div>
 {
  showAddPopup && (
    <Add/>
  ) 
 }
    </div>
    </div>
  )
}

export default TableNav