const express = require("express")
const router = express.Router()
const {
	create,
	getAllPlans,
	getPlansFromDay,
	getTaskByDayTime,
	updateTask,
} = require("../controllers/planController")

router.post("/create", create)
router.get("/plans", getAllPlans)
router.get("/plan/:startDay", getPlansFromDay)
router.get("/taskAt/:day/:time", getTaskByDayTime)
router.put("/task/:day/:time", updateTask)

module.exports = router
