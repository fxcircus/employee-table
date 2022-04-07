import EmployeesData from './data'
import { Routes, Route } from 'react-router-dom'
import EmployeePage from './Pages/EmployeePage'
import HomePage from './Pages/HomePage'

export default function App() {


    return(
        <div className='app'>
            <HomePage employees={ EmployeesData } />
            <Routes>
            <Route path='/' element={<EmployeePage />}/>
                <Route path='/:name' element={<EmployeePage />}/>
            </Routes>
        </div>
    )
}