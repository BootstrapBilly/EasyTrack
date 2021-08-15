async function createExercise(parent, { input }, { models }) {

    const {
        name, createdBy, muscle
    } = input;

    const { Exercise } = models;

    const createdExercise = await Exercise.create({
        name,
        createdBy,
        muscle
    })

    return createdExercise;
};

module.exports = createExercise;