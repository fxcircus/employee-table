import EmployeeListItem from './EmployeeListItem'
import { Link, useLinkClickHandler } from 'react-router-dom'


export default function EmployeeList( { employees, loader, state }) {
    
    return (
        <div className="employee-list">
            {employees.map(employee => {
                return (
                    <Link to={employee.name} onClick={() => {state(!loader)}}>
                        <EmployeeListItem employee={ employee } loader={loader}/>
                    </Link>
                )
            })}
        </div>
    )
}