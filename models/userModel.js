const { Sequelize } = require('sequelize');
const { sequelize } = require('../Config/db')

const User = sequelize.define("user",{
    // POSTGRES takes care of the id automatically that's why I only need the location. 
    location: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }
});

module.exports = User