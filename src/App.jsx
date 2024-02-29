import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import ShowVadhu from './Components/showVadhu'
import AddVadhu from './Components/addVadhu'
import UpdateVadhu from './Components/updateVadhu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <nav className='d-flex justify-content-between align-items-center bg-primary text-light fixed-top p-2 '>
        <h3>Vadhu Suchak</h3>
        <form className="d-flex">
      
      </form>
        <div>
          <Link className='mx-2 text-decoration-none text-light' to="/">Show Vadhu</Link>
          <Link className='mx-2 text-decoration-none text-light' to="/add-vadhu">Add Vadhu</Link>
        </div>
      </nav>

      <Routes>
        <Route path='' element={<ShowVadhu/>} />
        <Route path='add-vadhu' element={<AddVadhu/>} />
        <Route path='update-vadhu' element={<UpdateVadhu/>} />

      </Routes>
    </>
  )
}

export default App
