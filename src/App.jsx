import { useContext, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import System from './Pages/systemManagement/System'
import OfficerProfile from './Pages/OfficerProfile/OfficerProfile'
import RegisterOfficer from './Pages/Add/RegisterOfficer'
import RegisterDriver from './Pages/Add/RegisterDriver'
import Notification from './Pages/Notification/Notification'
import DriversManagement from './Pages/systemManagement/Drivers'
import VehicleManagement from './Pages/systemManagement/Vehicle' 
import DriverInfo from './Pages/systemManagement/Driver_Vehicle/DriverInfo'
import VehicleInfo from './Pages/systemManagement/Driver_Vehicle/VehicleInfo'
import Violation from './Pages/systemManagement/Violation'
import Transaction from './Pages/systemManagement/Transaction'
import ViolationInfo from './Pages/systemManagement/ViolationInfo/ViolationInfo'
import TransactionInfo from './Pages/systemManagement/ViolationInfo/TransactionInfo'
import SystemConfiguration from './Pages/systemConfiguration/SystemConfiguration'
import VehicleLot from './Pages/Vehicle-Lot/VehicleLot'
import VDetails from './Pages/Vehicle-Lot/VDetail/VDetails'
import Login from './Pages/Auth/Login'
import ForgetPassword from './Pages/Auth/ForgetPass'
import OfficerReport from './Pages/Analytics/OfficerReport'
import FinancialReport from './Pages/Analytics/FinancialReport'
import Signup from './Pages/Auth/Signup'
import EForceAdminLogin from './Pages/Auth/EFORCEAdminLogin'
import Organization from './Pages/Organizaions/Organization'
import ErrorPage from './component/Error Page/ErrorPage'
import OrgProfile from './Pages/Orgprofile/Orgprofile'
import { AuthContext } from './Context/AuthContext'


function App() {

const {user} = useContext(AuthContext)
console.log( user?.data.organizationId)
  return (
<Router>
<>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/Forget-Password" element={<ForgetPassword />} />
  <Route path="/EforceLogin" element={ user? <Navigate to="/Organization" replace={true} /> :  <EForceAdminLogin />} />
  

  {/* <Route path="/"element={ user && user.organizationId ? ( <System /> ) : ( <Navigate to="/Organization-Login" replace={true} />) }/> */}
  <Route path="/"element={ user ?( <System /> ) : ( <Navigate to="/Organization-Login" replace={true} />) }/>

  <Route path="/Organization-Login" element={user? <Navigate to="/" replace={true} /> :  <Login/>} />


  <Route path="/Officer-Profile" element=
    {
    user? <OfficerProfile/> : <Navigate to="/EforceLogin" replace={true}/>
  } 
    />
    <Route path="/Register-Officer" element={<RegisterOfficer/>} />
    <Route path="/Register-Driver" element={<RegisterDriver/>} />
    <Route path="/notification" element={<Notification/>} />
    <Route path="/Drivers-Management" element={<DriversManagement/>} />
    <Route path="/Vehicles-Management" element={<VehicleManagement/>} />
    <Route path="/Drive-Info" element={<DriverInfo/>} />
    <Route path="/Vehicle-Info" element={<VehicleInfo/>} />
    <Route path="/Violation-Management" element={<Violation/>} />
    <Route path="/Transaction-Management" element={<Transaction/>} />
    <Route path="/Violation-Info" element={<ViolationInfo/>} />
    <Route path="/Transaction-Info" element={<TransactionInfo/>} />
    <Route path="/Configuration" element={<SystemConfiguration/>} />
    <Route path="/vehicle" element={<VehicleLot/>} />
    <Route path="/vehicle-Details" element={<VDetails/>} />
    <Route path="/Officer-Report" element={<OfficerReport/>} />
    <Route path="/Financial-Report" element={<FinancialReport/>} /> 
    <Route path="/Organization-Profile/:orgId" element={<OrgProfile/>} /> 
   
    <Route path="/Organization" element={ user? <Organization/> : <Navigate to="/EforceLogin" replace={true} />} />

    {/* <Route
  path="/Organization"
  element={user && user.accessToken ? <Organization /> : <Navigate to="/EforceLogin" replace={true} />}
/> */}


    <Route path="*" element={<ErrorPage />} />
  </Routes>
</>
</Router>
  )
}

export default App




// {
//   //Only accessAble if user is logged in
//     user?.organizationId ? (
//       // Routes available for users with organization id
//       <>
//       <Route path="/" element={<System />} />
//       <Route path="/Officer-Profile" element={<OfficerProfile />} />
//       <Route path="/Register-Officer" element={<RegisterOfficer />} />
//       <Route path="/Register-Driver" element={<RegisterDriver />} />
//       <Route path="/notification" element={<Notification />} />
//       <Route path="/Drivers-Management" element={<DriversManagement />} />
//       <Route path="/Vehicles-Management" element={<VehicleManagement />} />
//       <Route path="/Drive-Info" element={<DriverInfo />} />
//       <Route path="/Vehicle-Info" element={<VehicleInfo />} />
//       <Route path="/Violation-Management" element={<Violation />} />
//       <Route path="/Transaction-Management" element={<Transaction />} />
//       <Route path="/Violation-Info" element={<ViolationInfo />} />
//       <Route path="/Transaction-Info" element={<TransactionInfo />} />
//       <Route path="/Configuration" element={<SystemConfiguration />} />
//       <Route path="/vehicle" element={<VehicleLot />} />
//       <Route path="/vehicle-Details" element={<VDetails />} />
//       <Route path="/Officer-Report" element={<OfficerReport />} />
//       <Route path="/Financial-Report" element={<FinancialReport />} />
//     </>
//     ) : (
//       // Routes available for users without  organization id
//       <>
//         <Route
//           path="/EforceLogin"
//           element={
//             user ? <Navigate to="/Organization" replace={true} /> : <EForceAdminLogin />
//           }
//         />
//         <Route path="/Organization" element={<Organization />} />
//       </>
//     )

//   }