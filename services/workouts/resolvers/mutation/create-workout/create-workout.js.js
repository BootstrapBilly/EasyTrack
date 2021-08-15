async function createWorkout(parent, { input }, { models }) {

    const {
        name, createdBy, exercises
    } = input;

    const { Workout } = models;

    const createdWorkout = await Workout.create({
        name,
        createdBy,
        exercises
    })

    return createdWorkout;
};

module.exports = createWorkout;