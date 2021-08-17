const attackDetected = (res) => {
    return res.status(418).json({ 
        success: false, 
        message: "Permission denied" 
    })
};

module.exports = attackDetected;
