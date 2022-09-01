

//G2f0A86orqx3B8uX


const express = require("express");
const mongoose = require("mongoose");
const User = require('./model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = require("./routes/employee-routes");
const router1 = require("./routes/project-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/employees", router);
app.use("/projects", router1);


mongoose
.connect(
    "mongodb+srv://Admin:Admin1203@cluster0.1fymh.mongodb.net/Employee?retryWrites=true&w=majority"
   )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

  app.post('/api/register', async (req, res) => {
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10)
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: newPassword,
      })
      res.json({ status: 'ok' })
    } catch (err) {
      res.json({ status: 'error', error: 'Duplicate email' })
    }
  })
  
  app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
    })
  
    if (!user) {
      return { status: 'error', error: 'Invalid login' }
    }
  
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    )
  
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        'secret123'
      )
  
      return res.json({ status: 'ok', user: token })
    } else {
      return res.json({ status: 'error', user: false })
    }
  })
  
  