const Plans = require("../models/plans")

exports.create = (req, res) => {
	const { day, tasks } = req.body

	Plans.create({ day, tasks }, (err, plan) => {
		if (tasks.length !== 4) {
			return res
				.status(400)
				.json({ error: "tasks length not equal to 4" })
		}
		if (err) {
			res.status(400).json(err.message)
		}
		res.json(plan)
	})
}

exports.getAllPlans = (req, res) => {
	Plans.find().exec((err, plans) => {
		res.json(plans)
	})
}

exports.getPlansFromDay = (req, res) => {
	const { startDay } = req.params
	Plans.find({
		day: { $gte: parseInt(startDay), $lt: parseInt(startDay) + 7 },
	}).exec((err, plans) => {
		plan7days = []
		for (
			currentDay = startDay;
			currentDay < parseInt(startDay) + 7;
			currentDay++
		) {
			if (plans[0] && plans[0].day == currentDay) {
				plan7days.push(plans[0])
				plans.shift()
			} else {
				plan7days.push({ day: currentDay, tasks: ["", "", "", ""] })
			}
		}
		res.json(plan7days)
	})
}
