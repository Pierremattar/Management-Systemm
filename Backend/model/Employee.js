const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: Number,
    // required: true,
  },
  // available: {
  //   type: Boolean,
  // },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);

