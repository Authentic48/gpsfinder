// Importing Sequelize from sequelize
const { Sequelize } = require('sequelize')

//  Importing dotenv from dotenv package
const dotenv = require('dotenv')

// Imported in order to access all variables defined in the file 
dotenv.config()

// DB Connection 
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = { sequelize }