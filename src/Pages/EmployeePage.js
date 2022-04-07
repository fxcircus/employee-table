import Header from '../components/Header'
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import Data from '../data'

export default function EmployeePage( { props }) {
    
    const params = useParams()
    const employeeName = params.name
    const employeeFilter = Data.filter(
        curr => curr.name === employeeName
    )

    const employee = employeeFilter[0]
    
    useEffect(() => {
        console.log(`name is ${employee}`)
    }, [])

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
            employee && employeeName ? loadEmployee() : selectPrompt()
    )
}