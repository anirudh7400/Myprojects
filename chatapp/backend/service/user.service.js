// import express from "express";
// import dbConnection from '../db/db.js'
// import User from '../model/user.model.js';
// import cors from "cors";
// import 'dotenv/config'

// const app = express();
// console.log("looks good from mongodb"); 
// dbConnection();
// app.use(express.json());
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
// }))
  

// app.post('/api/singup' , async (req,res) => {

//     try { 
//         const {userName, email, password} = req.body;

//         const newUser = new User({userName,email,password});

//         await newUser.save();
//         res.status(201).send('User signed up successfully');

//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Error signing up user. Please try again later.');
//     }
    
// })

// app.listen(process.env.PORT , () => {
//     console.log("port is running");
// })

