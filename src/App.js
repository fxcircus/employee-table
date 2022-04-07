import EmployeesData from './data'
import { Routes, Route } from 'react-router-dom'
import EmployeePage from './Pages/EmployeePage'
import HomePage from './Pages/HomePage'
import { useState } from 'react'

export default function App() {
    const [ loader, setLoader] = useState(false)

    return(
        <div className='app'>
            <HomePage employees={ EmployeesData } loader={loader} state={setLoader}/>
            <Routes>
                <Route path='/' element={<EmployeePage loader={loader}/>}/>
                <Route path='/:name' element={<EmployeePage loader={loader}/>}/>
            </Routes>
        </div>
    )
}