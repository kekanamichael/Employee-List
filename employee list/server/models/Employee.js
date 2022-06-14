const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    role: {
        type: String,
        required: true
    }
})

const Emp = mongoose.model('Emp', EmployeeSchema);
module.exports = Emp;