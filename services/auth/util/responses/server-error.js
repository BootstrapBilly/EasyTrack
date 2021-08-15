const serverErrorResponse = (res) => {
    return res.status(500).json({ // return a res with 500 status code
        success: false, // with success false to be used on the front end
        message: "Internal server error", // with the reason for the error
    })
}

module.exports = serverErrorResponse;