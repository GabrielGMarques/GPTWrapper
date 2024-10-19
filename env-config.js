require('dotenv').config();

module.exports = {
    openIaKey: process.env.OPEN_IA_KEY,
    expressPort: process.env.EXPRESS_PORT || '3000',
};