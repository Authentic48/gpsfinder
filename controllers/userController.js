const { Sequelize } = require('sequelize')
// importing the User model
const User = require('../models/userModel')
// I am using this package to avoid try and catch in my function
const asyncHandler = require('express-async-handler')
 

// @desc Storing User location in DB
// @access Public 
// @route POST api/location
const findUserLocation = asyncHandler(async (req, res) => {
    
    // Receiving data sent from the body
    const { latitude, longitude } = req.body;
    
    // Check if latitude and longitude 
    if (latitude && longitude) {
        
        // if so we create a const of type point for our coordinates 
        const geometry = { type: 'Point', coordinates: [latitude, longitude] }

        //create a user and store it in DB
        const newUser = await User.create({
            // Sequelize way of storing geometry data in Postgres, Please refer to Sequelize Docs for more 
            location: Sequelize.fn('ST_GeomFromGeoJSON', JSON.stringify(geometry)) 
        })
        // return the newUser created in json format 
        return res.status(201).json(newUser)
    } else {
        // if latitude and longitude don't exist we send this message
        return res.status(400).json('Please turn on your location')
    }

})

// @desc Retriving User DB by Id
// @access Public 
// @route GET api/location/:id
const findUserLocationById = asyncHandler(async (req, res) => {
    // finding an userlocation by Id 
    const userLocation = await  User.findByPk(req.params.id)
    // If it exist we send it to the browser
    if (userLocation) {
        return res.status(201).json(userLocation)
    } //else we send an error message
    else {
        return res.status(404).json(`User with id ${req.params.id} does not found`)
    }
})

// export the methods to others file
module.exports = { findUserLocation, findUserLocationById }