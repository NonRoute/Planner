const mongoose = require("mongoose")

const planSchema = mongoose.Schema({
    day: {
        type: Number,
        min: 1,
        index: true,
        unique: true,
        require: true
    },
    tasks: {
        type: [String],
        require: true
    }
}, {timestamps:true})

module.exports = mongoose.model("Plans", planSchema)