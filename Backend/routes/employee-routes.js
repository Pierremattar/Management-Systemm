const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees-controller");


router.get("/", employeesController.getAllEmployees);
router.post("/", employeesController.addEmployee);
router.get("/:id", employeesController.getById);
router.put("/:id", employeesController.updateEmployee);
router.delete("/:id", employeesController.deleteEmployee);

module.exports = router;