const { getWorkout, getWorkouts, getExercises, getSessions } = require("./queries");
const { createWorkout, createExercise } = require("./mutation");

module.exports = {
    Query: {
        getWorkout,
        getWorkouts,
        getExercises,
        getSessions,
    },
    Mutation: {
        createWorkout,
        createExercise,
    }
}