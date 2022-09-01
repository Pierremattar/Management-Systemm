import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Employee.css";
import Grid from '@mui/material/Grid'

const Employee = (props) => {
  const { _id, name, lastName, image} = props.employee;
  const employee_id = _id;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/employees/${_id}`)
      .then((res) => res.data )
      .then(() =>  window.location.reload(false))
  };

  return (
    <Grid spacing={2} xs={3} md={3} maxHeight={500}>
      <div >
    <div class="card">
      <img src={image} alt=""  className="siz" />
      <div class="card-body">
      <h5 class="card-title">Name: {name} </h5>
      <h5 class="card-title">LastName:  {lastName} </h5>
      <div className="pos1">
      <Button class= "btn btn-primary " LinkComponent={Link} to={`/employees/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button class= "btn btn-secondary " LinkComponent={Link} to={`/employeeDetail/${_id}`} sx={{ mt: "auto" }}>
        Show Detail
      </Button>
      </div>
      <div className="pos1">
      <Button class= "btn btn-success " LinkComponent={Link} to={`/projectEmployee/${employee_id}`} sx={{ mt: "auto" }} >
        Show Projects
      </Button>
      <Button variant="contained" color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      </div>
      </div>
    </div>
    </div>
    </Grid>
  );
};

export default Employee;