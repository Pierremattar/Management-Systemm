import React, { useEffect, useState } from "react";
import Header1 from "../Header1";
import "../Employee/Employee.css";
import axios from "axios";
import Employee from "./Employee";


const URL = "http://localhost:5000/employees";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Employees = () => {
  const [employees, setEmployees] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setEmployees(data.employees));
  }, []);
  return (
    <div>
      <header>
        <Header1 />
      </header>
      <div  class="col row  g-5 ">
        {employees && 
          employees.map((employee, i) => (
            <div  className="CARD">
              <div class="row cols-md-3 g-4">
              <Employee employee={employee} />
            </div>
           </div>
          ))}
       </div>
    </div>
  );
};

export default Employees;