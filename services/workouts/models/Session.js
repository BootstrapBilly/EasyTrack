const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    exerciseId: {
        type: String,
        required: true,
    },
    sets: [{
        reps: Number,
        weight: Number,
    }],
    createdBy: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Session", sessionSchema);