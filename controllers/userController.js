const { Sequelize } = require('sequelize')
const User = require('../models/userModel')
// I am using this package to avoid try and catch in my function
const asyncHandler = require('express-async-handler')
 
 
const findUserLocation = asyncHandler(async (req, res) => {

    const { latitude, longitude } = req.body;

    if (latitude && longitude) {
        const geometry = { type: 'Point', coordinates: [latitude, longitude] }

        // console.log(geometry);

        const newUser = await User.create({
            location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(geometry))
        })

        // console.log(newUser);
        return res.status(201).json(newUser)
    } else {
        return res.status(400).json('Please turn on your location')
    }

})

const findUserLocationById = asyncHandler(async (req, res) => {

    const userLocation = await  User.findByPk(req.params.id)

    if (userLocation) {
        return res.status(201).json(userLocation)
    } else {
        return res.status(404).json(`User with id ${req.params.id} does not found`)
    }
})

module.exports = { findUserLocation, findUserLocationById }