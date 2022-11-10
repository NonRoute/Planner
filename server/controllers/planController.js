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

exports.getTaskByDayTime = (req, res) => {
	const { day, time } = req.params
	console.log(day, time)
	Plans.find({
		day: { $eq: parseInt(day) },
	}).exec((err, plan) => {
		if (plan.length === 0) {
			plan = { day: day, task: "" }
		} else {
			if (time === "Morning") {
				plan = { day, task: plan[0].tasks[0] }
			} else if (time === "Afternoon") {
				plan = { day, task: plan[0].tasks[1] }
			} else if (time === "Evening") {
				plan = { day, task: plan[0].tasks[2] }
			} else {
				plan = { day, task: plan[0].tasks[3] }
			}
		}
		res.json(plan)
	})
}

exports.updateTask = (req, res) => {
	const { day, time } = req.params
	const { task } = req.body
	idx = "tasks."
	let tasks = ["", "", "", ""]
	if (time === "Morning") {
		idx += 0
		tasks[0] = task
	} else if (time === "Afternoon") {
		idx += 1
		tasks[1] = task
	} else if (time === "Evening") {
		idx += 2
		tasks[2] = task
	} else {
		idx += 3
		tasks[3] = task
	}

	let query = {}
	query[idx] = task

	Plans.find({
		day: { $eq: parseInt(day) },
	}).exec((err, plan) => {
		if (plan.length !== 0) {
			Plans.findOneAndUpdate(
				{ day },
				{ $set: query },
				{ new: true }
			).exec((err, blog) => {
				if (err) console.log(err)
				res.json(blog)
			})
		} else {
			Plans.create({ day, tasks }, (err, plan) => {
				if (err) {
					res.status(400).json(err.message)
				}
				res.json(plan)
			})
		}
	})
}

exports.deleteAllPlans = (req, res) => {
	Plans.deleteMany().exec((err, plan) => {
		if (err) console.log(err)
		res.json({
			message: "Delete success",
		})
	})
}

exports.getDaysFromTask = (req, res) => {
	const { task } = req.params
	Plans.aggregate([
		{
			$match: {
				tasks: new RegExp(task),
			},
		},
		{
			$group: {
				_id: null,
				day: {
					$push: {
						day: "$day",
					},
				},
			},
		},
		{
			$project: {
				day: "$day.day",
				_id: 0,
			},
		},
	]).exec((err, plan) => {
		res.json(plan)
	})
}
