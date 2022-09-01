
const Project = require("../model/Project");

const getAllProjects = async (req, res, next) => {
  let projects;
  try {
    projects = await Project.find();
  } catch (err) {
    console.log(err);
  }

  if (!projects) {
    return res.status(404).json({ message: "No projects found" });
  }
  return res.status(200).json({ projects });
};




const getById = async (req, res, next) => {
  const id = req.params.id;
  let project;
  try {
    project = await Project.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!project) {
    return res.status(404).json({ message: "No Project found" });
  }
  return res.status(200).json({ project });
};

const getByEmployeeId = async (req, res, next) => {
  const employee_id = req.params.employee_id
  let project1;
  try {
    project1 = await Project.find({employee_id});
  } catch (err) {
    console.log(err);
  }
  if (!project1) {
    return res.status(404).json({ message: "No Project found" });
  }
  return res.status(200).json({ project1 });
};

const addProject = async (req, res, next) => {
  const { name, description, price, image, employee_id} = req.body;
  let project;
  try {
    project = new Project({
      name,
      description,
      price,
      employee_id,
      image,
    });
    await project.save();
  } catch (err) {
    console.log(err);
  }

  if (!project) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ project });
};

const updateProject= async (req, res, next) => {
  const id = req.params.id;
  const { name, description, price,image,  employee_id } = req.body;
  let project;
  try {
    project = await Project.findByIdAndUpdate(id, {
      name,
      description,
      price,
      employee_id,
      image
    });
    project = await project.save();
  } catch (err) {
    console.log(err);
  }
  if (!project) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ project });
};

const deleteProject = async (req, res, next) => {
  const id = req.params.id;
  let project;
  try {
    project = await Project.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!project) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Project Successfully Deleted" });
};

exports.getAllProjects = getAllProjects;
exports.addProject = addProject;
exports.getById = getById;
exports.getByEmployeeId = getByEmployeeId;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;