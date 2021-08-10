const express = require('express')
const dotenv = require('dotenv')
const { sequelize }= require('./config/db')

const app = express()

dotenv.config()

//DB test 
sequelize.sync()
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Error: ' + err))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${process.env.PORT}`))