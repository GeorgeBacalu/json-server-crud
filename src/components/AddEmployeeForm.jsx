import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployeeForm() {
  const [employee, setEmployee] = useState({ name: "", email: "", mobile: "", address: "", active: false });
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value, checked, type } = event.target;
    setEmployee(prevEmployee => ({ ...prevEmployee, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/employees", { method: "POST", body: JSON.stringify(employee), headers: { "Content-Type": "application/json" } })
      .then(response => { if (response.ok) navigate("/"); });
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={handleSubmit} className="container">
          <div className="card">
            <div className="card-title">
              <h2>Add Employee</h2>
            </div>
            <div className="card-body">
              <div className="row text-start">
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={employee.name} onChange={handleChange} className="form-control" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={employee.email} onChange={handleChange} className="form-control" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" id="mobile" name="mobile" value={employee.mobile} onChange={handleChange} className="form-control" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" value={employee.address} onChange={handleChange} className="form-control" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check mb-3">
                    <input type="checkbox" id="active" name="active" checked={employee.active} onChange={handleChange} className="form-check-input" />
                    <label htmlFor="active" className="form-check-label">Is Active</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-success me-2">Save</button>
                    <Link to="/" className="btn btn-secondary">Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}