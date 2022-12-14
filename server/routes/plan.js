const express = require("express")
const router = express.Router()
const {
	create,
	getAllPlans,
	getPlansFromDay,
	getTaskByDayTime,
	updateTask,
	deleteAllPlans,
	getDaysFromTask,
	getTasksByDay,
} = require("../controllers/planController")

router.post("/create", create)
router.get("/plans", getAllPlans)
router.get("/plan/:startDay", getPlansFromDay)
router.get("/tasksAt/:day", getTasksByDay)
router.get("/taskAt/:day/:time", getTaskByDayTime)
router.put("/task/:day/:time", updateTask)
router.get("/days/:task", getDaysFromTask)
router.delete("/deleteAllPlans", deleteAllPlans)

module.exports = router
