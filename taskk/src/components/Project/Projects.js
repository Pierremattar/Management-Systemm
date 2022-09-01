import React, { useEffect, useState } from "react";
import Header1 from "../Header1";
import "../Employee/Employee.css";
import axios from "axios";
import Project from "./Project";


const Projects = () => {

const URL = "http://localhost:5000/projects";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

  const [projects, setProjects] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setProjects(data.projects));
  }, []);
  return (
    
    <div>
      <header>
        <Header1 />
      </header>
      <div  class="col row  g-5 ">
        {projects && 
          projects.map((project, i) => (
            <div  className="CARD">
              <div class="row cols-md-3 g-4">
              <Project project={project} />
            </div>
           </div>
          ))}
       </div>
    </div>
  );
};

export default Projects;