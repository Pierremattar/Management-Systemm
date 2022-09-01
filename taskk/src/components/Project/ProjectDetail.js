import {
    Button,
    TextField,
    AppBar,Toolbar, Typography
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import Col from 'react-bootstrap/Col';
  import {Link} from "react-router-dom";
  import { NavLink } from "react-router-dom";
  import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
  
  import FormControl from '@mui/material/FormControl';
  import InputLabel from '@mui/material/InputLabel';
  import  Select,  { SelectChangeEvent } from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';

  
  const ProjectDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/projects/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.project));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/projects/${id}`, {
          name: String(inputs.name),
          description: String(inputs.description),
          employee_id: String(inputs.employee_id),
          price: Number(inputs.price),
          image: String(inputs.image)
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/projects"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const [employeer, SetEmployeer] = useState();
    const URL = "http://localhost:5000/employees";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
useEffect(() => {
  fetchHandler().then((data) => SetEmployeer(data.employees));
}, []);

    return (
     
      <div>
         <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
         <Toolbar>
          <NavLink to="/projects" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
        </Toolbar>
         </AppBar>

        <Col xs={6} md={4} className="mx-auto p-4">
        {inputs && (
          <form onSubmit={handleSubmit}>
            
              <h5>Name</h5>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                name="name"
              />
              <h5>Description</h5>
              <TextField
                value={inputs.description}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                name="description"
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
           <h5>Cost</h5>
              <TextField
                value={inputs.price}
                onChange={handleChange}
                type="number"
                fullWidth
                variant="outlined"
                name="price"
              />
             <FormControl sx={{ m: 1, minWidth: 200 }} className="f2" >

         <InputLabel id="demo-simple-select-autowidth-label">Employee</InputLabel>
         <Select
           labelId="demo-simple-select-autowidth-label"
           id="demo-simple-select-autowidth"
           value={inputs.employee_id}
           onChange={handleChange}
           autoWidth
           label="Patient"
           name="employee_id"
         >
           {employeer && employeer.map((user, index)=> 
          <MenuItem value={(user._id)}>
            {user.name} {user.lastName}
            </MenuItem>
            )
            }
          
          </Select>
       </FormControl>
      <div>
              <Button variant="contained" type="submit" >
                Update Project
              </Button>
      </div>
              <div><Link to="/projects" className="colr" ><b><u>Go Back!</u></b></Link></div>
          </form>
        )}
        </ Col>
      </div>
    );
  };
  
  export default ProjectDetail;