// import express 
const express = require('express');
// import mongoose db
const mongoose = require('mongoose');
const Registeruser = require("./model");
//import jwt for token
const jwt = require('jsonwebtoken');
const { send } = require('process');
// import middleware for genariong token
const middleware = require('./middleware');
// import cors for policy errors while send data from client to server
const cors = require('cors');

// calling express function in server
const app = express();
// connecting mongoose and entering out mangoose db credentials in(mongodb+srv://saikiran:saikiran@cluster0.x8wiqyj.mongodb.net/?retryWrites=true&w=majority)
mongoose.connect('mongodb+srv://saikiran:saikiran@cluster0.x8wiqyj.mongodb.net/?retryWrites=true&w=majority',
    {
        // for handling mongoose errors
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    .then(() => console.log("db connected"))
    .catch(err => console.log(err));
// get functuin is used tovgetting normal routes in our server
app.get('/', (req, res) => {
    res.send("<h1>Saikiran<h1>")
});
// to calling express in server side
app.use(express.json());
//
app.use(cors({ origin: "*" }))
//post using to post the data  and register is used to post the data in /register route
app.post('/register', async (req, res) => {
    // try block we are using to get data from client side
    try {
        const { username, email, password, confirmpassword } = req.body;
        let exist = await Registeruser.findOne({ email })
        // verifirng enter email is exist or not
        if (exist) {
            return res.status(400).send('User Already Exist')
        }
        // verifing pass and confirmpass is equal or not
        if (password !== confirmpassword) {
            return res.status(400).send('Password and confirmpassword  not matching');
        }
        // new user is for  details which are we entered in our clinet side saved in let newuser
        let newUser = new Registeruser({
            username,
            email,
            password,
            confirmpassword
        })
        // save() is used to save the details which are enterd in newUser
        await newUser.save();
        res.status(200).send('Registered Successfully')

    }
    // in any error 
    catch (err) {
        console.log(err)
        return res.status(500).send('Internel Server Error')
    }
})
// /login is used to login router 
app.post('/login', async (req, res) => {
    try {
        // we are using email and pass for log in in client side
        const { email, password } = req.body;
        let exist = await Registeruser.findOne({ email });
        // email not exist them show error
        if (!exist) {
            return res.status(400).send('User Not Found');
        }
        // enterd pass and db pasword not same
        if (exist.password !== password) {
            return res.status(400).send('Invalid credentials');
        }
        // payload is used to get id for user
        let payload = {
            user: {
                id: exist.id
            }
        }
        //sing( ) i used ti get token it will acces 2 parameters 1.is payload and jwtsecret token and expresIN for token  expire time
        jwt.sign(payload, 'jwtSecret', { expiresIn: 5 },
            (err, token) => {
                if (err) throw err;
                return res.json({ token })


            }

        )

    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error')
    }
})
// / myprofile is privare router and it will acces while user loggedin
app.get('/myprofile', middleware, async (req, res) => {
    // in try we are finding user by using finfByID()
    try {
        let exist = await Registeruser.findById(req.user.id);
        //is user not exist 
        if (!exist) {
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error')
    }
})
// app.listen for open our code running in 500 port
app.listen(5000, () => {
    console.log("Server is Runnning")
});