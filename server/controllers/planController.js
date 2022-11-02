const Plans = require("../models/plans")

exports.create = (req, res) => {
	const { day, tasks } = req.body

	Plans.create({ day, tasks }, (err, plan) => {
		if (tasks.length !== 4) {
			return res.status(400).json({ error: "tasks length not equal to 4" })
		}
		if (err) {
			res.status(400).json(err.message)
		}
		res.json(plan)
	})
}
