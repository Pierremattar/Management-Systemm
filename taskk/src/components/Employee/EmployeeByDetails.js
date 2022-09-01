import React, { useEffect, useState } from "react";
import Header1 from "../Header1";
import "../Employee/Employee.css";
import axios from "axios";
import {useParams } from "react-router-dom";
import Grid from '@mui/material/Grid'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";



const EmployeeByDetail = () => {
    const [inputs, setInputs] = useState([]);
    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
          await axios
            .get(`http://localhost:5000/employees/${id}`)
            .then((res) => res.data)
            .then((data) =>
             setInputs(data.employee));
        };
        fetchHandler();
      }, [id]);

  return (
    <div>
      <header>
        <Header1 />
      </header>
      {inputs && (
      <div  class="col row  g-5 ">
      <Grid spacing={2} xs={3} md={3}>
    <div class="card">
    <img src={inputs.image} alt=""  className="siz" />
      <div class="card-body">
      <h5 class="card-title">Name: {inputs.name}  {inputs.lastName}</h5>
      <p class="card-text" ><h5>Description:</h5> {inputs.description}</p>
      <h5>Phone: {inputs.phoneNumber}</h5>
      <Button variant="contained" color="error" LinkComponent={Link} to={"/employees"} sx={{ mt: "auto" }}>
        Go Back
      </Button>
      </div>
    </div>
    </Grid>
       </div>
      )}
    </div>
  );
};

export default EmployeeByDetail;