module.exports = (message,status=500) => {
    throw {
        message: message,
        status: status
    };
}