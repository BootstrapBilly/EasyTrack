const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    exercises: [{ 
        name: String,
        muscle: String,
        _id: false 
    }],
});

module.exports = mongoose.model("Workout", workoutSchema);