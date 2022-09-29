const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const cors = require('cors');
const devuser = require('./devModels');
const reviewUser = require('./revModels');
const middleware = require('./middleware');
const emailvalidator = require("email-validator");

const app = express();
app.use(express.json())
app.use(cors({origin: '*'}));

mongoose.connect('mongodb+srv://saikiran:saikiran@cluster0.8bmgkfr.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Db Connected')
    })
app.get('/', (req, res) => {
    return res.send('<h1>SaiKiran</h1>')
});
app.post('/register', async (req, res) => {
    try {
        const { fullname, email, mobile, skill,password, confirmpassword } = req.body;
        const exist = await devuser.findOne({ email })
        if (exist) {
             res.status(500).send("User Already Exist Please try with diffrent E-mail")
        }
    //     if(emailvalidator.validate(req.body.email)){
    //         res.status(400).send("Invalid E-mail")
    //   }
      if(fullname === ""){
        res.status(400).send("Please Enter Name")
      }
      if(email === ""){
        res.status(400).send("Please Enter E-mail")
      }
      if(mobile === ""){
        res.status(400).send("Please Enter Mobile")
      }
      if(skill === ""){
        res.status(400).send("Please Enter Skills")
      }
      if(password === ""){
        res.status(400).send("Please Enter Password")
      }
      if(confirmpassword === ""){
        res.status(400).send("Please Enter Confirm Password")
      }

        if (password != confirmpassword) {
            return res.status(500).send(" Password and Confirm password must be match")
        }
        const newUser = await new devuser({ fullname, email, mobile, password, confirmpassword, skill})
        newUser.save()
        res.status(200).send("User Created Successfully")
    }
    catch (err) {
        return res.status(503).send("Server Error")
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        let exist = await devuser.findOne({ email })
        if(exist === ""){
            res.status(400).send("Please Enter Email")  
          }
          if(emailvalidator.validate(req.body.email)){
        }else{
           res.status(400).send("Invalid E-mail")
        }
        if (!exist) {
            return res.status(503).send("User Not Found" )
        }
        if(exist === ""){
            res.status(400).send("Please Enter Email")
    
          }
        if (exist.password !== password) {
            return res.status(400).send("Password Not Correct")
        }
        let payload = {
            user: {
                id: exist.id
            }
        }
        jwt.sign(payload, 'jwtSecret', { expiresIn: "5h" },
            (err, token) => {
                if (err) throw err;
                return res.json({ token })
            }
        )
    }
    catch (err) {
        // console.log(err);
        return res.status(500).send('Server Error')
    }
});

app.get('/allprofile', async(req, res) => {
    try{
        // const {id} = req.params
       let allProfiles = await devuser.find();
       res.status(200).json(allProfiles)
    }
    catch(err){
        res.status(500).send("Profile Error" );  
    }
});

app.get('/myprofile',middleware,async(req,res) =>{
    try{
         let user = await devuser.findById(req.user.id);
        //  console.log(user)
         res.status(200).send({user})

    }
    catch(err){
        res.send(400).send("auth Error")
    }
});

app.post('/addreview',middleware,async(req,res) =>{
    try{
        const {taskworker,rating} = req.body;
        const exist = await devuser.findById(req.user.id)
        const newReview = new reviewUser({
            taskprovider : exist.fullname,
            taskworker,rating
        })
        newReview.save();
      return res.status(200).send("Review Added") 
    }
    catch(err){
        res.status(500).send("NetWork Error")
    }
});

app.get('/myreview',middleware,async(req,res) =>{
    try{
        let allReview = await reviewUser.find();
        let myreview = allReview.filter(review => review.taskworker.toString() === req.user.id);
        res.status(200).json(myreview)

    }
    catch(err){
        res.status(500).send("Network Error")
    }
})

app.listen(5000, () => {
    console.log("Server in 5000 port")
})  
