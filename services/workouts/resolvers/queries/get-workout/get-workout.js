async function getWorkout(parent, { id }, { models }) {
    const { Workout } = models;

    const workout = await Workout.findById(id)

    return workout;
};

module.exports = getWorkout;