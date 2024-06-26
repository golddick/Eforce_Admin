import React,{useState, useContext, useEffect} from 'react'
import './scon.css'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import CreateOrgViolation from '../Popup/createViolation/CreateOrgUser';
import CreateViolation from '../Popup/createViolation/CreateViolation';
import { AuthContext } from '../../Context/AuthContext';
import ViolationList from '../ViolationList/ViolationList';
import ViewAndUpdateViolation from '../Popup/createViolation/ViewAndUpdateViolation';
import ViewAndUpdateUsers from '../Popup/createViolation/ViewandUpdateUsers';

function Configuration() {
  const { user } = useContext(AuthContext);
  const orgId = user.data.organizationId
  const accessToken = user.data.accessToken;

    const [isChecked, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addViolation, setAddViolation] = useState();
    const [numPerPage, setNumPerPage] = useState(50);
    const [userManagement, setUserManagement] = useState([])
    const [addUser, setAddUser] = useState()
    const [openUser, setOpenUser] = useState()
    const [updateVio, setUpdateVio] = useState ()
    const [violationId, setViolationID] = useState()
    const [parID, setParID] = useState()

    // console.log(accessToken)


    const handleCheckboxChange = (id) => {
      setChecked((prevCheckedItems) =>({
        ...prevCheckedItems,
        [id]:!prevCheckedItems[id]
      }))
    };

    const togglePopup = () => {
      setAddViolation(!addViolation);
    };
    const toggleuserPopup = () => {
      setOpenUser(!openUser);
    };

    const openAddform = () => {
      setAddUser(!addUser)
    }

    const openUpdate = (vioId, paramaterId) => {
      setUpdateVio(!updateVio)
      setViolationID(vioId)
      setParID(paramaterId)
      console.log( 'parm id',paramaterId)
      console.log( 'vio id',vioId)
    }
    
    
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
  
          try {
            const response = await axios.get(`https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${orgId}/users`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            },
              params: {
                limit: numPerPage,
                cursor: '2024-03-15T22:34:54.292Z' 
              }
            });
    
          const responseData = response.data.data; 
    
          setUserManagement(responseData);
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
      };
    
      fetchData();
    }, [accessToken]);

    const handleDeleteClick = (userId) => {
      // Display a confirmation dialog
      const isConfirmed = window.confirm("Are you sure you want to delete this user?");
      
      // If user confirms deletion, proceed with deletion
      if (isConfirmed) {
          const url = `https://project-e-force-backend-v2.onrender.com/api/v1/organizations/${orgId}/users/${userId}`;
  
          axios.delete(url, {
              headers: {
                  Authorization: `Bearer ${accessToken}`
              }
          })
          .then(response => {
              // Handle success response
              console.log(`User deleted successfully.`);
              alert(`User deleted successfully.`);
              window.location.reload();
          })
          .catch(error => {
              // Handle error response
              console.error(`Error in deleting user:`, error);
              alert(`Error in deleting user: ${error.message}`);
          });
      } else {
          // User cancelled deletion
          console.log('Deletion cancelled by user.');
      }
  };
  
  
        
  return (
    <div className='Configuration'>
        <div className="cHeader">
            <h2 className='headerText'>Settings</h2>
            <h4 className='headerSub'>Manage your system settings here </h4>
        </div>
        <div className="scTop">
            <div className="uManagement">
                <div className="topCard">
                    <span className='cardText'>User Management</span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="27" height="8" viewBox="0 0 27 8" fill="none" style={{cursor:'pointer'}}>
                    <circle cx="3.85714" cy="3.85714" r="3.85714" fill="#80BAEF"/>
                    <circle cx="13.5" cy="3.85714" r="3.85714" fill="#80BAEF"/>
                    <circle cx="23.1428" cy="3.85714" r="3.85714" fill="#80BAEF"/>
                    </svg> */}
                </div>
                <div className="userList">

                {isLoading ? (
                            <div>Loading...</div>
                          ) : error ? (
                            <div>Error: {error.message}</div>
                          ) : (
                            <>
                              {userManagement.length > 0 && userManagement.map((user, index) => (
                                <div className="_user" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 24 24" fill="none"  style={{cursor:'pointer'}}  onClick={() => handleDeleteClick(user.userId)}>
                                <path d="M10 5H14C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5ZM8.5 5C8.5 4.54037 8.59053 4.08525 8.76642 3.66061C8.94231 3.23597 9.20012 2.85013 9.52513 2.52513C9.85013 2.20012 10.236 1.94231 10.6606 1.76642C11.0852 1.59053 11.5404 1.5 12 1.5C12.4596 1.5 12.9148 1.59053 13.3394 1.76642C13.764 1.94231 14.1499 2.20012 14.4749 2.52513C14.7999 2.85013 15.0577 3.23597 15.2336 3.66061C15.4095 4.08525 15.5 4.54037 15.5 5H21.25C21.4489 5 21.6397 5.07902 21.7803 5.21967C21.921 5.36032 22 5.55109 22 5.75C22 5.94891 21.921 6.13968 21.7803 6.28033C21.6397 6.42098 21.4489 6.5 21.25 6.5H19.93L18.76 18.611C18.6702 19.539 18.238 20.4002 17.5477 21.0268C16.8573 21.6534 15.9583 22.0004 15.026 22H8.974C8.04186 22.0001 7.1431 21.653 6.45295 21.0265C5.7628 20.3999 5.33073 19.5388 5.241 18.611L4.07 6.5H2.75C2.55109 6.5 2.36032 6.42098 2.21967 6.28033C2.07902 6.13968 2 5.94891 2 5.75C2 5.55109 2.07902 5.36032 2.21967 5.21967C2.36032 5.07902 2.55109 5 2.75 5H8.5ZM10.5 9.75C10.5 9.55109 10.421 9.36032 10.2803 9.21967C10.1397 9.07902 9.94891 9 9.75 9C9.55109 9 9.36032 9.07902 9.21967 9.21967C9.07902 9.36032 9 9.55109 9 9.75V17.25C9 17.4489 9.07902 17.6397 9.21967 17.7803C9.36032 17.921 9.55109 18 9.75 18C9.94891 18 10.1397 17.921 10.2803 17.7803C10.421 17.6397 10.5 17.4489 10.5 17.25V9.75ZM14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V17.25C15 17.4489 14.921 17.6397 14.7803 17.7803C14.6397 17.921 14.4489 18 14.25 18C14.0511 18 13.8603 17.921 13.7197 17.7803C13.579 17.6397 13.5 17.4489 13.5 17.25V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9ZM6.734 18.467C6.78794 19.0236 7.04724 19.5403 7.46137 19.9161C7.87549 20.292 8.41475 20.5001 8.974 20.5H15.026C15.5853 20.5001 16.1245 20.292 16.5386 19.9161C16.9528 19.5403 17.2121 19.0236 17.266 18.467L18.424 6.5H5.576L6.734 18.467Z" fill="#EC1919"/>
                                </svg>
                                <div className="user_">
                                    <span className='userName_'>{user.user.email}</span>
                                    <span className='UserRole'>{user.role}</span>
                                </div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 16" fill="none"  style={{cursor:'pointer'}}>
                                <path d="M0.777724 15.57C0.675724 15.5713 0.574593 15.5512 0.480833 15.511C0.387074 15.4708 0.302761 15.4114 0.233317 15.3367C-0.0777724 15.0256 -0.0777724 14.5434 0.233317 14.2323L6.68843 7.77724L0.233317 1.33768C-0.0777724 1.02659 -0.0777724 0.544407 0.233317 0.233317C0.544407 -0.0777724 1.0266 -0.0777724 1.33768 0.233317L8.32165 7.24838C8.63274 7.55947 8.63274 8.04166 8.32165 8.35275L1.32213 15.3367C1.16659 15.4923 0.964378 15.57 0.777724 15.57Z" fill="black"/>
                                </svg> */}
                                </div>
                              ))}
                            </>
                          )}
                </div>
                <div className="addAccount"  style={{cursor:'pointer'}} onClick={openAddform}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                <path d="M14 0C10.3009 0.0448832 6.76597 1.53429 4.15013 4.15013C1.53429 6.76597 0.0448832 10.3009 0 14C0.0448832 17.6991 1.53429 21.234 4.15013 23.8499C6.76597 26.4657 10.3009 27.9551 14 28C17.6991 27.9551 21.234 26.4657 23.8499 23.8499C26.4657 21.234 27.9551 17.6991 28 14C27.9551 10.3009 26.4657 6.76597 23.8499 4.15013C21.234 1.53429 17.6991 0.0448832 14 0ZM22 15H15V22H13V15H6V13H13V6H15V13H22V15Z" fill="#047DD6"/>
                </svg>
                <span className='addText'>Add Account</span>
                </div>
            </div>
            <div className="pConfiguration">
            <div className="topCard">
                    <span className='cardText'>Parameter Configurations</span>
                   <div className="selectSpeed" onClick={togglePopup}>
                    <span className='speedText'>Create </span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 15 9" fill="none"  style={{cursor:'pointer'}}>
                    <path d="M7.49251 8.25674C7.39424 8.25794 7.29681 8.23856 7.20649 8.19985C7.11616 8.16114 7.03493 8.10395 6.96803 8.03197L0.224775 1.28871C-0.0749251 0.989011 -0.0749251 0.524476 0.224775 0.224775C0.524476 -0.0749251 0.989011 -0.0749251 1.28871 0.224775L7.50749 6.44356L13.7113 0.23976C14.011 -0.0599401 14.4755 -0.0599401 14.7752 0.23976C15.0749 0.539461 15.0749 1.004 14.7752 1.3037L8.03197 8.04695C7.88212 8.1968 7.68731 8.27173 7.50749 8.27173L7.49251 8.25674Z" fill="#047DD6"/>
                    </svg> */}
                   </div>
                </div>
                <ViolationList open={openUpdate} />
            </div>
        </div>
        <div className="scBottom">
        <span className='cardText'>Access Control</span>
        <div className="accessUsers">
        <table className='accessTable'>
              <thead>  
                <tr className='accessHead'>
                        <th className='HeadText'></th>
                      <th className='HeadText'>Name</th>
                      <th className='HeadText'>User Role</th>
                      <th className='HeadText'>Actions</th>
                  </tr>
                  </thead>
    
                          {isLoading ? (
                            <div>Loading...</div>
                          ) : error ? (
                            <div>Error: {error.message}</div>
                          ) : (
                            <>
                              {userManagement.length > 0 && userManagement.map((user, index) => (
                                <tbody>
                                     <tr className='accessBody' >
                                   <td className='BodyText' key={index}>
                                   <input type="checkbox" checked={isChecked[index.id]} onChange={() => handleCheckboxChange (index.id)} className='checkBox'/>
                                   </td>
                                     <td className='BodyText'>
                                       <div className="accessName">
                                       <span className='accessMail'>{user.user.email}</span>
                                       </div>
                                       </td>
                                     <td className='BodyText'>
                                      <div className="roleBox">
                                      <div className={`userRole ${getUserRoleStyle(user.role)}`}>{user.role}</div>
                                      </div>
                                     </td>
                                     <td className='BodyText'>
                                       <div className="accessAction">
                                           <div className="leftAction" onClick={()=> toggleuserPopup(user.userId)}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 20 21" fill="none">
                                           <path fillRule="evenodd" clipRule="evenodd" d="M10 0.341797C10.2652 0.341797 10.5196 0.448026 10.7071 0.637116C10.8946 0.826205 11 1.08267 11 1.35008V2.42087C11.7238 2.5115 12.4318 2.70218 13.104 2.98753L13.634 2.06193C13.6992 1.94633 13.7864 1.84488 13.8906 1.76341C13.9949 1.68194 14.114 1.62206 14.2413 1.58722C14.3686 1.55238 14.5014 1.54326 14.6322 1.5604C14.763 1.57754 14.8891 1.6206 15.0033 1.68708C15.1175 1.75357 15.2176 1.84218 15.2977 1.94781C15.3778 2.05344 15.4364 2.174 15.4701 2.30256C15.5038 2.43111 15.512 2.56512 15.4941 2.69687C15.4762 2.82861 15.4327 2.95549 15.366 3.07021L14.835 3.99783C15.415 4.44147 15.933 4.96477 16.375 5.55058L17.295 5.01417C17.4088 4.94692 17.5346 4.90303 17.6653 4.88502C17.7959 4.867 17.9288 4.87523 18.0563 4.90921C18.1838 4.9432 18.3034 5.00228 18.4082 5.08305C18.5129 5.16383 18.6008 5.26469 18.6668 5.37985C18.7327 5.49501 18.7754 5.62218 18.7924 5.75404C18.8094 5.8859 18.8004 6.01985 18.7658 6.14818C18.7313 6.27651 18.6719 6.39668 18.5911 6.50177C18.5103 6.60686 18.4096 6.6948 18.295 6.76052L17.375 7.29491C17.654 7.96138 17.846 8.67323 17.938 9.41633H19C19.2652 9.41633 19.5196 9.52256 19.7071 9.71165C19.8946 9.90074 20 10.1572 20 10.4246C20 10.692 19.8946 10.9485 19.7071 11.1376C19.5196 11.3267 19.2652 11.4329 19 11.4329H17.938C17.8481 12.1627 17.659 12.8765 17.376 13.5543L18.294 14.0887C18.4086 14.1544 18.5093 14.2424 18.5901 14.3475C18.6709 14.4526 18.7303 14.5727 18.7648 14.701C18.7994 14.8294 18.8084 14.9633 18.7914 15.0952C18.7744 15.2271 18.7317 15.3542 18.6658 15.4694C18.5998 15.5845 18.5119 15.6854 18.4072 15.7662C18.3024 15.8469 18.1828 15.906 18.0553 15.94C17.9278 15.974 17.7949 15.9822 17.6643 15.9642C17.5336 15.9462 17.4078 15.9023 17.294 15.8351L16.374 15.2997C15.9329 15.8852 15.4148 16.4076 14.834 16.8524L15.366 17.78C15.4327 17.8947 15.4762 18.0216 15.4941 18.1534C15.512 18.2851 15.5038 18.4191 15.4701 18.5477C15.4364 18.6762 15.3778 18.7968 15.2977 18.9024C15.2176 19.0081 15.1175 19.0967 15.0033 19.1632C14.8891 19.2296 14.763 19.2727 14.6322 19.2898C14.5014 19.307 14.3686 19.2979 14.2413 19.263C14.114 19.2282 13.9949 19.1683 13.8906 19.0868C13.7864 19.0054 13.6992 18.9039 13.634 18.7883L13.104 17.8607C12.4319 18.1466 11.7239 18.3376 11 18.4284V19.4991C11 19.7666 10.8946 20.023 10.7071 20.2121C10.5196 20.4012 10.2652 20.5074 10 20.5074C9.73478 20.5074 9.48043 20.4012 9.29289 20.2121C9.10536 20.023 9 19.7666 9 19.4991V18.4284C8.2762 18.3377 7.56822 18.147 6.896 17.8617L6.366 18.7873C6.30082 18.9029 6.2136 19.0044 6.10937 19.0858C6.00515 19.1673 5.88597 19.2272 5.75869 19.262C5.63142 19.2969 5.49857 19.306 5.36779 19.2888C5.23701 19.2717 5.11088 19.2286 4.99667 19.1621C4.88246 19.0957 4.78242 19.007 4.70231 18.9014C4.62221 18.7958 4.56361 18.6752 4.5299 18.5467C4.49619 18.4181 4.48804 18.2841 4.5059 18.1524C4.52377 18.0206 4.5673 17.8937 4.634 17.779L5.165 16.8514C4.58424 16.4066 4.06617 15.8842 3.625 15.2986L2.705 15.8351C2.59123 15.9023 2.46539 15.9462 2.33472 15.9642C2.20406 15.9822 2.07115 15.974 1.94365 15.94C1.81615 15.906 1.69658 15.8469 1.59182 15.7662C1.48706 15.6854 1.39918 15.5845 1.33324 15.4694C1.2673 15.3542 1.2246 15.2271 1.2076 15.0952C1.1906 14.9633 1.19964 14.8294 1.23419 14.701C1.26874 14.5727 1.32813 14.4526 1.40893 14.3475C1.48973 14.2424 1.59035 14.1544 1.705 14.0887L2.625 13.5543C2.34132 12.8766 2.15154 12.1628 2.061 11.4329H1C0.734784 11.4329 0.48043 11.3267 0.292893 11.1376C0.105357 10.9485 0 10.692 0 10.4246C0 10.1572 0.105357 9.90074 0.292893 9.71165C0.48043 9.52256 0.734784 9.41633 1 9.41633H2.062C2.15188 8.68654 2.34099 7.97269 2.624 7.29491L1.706 6.76052C1.47819 6.62586 1.31246 6.40582 1.24496 6.14841C1.17747 5.891 1.21369 5.61712 1.34573 5.38654C1.47776 5.15596 1.69489 4.98739 1.94974 4.91763C2.20458 4.84787 2.47644 4.88258 2.706 5.01417L3.626 5.54957C4.066 4.96477 4.585 4.44248 5.166 3.99682L4.634 3.0692C4.50348 2.83774 4.46906 2.56362 4.53825 2.30667C4.60744 2.04972 4.77462 1.83079 5.00331 1.69766C5.23199 1.56453 5.50362 1.52801 5.75892 1.59606C6.01421 1.66412 6.23245 1.83122 6.366 2.06092L6.896 2.98854C7.56812 2.70249 8.2761 2.51114 9 2.41987V1.35008C9 1.08267 9.10536 0.826205 9.29289 0.637116C9.48043 0.448026 9.73478 0.341797 10 0.341797ZM10 11.5892L5.376 14.2813C5.82331 14.8244 6.36059 15.2853 6.964 15.6435L7.037 15.6868C7.93993 16.2047 8.96122 16.4761 10 16.4743C10.97 16.4743 11.886 16.2424 12.697 15.83L13.037 15.6435C13.6405 15.2854 14.1775 14.8241 14.624 14.2803L10 11.5892ZM9 4.45861C8.40739 4.55881 7.83322 4.74884 7.297 5.02224L7.037 5.1634L6.964 5.20575C6.16967 5.6769 5.49301 6.32536 4.986 7.10132L4.824 7.36347L4.782 7.43708C4.2681 8.34741 3.99856 9.37714 4 10.4246C4 11.0598 4.097 11.6749 4.278 12.2496L4.375 12.5349L9 9.84284V4.45861ZM11 4.45861V9.84284L15.625 12.5349C15.8739 11.8597 16.0009 11.145 16 10.4246C16 9.44658 15.77 8.52299 15.361 7.70528L15.218 7.43708L15.186 7.38162L15.176 7.36347C14.7087 6.56258 14.0656 5.88032 13.296 5.36909L12.963 5.16239C12.4436 4.86439 11.8826 4.64685 11.299 4.51709L11 4.45861Z" fill="black"/>
                                           </svg>
                                           <span className='actionText'>Modify Roles</span>
                                           </div>
                                           <div className="rightAction" onClick={() => handleDeleteClick(user.userId)}> 
                                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                           <path d="M9 0.366211C7.21997 0.366211 5.47991 0.898423 3.99987 1.89555C2.51983 2.89267 1.36628 4.30992 0.685088 5.96807C0.00389953 7.62622 -0.17433 9.45081 0.172936 11.2111C0.520203 12.9714 1.37737 14.5883 2.63604 15.8574C3.89471 17.1265 5.49836 17.9908 7.24419 18.3409C8.99002 18.6911 10.7996 18.5114 12.4442 17.8245C14.0887 17.1377 15.4943 15.9746 16.4832 14.4823C17.4722 12.99 18 11.2355 18 9.44074C18 7.03403 17.0518 4.72589 15.364 3.02408C13.6761 1.32228 11.387 0.366211 9 0.366211ZM13.5 12.9004C13.6492 13.0508 13.733 13.2548 13.733 13.4676C13.733 13.6803 13.6492 13.8843 13.5 14.0347C13.3508 14.1851 13.1485 14.2697 12.9375 14.2697C12.7265 14.2697 12.5242 14.1851 12.375 14.0347L9 10.6318L5.625 14.0461C5.55113 14.1206 5.46344 14.1796 5.36693 14.2199C5.27041 14.2602 5.16697 14.281 5.0625 14.281C4.95804 14.281 4.85459 14.2602 4.75808 14.2199C4.66157 14.1796 4.57387 14.1206 4.5 14.0461C4.42613 13.9716 4.36754 13.8832 4.32756 13.7859C4.28758 13.6885 4.26701 13.5842 4.26701 13.4789C4.26701 13.3736 4.28758 13.2693 4.32756 13.172C4.36754 13.0747 4.42613 12.9862 4.5 12.9118L7.875 9.48612L4.40438 5.95839C4.25519 5.80797 4.17138 5.60396 4.17138 5.39123C4.17138 5.17851 4.25519 4.97449 4.40438 4.82408C4.55356 4.67366 4.7559 4.58915 4.96688 4.58915C5.17786 4.58915 5.38019 4.67366 5.52938 4.82408L9 8.36314L12.4706 4.86378C12.5445 4.7893 12.6322 4.73022 12.7287 4.68991C12.8252 4.6496 12.9287 4.62885 13.0331 4.62885C13.1376 4.62885 13.241 4.6496 13.3376 4.68991C13.4341 4.73022 13.5218 4.7893 13.5956 4.86378C13.6695 4.93826 13.7281 5.02668 13.7681 5.12399C13.808 5.2213 13.8286 5.3256 13.8286 5.43093C13.8286 5.53627 13.808 5.64057 13.7681 5.73788C13.7281 5.83519 13.6695 5.92361 13.5956 5.99809L10.125 9.48612L13.5 12.9004Z" fill="black"/>
                                           </svg>
                                           <span className='actionText'>Delete User</span>
                                           </div>
                                       </div>
                                     </td>
                                   </tr>
                                </tbody>
                              ))}
                            </>
                          )}
    </table>
        </div>
        </div>

        {addViolation && <div className='AddOrgForm' > <CreateViolation close={togglePopup} /></div>}
        {addUser && <div className='AddOrgForm' > <CreateOrgViolation close={openAddform} /></div>}
        {updateVio && <div className='AddOrgForm' > <ViewAndUpdateViolation close={openUpdate}  vioId={violationId} parID={parID}/></div>}
        {openUser && <div className='' > <ViewAndUpdateUsers close={toggleuserPopup}  userId={user.userId} /></div>}

    </div>
  )
}



function getUserRoleStyle(role) {
  switch (role) {
    case 'ADMIN':
      return 'super_AdminRole';
    case 'MANAGER':
      return 'ManagerRole';
    case 'GUEST':
      return 'AuditorRole';
    default:
      return 'defaultStyle';
  }
}

export default Configuration




