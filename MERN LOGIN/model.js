// mongoose for db
const mongoose = require('mongoose');
// RefisterUSER for input fileds
//Schema is stucture model for mongoose db
let Registeruser = new mongoose.Schema({
    username :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required:true,
    },
    confirmpassword : {
        type : String,
        required : true,
    }
})
// module exposrts
module.exports = mongoose.model('Registeruser',Registeruser) 