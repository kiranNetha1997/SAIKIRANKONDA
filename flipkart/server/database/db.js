import mongoose from "mongoose";


const  DbConnection = async(USERNAME,PASSWORD) =>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.eectkwx.mongodb.net/?retryWrites=true&w=majority`
    try{
    await mongoose.connect(URL);
    console.log("Db Connected")
    }
    catch(err){
        console.log(err.message)
    }
}

export default DbConnection;