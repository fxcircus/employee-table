
export default function EmployeeListItem( { employee } ) {
    return (
        <label className="emp-card">
            <div className="emp-card-z1">
                <img src={employee.img} className="emp-img-sm" alt={employee.name} />
            </div>
            <div className="emp-card-z2">
                <div className="emp-name">{employee.name}</div>
                <div className="emp-plays">{employee.plays}</div>
                {/* <div className="emp-quote">{employee.quote}</div> */}
            </div>
        </label>
    )
}