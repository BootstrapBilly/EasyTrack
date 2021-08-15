async function getWorkouts(parent, { createdBy }, { models }) {
    const { Workout } = models;

    const workouts = await Workout.find({ createdBy })

    return workouts;
};

module.exports = getWorkouts;