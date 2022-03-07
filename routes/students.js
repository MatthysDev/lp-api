var express = require("express");
var router = express.Router();

var student_Controller = require("../controllers/student");

router.get("/", student_Controller.getAll);

router.get("/:id", student_Controller.getById);

router.post("/", student_Controller.create);

router.put("/:id", student_Controller.update);

router.delete("/:id", student_Controller.delete);

module.exports = router;
