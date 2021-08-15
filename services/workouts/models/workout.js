const mongoose = require("mongoose");
const { exerciseSchema } = require("./exercise");
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
    exercises: [{ type: exerciseSchema, _id: false }],
});

module.exports = {
    model: mongoose.model("Workout", workoutSchema),
}