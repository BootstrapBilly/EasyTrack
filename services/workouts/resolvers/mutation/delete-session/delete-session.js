async function deleteSession(parent, { id }, { models }) {
    const { Session } = models;

    const deletedSession = await Session.findByIdAndDelete(id)

    return deletedSession;
};

module.exports = deleteSession;