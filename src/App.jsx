import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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

function App() {


  return (
    <Router>
    <> 
    <Routes>
    <Route path="/management" element={<System />} />
    <Route path="/Officer-Profile" element={<OfficerProfile/>} />
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
    </Routes>
    </>
    </Router>
  )
}

export default App
