import React, { useState } from "react";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
import {Nav,Container,Navbar} from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import {Tab, Tabs} from "@mui/material";

const Header1 = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  function  logOut(){
    localStorage.removeItem('token');
    navigate('/')
    window.location.reload(false);
  }
  return (
    <div>
      <header>
      <Navbar  style={{ backgroundColor: "#232F3D" }} position="sticky" expand="lg" >
  <Container fluid >
    <Navbar.Brand style={{color: 'blue'}}> <LibraryBooksOutlinedIcon /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" >
      <Nav
         className="ml-auto"
        navbarScroll
      >
         <Tabs 
            sx={{ ml: "auto" }}
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
        <Tab LinkComponent={NavLink} to="/addEmployee" label="Add Employee" textColor="white" style={{color: 'blue'}}/>
            <Tab LinkComponent={NavLink} to="/Employees" label="All Employees" textColor="white" style={{color: 'blue'}}/>
            <Tab LinkComponent={NavLink} to="/addProject" label="Add Project" textColor="white" style={{color: 'blue'}}/>
            <Tab LinkComponent={NavLink} to="/projects" label="All Projects" textColor="white" style={{color: 'blue'}}/>
         </Tabs>
      </Nav>
      <Nav.Link  onClick={ logOut}  >
        Logout
        </Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </header>
      
    </div>
  );
};

export default Header1;