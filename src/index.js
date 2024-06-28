// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path:'./env'
})








connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT:${
            process.env.PORT
        }`)
    })

}).catch((err)=>{
    console.log("Mongo DB connection failed!!",err);
})

// import express from "express";
// const app= express()

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}`)
//         app.on ("error",(error)=>{
//             console.log("ERR: ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error("ERROR",error)
//         throw err

//     }
// })()