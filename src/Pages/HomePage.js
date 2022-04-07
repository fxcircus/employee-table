import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import EmployeeList from '../components/EmployeeList'
import { Link } from 'react-router-dom'


export default function HomePage( { employees, loader, state }) {
    return (
        <div className="home-page">
            <Header title="Employee Directory"/>
            <SearchBar />
            <EmployeeList employees={ employees } loader={loader} state={state}/>
        </div>
    )
}