const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    dateEmployed: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema)
