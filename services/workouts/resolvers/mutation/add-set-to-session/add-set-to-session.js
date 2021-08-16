async function addSetToSession(parent, { id }, { models }) {
    const { Session } = models;

    const updatedSession = await Session.findByIdAndUpdate(id, { 
        $addToSet: { 'sets': {} }, 
    }, {new: true})

    return updatedSession;
};

module.exports = addSetToSession;