
if (process.env.NODE_ENV !== "production") {
    const result = require("dotenv").config();
}

module.exports = {
    PORT: process.env.PORT || 3000,
    MODE: process.env.NODE_ENV || 'production',
    TRELLO:{
        API_KEY: process.env.TRELLO_API_KEY,
        TOKEN: process.env.TRELLO_TOKEN,
        SRC: 'https://api.trello.com/1'
    }
}