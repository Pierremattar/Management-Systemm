import React, { useEffect, useState } from "react";
import Header1 from "../Header1";
import "../Employee/Employee.css";
import axios from "axios";
import {useParams } from "react-router-dom";
import Project from "./Project";


const ProjectsEmployee = () => {
    const [inputs, setInputs] = useState([]);
    const employee_id = useParams().employee_id;
    useEffect(() => {
        const fetchHandler = async () => {
          await axios
            .get(`http://localhost:5000/projects/projectEmployee/${employee_id}`)
            .then((res) =>   res.data)
            .then((data) =>
             setInputs(data.project1)
             );
             
        };
        fetchHandler();
      }, [employee_id]);

  return (
    <div>
      <header>
        <Header1 />
      </header>
      <div  class="col row  g-5 ">
      {inputs && inputs.map((project, i) => (
            <div  className="CARD">
              <div class="row cols-md-3 g-4">
              <Project project={project} />
            </div>
           </div>
          ))
        }
        </div>
    </div>
  );
};

export default ProjectsEmployee;