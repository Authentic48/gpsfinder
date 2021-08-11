const express = require('express')
const dotenv = require('dotenv')
const { sequelize } = require('./config/db')
const userRoute = require('./routes/userRoute')

const app = express()

dotenv.config()

// In order to receive data from body
app.use(express.json())

//DB test 
sequelize.sync()
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Error: ' + err))


// Route 
// POST api/location to Send data
// GET api/location/:id to Receive  
app.use('/api/location', userRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${process.env.PORT}`))