import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(response => response.json())
      .then(employeesData => setEmployees(employeesData));
  }, []);

  const handleDelete = id => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`http://localhost:3000/employees/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(() => setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id)));
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employees</h2>
        </div>
        <div className="card-body">
          <div className="text-start mb-2">
            <Link to="employee/add" className="btn btn-primary">Add</Link>
          </div>
          {employees.length === 0 ? <h1 className="fw-bold">There are no employees!</h1> : (
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Mobile</td>
                  <td>Address</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.mobile}</td>
                    <td>{employee.address}</td>
                    <td>
                      <a onClick={() => navigate(`employee/edit/${employee.id}`)} className="btn btn-success me-2">Edit</a>
                      <a onClick={() => navigate(`employee/${employee.id}`)} className="btn btn-info me-2">Details</a>
                      <a onClick={() => handleDelete(employee.id)} className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}