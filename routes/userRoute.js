// Express instance in order to access express route
const express = require('express')
// Importing functions from userController
const { findUserLocation, findUserLocationById } = require('../controllers/userController')
// an instance of express.Router
const router = express.Router()

// Post user data to DB
router.route('/').post(findUserLocation)

//Receive user data from DB by passing id as parameter
router.route('/:id').get(findUserLocationById)

// Export all routes as one 
module.exports = router