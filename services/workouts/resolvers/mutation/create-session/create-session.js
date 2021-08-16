async function createSession(parent, { input }, { models }) {

    const {
        exerciseId, createdBy,
    } = input;

    const { Session } = models;

    const createdSession = await Session.create({
        exerciseId,
        createdBy,
        sets: [{}],
    })

    return createdSession;
};

module.exports = createSession;