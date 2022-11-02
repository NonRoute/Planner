const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
const planRoute = require("./routes/plan")

//connect to cloud mongodb
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: false,
	})
	.then(() => console.log("connect to mongodb successfully"))
	.catch((err) => console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use("/api", planRoute)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`start server in port ${port}`))
