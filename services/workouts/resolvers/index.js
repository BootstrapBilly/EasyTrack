const { getWorkout, getWorkouts, getExercises, getSessions } = require("./queries");
const { addSetToSession, createWorkout, createExercise, createSession, deleteSession, updateSet } = require("./mutation");

module.exports = {
    Query: {
        getWorkout,
        getWorkouts,
        getExercises,
        getSessions,
    },
    Mutation: {
        addSetToSession,
        createWorkout,
        createExercise,
        createSession,
        deleteSession,
        updateSet,
    }
}