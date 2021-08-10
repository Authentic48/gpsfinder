const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = { sequelize }