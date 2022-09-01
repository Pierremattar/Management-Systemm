const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projects-controller");


router.get("/", projectsController.getAllProjects);
router.post("/", projectsController.addProject);
router.get("/:id", projectsController.getById);
router.put("/:id", projectsController.updateProject);
router.delete("/:id", projectsController.deleteProject);
router.get("/projectEmployee/:employee_id", projectsController.getByEmployeeId);
module.exports = router;