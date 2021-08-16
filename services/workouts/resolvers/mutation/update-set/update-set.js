async function updateSet(parent, { input }, { models }) {
    const { Session } = models;

    const { value, sessionId, index, type } = input;

    const session = await Session.findById(sessionId);

    session.sets[index][type] = value;

    const updatedSession = await session.save();

    return updatedSession;
};

module.exports = updateSet;