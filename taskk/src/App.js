import React from 'react'
import { Route, Routes} from 'react-router-dom'
import AddEmployee from './components/AddEmployee';
import EmployeeDetail from './components/Employee/EmployeeDetail';
import Employees from './components/Employee/Employees';
import Login from './Pages/Login';
import Register from './Pages/Register';
import EmployeeByDetail from './components/Employee/EmployeeByDetails';
import Projects from './components/Project/Projects';
import ProjectDetail from './components/Project/ProjectDetail';
import AddProject from './components/AddProject';
import ProjectByDetail from './components/Project/ProjectByDetails';
import ProjectsEmployee from './components/Project/ProjectsEmployee';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" exact  element={<Login />}  />
				<Route path="/register"  element={<Register />} />
				<Route path="/addEmployee" element={localStorage.getItem("token") != null ? <AddEmployee /> : <Login />}/>
				<Route path="/employees/:id" element={localStorage.getItem("token") != null ? <EmployeeDetail /> : <Login />}/>
				<Route path="/employeeDetail/:id" element={localStorage.getItem("token") != null ? <EmployeeByDetail /> : <Login />}/>
     		   <Route path="/employees" element={localStorage.getItem("token") != null ? <Employees /> : <Login />}/>
				
				<Route path="/projects" element={localStorage.getItem("token") != null ? <Projects /> : <Login />}/>
				<Route path="/addProject" element={localStorage.getItem("token") != null ? <AddProject /> : <Login />}/>
				<Route path="/projects/:id" element={localStorage.getItem("token") != null ? <ProjectDetail /> : <Login />}/>
				<Route path="/projectDetail/:id" element={localStorage.getItem("token") != null ? <ProjectByDetail /> : <Login />}/>
				<Route path="/projectEmployee/:employee_id" element={localStorage.getItem("token") != null ? <ProjectsEmployee/> : <Login />}/>
			</Routes>
		</div>
	)
}

export default App