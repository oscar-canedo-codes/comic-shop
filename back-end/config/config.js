require('dotenv').config();

const config = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'mongodb+srv://admin:admin@comic-shop.blwy1.mongodb.net/test',
    JWT_SECRET: process.env.DB_URL || 'secret-for-development',
};
console.log('CONFIG', config);

module.exports = config;