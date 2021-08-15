const { getWorkouts } = require("./queries");
const { createWorkout } = require("./mutation");

module.exports = {
    Query: {
        getWorkouts,
    },
    Mutation: {
        createWorkout,
    }
}