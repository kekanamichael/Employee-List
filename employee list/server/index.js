const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

const RegisterModel = require("./models/Register");
const EmployeeModel = require("./models/Employee")

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mernapplication', {
    useNewUrlParser: true,
})

app.post('/create', async (req, res) => {
    const fname = req.body.fname
    const surname = req.body.surname
    const email = req.body.email
    const password = req.body.password
    const conPassword = req.body.conPassword

    const register = RegisterModel({fname: fname, 
        surname: surname,
        email: email, 
        password: password, 
        conPassword: conPassword})

        try {
            await register.save();
        } catch (err){
            console.log(err);
        }
})
app.post('/emp', async (req, res) => {
    const fname = req.body.fname
    const surname = req.body.surname
    const email = req.body.email
    const role = req.body.role
    

    const register = EmployeeModel({fname: fname, 
        surname: surname,
        email: email, 
        role: role 
        })

        try {
            await register.save();
        } catch (err){
            console.log(err);
        } 
})


app.get('/read', async (req, res) => {
    EmployeeModel.find ({}, (err, result) => {
        if (err){
            res.send(err);
        }

        res.send(result)
    })
})
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await EmployeeModel.findByIdAndRemove(id).exec()
})


app.listen(3001, () => {
    console.log("server running on port 3001");
}) 