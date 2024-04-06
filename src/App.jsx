import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./components/Employees";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EditEmployeeForm from "./components/EditEmployeeForm";
import Employee from "./components/Employee";

export default function App() {
  return (
    <main className="text-center mt-4">
      <h1>React JS CRUD Operations!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="employee/add" element={<AddEmployeeForm />} />
          <Route path="employee/edit/:id" element={<EditEmployeeForm />} />
          <Route path="employee/:id" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}