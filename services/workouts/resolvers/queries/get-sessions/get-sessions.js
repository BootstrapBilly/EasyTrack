async function getSessions(parent, { filter }, { models }) {
    const { createdBy, exerciseId } = filter;

    const { Session } = models;

    const sessions = await Session.find({createdBy, exerciseId})

    return sessions || [];
};

module.exports = getSessions;