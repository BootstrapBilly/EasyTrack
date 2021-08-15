const userErrorResponse = (res, message, other = {}) => {
    return res.status(424).json({ // return a res with 424 status code
        success: false, // with success false to be used on the front end
        message, // with the reason for the error
        ...other, // and any other fields to be included in the response
    })
}

module.exports = userErrorResponse;