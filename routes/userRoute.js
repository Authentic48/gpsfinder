const express = require('express')
const { findUserLocation, findUserLocationById } = require('../controllers/userController')

const router = express.Router()

router.route('/').post(findUserLocation)

router.route('/:id').get(findUserLocationById)

module.exports = router