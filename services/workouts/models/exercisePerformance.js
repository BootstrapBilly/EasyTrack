const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisePerformanceSchema = new Schema({
    exerciseId: {
        type: String,
        required: true,
    },
    sessions: {
        type: Array,
        required: true,
    },
});

module.exports = {
    schema: exercisePerformanceSchema,
    model: mongoose.model("ExercisePerformance", exercisePerformanceSchema)
};