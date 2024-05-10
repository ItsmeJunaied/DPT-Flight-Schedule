import './App.css'

import Navbar from './Components/Navbar';
import MasterPrice from './Components/MasterPrice';
import SearchFilter from './SearchFilter';
import FlightScheduleForm from './FlightScheduleForm';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <MasterPrice></MasterPrice>
      <SearchFilter></SearchFilter>
      <FlightScheduleForm></FlightScheduleForm>
    </>
  )
}

export default App
