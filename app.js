const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
require('dotenv/config');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

// Import Routes
const employeesRoute = require('./routes/employees')

app.use('/employees', employeesRoute)

// ROUTES
app.get('/', (req, res) => {
    res.send('Find all Employees here')
})

// Connect to db
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=> {
    console.log('Connected to DB')
});

// LISTEN HERE
app.listen(3000)