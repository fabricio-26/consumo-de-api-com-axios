const Sequelize = require('sequelize');

const connection = new Sequelize('api', 'root', 'henrique260110', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;