import {
    Button,
    TextField,
    AppBar,Toolbar, Typography
  } from "@mui/material";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { NavLink } from "react-router-dom";
  import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
  import {Link} from "react-router-dom";
  import Col from 'react-bootstrap/Col';
  
  
  const AddEmployee= () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      lastName:"",
      description: "",
      phoneNumber: "",
      image: "",
    });
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/employees", {
          name: String(inputs.name),
          description: String(inputs.description),
          lastName: String(inputs.lastName),
          phoneNumber: Number(inputs.phoneNumber),
          image: String(inputs.image),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/employees"));
    };
  
    return (
      <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
      <Toolbar>
       <NavLink to="/Employees" style={{ color: "white" }}>
         <Typography>
           <LibraryBooksOutlinedIcon />
         </Typography>
       </NavLink>
     </Toolbar>
      </AppBar>
      <Col xs={6} md={4} className="mx-auto p-4">
      <form onSubmit={handleSubmit}>
           <h5>Name</h5>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            name="name"
            required
          />
            <h5>LastName</h5>
              <TextField
                value={inputs.lastName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                name="lastName"
              />
            <h5>Description</h5>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            name="description"
            required
          />
           <h5>Phone Number</h5>
              <TextField
                value={inputs.phoneNumber}
                onChange={handleChange}
                type="number"
                fullWidth
                variant="outlined"
                name="phoneNumber"
              />
           <h5>Image</h5>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            name="image"
            required
          />
          <Button variant="contained" type="submit">
            Add Employee
          </Button>
          <div><Link to="/employees" className="colr" ><b><u>Go Back!</u></b></Link></div>
      </form>
      </ Col>
      </div>
    );
  };
  
  export default AddEmployee;