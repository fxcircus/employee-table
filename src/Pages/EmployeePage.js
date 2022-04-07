import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Data from '../data'


export default function EmployeePage( { loader }) {
    const [employee, setEmployee] = useState({})
    const { name } = useParams()
    // const employeeName = params.name
    
    
    
    useEffect(() => {
        const employeeFilter = Data.filter(
            curr => curr.name === name
        )
        setEmployee(employeeFilter[0])
        console.log(`name is ${name}`)
    }, [loader])

    const loadEmployee = () => {
        return (
            <div className="employee-page">
                <Header title="< Employee"/>
                <div className='employee-area row'>
                    <div className="main-first-row row">
                        <img src={employee.img} className="emp-img-lg" alt={employee.name} />
                        <div className='inner-first-row'>
                            <div className="emp-name">{employee.name}</div>
                            <div className="emp-plays">{employee.plays}</div>
                        </div>
                    </div>
                    <div className='employee-other-atts'>
                    <h3>I Sang on:</h3>
                        {employee.songs.map(song => {
                            return(
                                <div className='row'>
                                    {song}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    const selectPrompt = () => {
        return (
            <div className='row'>
                <h1>Click on an<br/>employee from<br/>the list</h1>
            </div>
        )
    }

    return (
            employee ? loadEmployee() : selectPrompt()
    )
}