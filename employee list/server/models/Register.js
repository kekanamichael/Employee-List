const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    conPassword: {
        type: String,
        required: true
    }
})



const Register = mongoose.model("Register", RegistrationSchema)
module.exports = Register