const Employee = require("../model/Employee");

const getAllEmployees = async (req, res, next) => {
  let employees;
  try {
    employees = await Employee.find();
  } catch (err) {
    console.log(err);
  }

  if (!employees) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ employees });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let employee;
  try {
    employee = await Employee.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!employee) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ employee });
};



const addEmployee = async (req, res, next) => {
  const { name, lastName, description, phoneNumber, image } = req.body;
  let employee;
  try {
    employee = new Employee({
      name,
      lastName,
      description,
      phoneNumber,
      image,
    });
    await employee.save();
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ employee });
};

const updateEmployee = async (req, res, next) => {
  const id = req.params.id;
  const { name, lastName, description, phoneNumber, image } = req.body;
  let employee;
  try {
    employee = await Employee.findByIdAndUpdate(id, {
      name, 
      lastName, 
      description, 
      phoneNumber, 
      image 
    });
    employee = await employee.save();
  } catch (err) {
    console.log(err);
  }
  if (!employee) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ employee });
};

const deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  let employee;
  try {
    employee = await Employee.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!employee) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.getById = getById;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;