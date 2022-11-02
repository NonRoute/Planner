const express = require("express")
const router = express.Router()
const {create, getAllPlans, getPlansFromDay} = require("../controllers/planController")

router.post("/create", create)
router.get("/plans", getAllPlans)
router.get("/plan/:startDay", getPlansFromDay)

module.exports = router