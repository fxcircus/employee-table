import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import EmployeeList from '../components/EmployeeList'
import { Link } from 'react-router-dom'


export default function HomePage( { employees }) {
    return (
        <div className="home-page">
            <Header title="Employee Directory"/>
            <SearchBar />
            {/* <Link to="/2"> */}
                <EmployeeList employees={ employees }/>
            {/* </Link> */}
        </div>
    )
}