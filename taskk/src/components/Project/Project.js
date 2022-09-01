import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Employee/Employee.css";
import Grid from '@mui/material/Grid'

const Project = (props) => {
  const { _id, name, description, price, image} = props.project;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/projects/${_id}`)
      .then((res) => res.data )
      .then(() =>  window.location.reload(false))
  };

  return (
    <Grid spacing={2} xs={3} md={3}>
    <div class="card">
    <img src={image} alt=""  className="siz" />
      <div class="card-body">
      <h5 class="card-title">Name: {name}</h5>
      <p class="card-text" ><h5>Description:</h5> {description}</p>
      <p><h5>Cost:</h5> ${price}</p>
      <div className="buttpos">
      <Button class= "btn btn-success  " LinkComponent={Link} to={`/projects/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button class= "btn btn-primary" LinkComponent={Link} to={`/projectDetail/${_id}`} sx={{ mt: "auto" }}>
        Show Detail
      </Button>
      </div>
      <div className="delete">
      <Button variant="contained" color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      </div> 
      </div>
    </div>
    </Grid>
  );
};

export default Project;