import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import DbConnection from "./database/db.js";
import DefaultData from "./defaultData.js";
import Router from "./routes/route.js"
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',Router)
const PORT = 8000;

 const USERNAME = process.env.DB_USERNAME;
 const PASSWORD = process.env.DB_PASSWORD;

DbConnection(USERNAME,PASSWORD);

app.listen(PORT,() =>{
    console.log(`server is running in ${PORT} `)
});
DefaultData();