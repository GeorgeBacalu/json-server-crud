import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Employee() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/employees/${id}`)
      .then(response => response.json())
      .then(employeeData => setEmployee(employeeData));
  }, [id]);

  return employee && (
    <div className="container">
      <div className="card p-2 text-start">
        <p>Name: {employee.name}</p>
        <p>Email: {employee.email}</p>
        <p>Mobile: {employee.mobile}</p>
        <p>Address: {employee.address}</p>
        <div className="col-lg-12">
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </div>
    </div>
  )
}