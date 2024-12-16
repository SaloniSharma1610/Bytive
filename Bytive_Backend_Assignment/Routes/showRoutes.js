const { Router } = require("express");
const { getTaskList } = require("../Controllers/task_controllers");
const router = Router();
router.get("/task", getTaskList);

module.exports = router;
