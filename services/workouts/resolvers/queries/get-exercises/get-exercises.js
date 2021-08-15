async function getExercises(parent, { filter = {} }, { models }) {
    const { muscle } = filter;

    const { Exercise } = models;

    let query = {

    };

    if(muscle) {
        query.muscle = muscle;
    }

    const exercises = await Exercise.find(query)

    return exercises;
};

module.exports = getExercises;