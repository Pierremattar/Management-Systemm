const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  employee_id: {
    type: String,
  },
  image:{
    type: String
  }
});

module.exports = mongoose.model("Project", projectSchema);
